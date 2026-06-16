import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ConfidentialClientApplication } from '@azure/msal-node';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';
import multer from "multer";

const app = express();
const result = dotenv.config();

const upload = multer({
  storage: multer.memoryStorage(),
});

app.use(cors());
app.use(express.json());

// ADD THESE 5 LINES HERE
console.log("Dotenv Result:", result);
console.log("Current Directory:", process.cwd());
console.log({
  tenant: process.env.TENANT_ID,
  client: process.env.CLIENT_ID,
  secretLoaded: !!process.env.CLIENT_SECRET,
});

const cca = new ConfidentialClientApplication({
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
    clientSecret: process.env.CLIENT_SECRET,
  },
});

app.post('/api/contact', async (req, res) => {
  console.log("FORM RECEIVED");
  console.log(req.body);
  try {

    const token =
      await cca.acquireTokenByClientCredential({
        scopes: ['https://graph.microsoft.com/.default'],
      });

    const client = Client.init({
      authProvider: (done) => {
        done(null, token.accessToken);
      },
    });

 const {
  name,
  company,
  email,
  phone,
  service,
  office,
  message,
} = req.body;

    await client
      .api('/users/tms.support@vegithglobal.com/sendMail')
      .post({
        message: {
          subject: `Website Enquiry - ${name}`,
          body: {
            contentType: 'HTML',
            content: `
              <h3>New Website Enquiry</h3>
              <p><b>Name:</b> ${name}</p>
              <p><b>Company:</b> ${company}</p>
              <p><b>Office:</b> ${office}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Service:</b> ${service}</p>
              <p><b>Message:</b><br>${message}</p>
            `,
          },
          toRecipients: [
            {
              emailAddress: {
                address: 'tms.support@vegithglobal.com',
              },
            },
          ],
        },
      });

    res.json({
      success: true,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
    });
  }
});

app.post(
  '/api/careers',
  upload.single('resume'),
  async (req, res) => {

  console.log("CAREER FORM RECEIVED");
console.log(req.body);
console.log(req.file?.originalname);
console.log(req.body);
  try {

    const token =
      await cca.acquireTokenByClientCredential({
        scopes: ['https://graph.microsoft.com/.default'],
      });

    const client = Client.init({
      authProvider: (done) => {
        done(null, token.accessToken);
      },
    });

    const {
      fullName,
      email,
      phone,
      experience,
      position,
      coverNote,
      resumeFileName,
    } = req.body;

    const resumeFile = req.file;

const attachment = resumeFile
  ? [
      {
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: resumeFile.originalname,
        contentBytes: resumeFile.buffer.toString("base64"),
      },
    ]
  : [];

    await client
      .api('/users/tms.support@vegithglobal.com/sendMail')
      .post({
        message: {
  subject: `[Career Application] ${fullName}`,

  body: {
    contentType: 'HTML',
    content: `
      <h2>New Career Application</h2>
      <hr>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Experience:</b> ${experience}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>Cover Note:</b></p>
      <p>${coverNote}</p>
    `,
  },

  toRecipients: [
    {
      emailAddress: {
        address: 'tms.support@vegithglobal.com',
      },
    },
  ],

  attachments: attachment,
},
      });

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log('API Running on Port 3001');
});
