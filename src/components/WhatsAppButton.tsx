import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "8850258192"; // Replace with your WhatsApp number
  const message = "Hello, I would like to know more about your logistics services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
fixed bottom-6 right-6 z-50
w-14 h-14
rounded-full
bg-green-500
text-white
shadow-2xl
animate-pulse
hover:animate-none
hover:scale-110
transition-all
duration-300
flex items-center justify-center
"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}