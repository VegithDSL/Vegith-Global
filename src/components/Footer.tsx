import vgsLogo from "../../public/VGS logo.png";
import { Link } from "wouter";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#020120" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="w-36 mb-5">
              <img src={vgsLogo} alt="Vegith Global Services" />
            </div>

            <p className="text-white/50 text-sm max-w-xs leading-relaxed mb-2">
              India's integrated logistics and fleet operations company.
            </p>

            <p className="text-white/30 text-xs italic mb-6">
              Commitment. Dedication. Delivery.
            </p>

          <div className="flex items-center gap-3">
  <a
    href="https://www.linkedin.com/company/vegith-global-services-limited/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300"
    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300"
    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300"
    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
  >
    <FaInstagram size={18} />
  </a>
</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#fleet"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Fleet Management
                </Link>
              </li>

              <li>
                <Link
                  href="/services#distribution"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Distribution Management
                </Link>
              </li>

              <li>
                <Link
                  href="/services#control-tower"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Control Tower & Monitoring
                </Link>
              </li>

              <li>
                <Link
                  href="/services#vas"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Value-Added Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Company
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  onClick={() => {
                   window.scrollTo(0, 0);
                   }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  onClick={() => {
                   window.scrollTo(0, 0);
                   }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  onClick={() => {
                   window.scrollTo(0, 0);
                   }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                   onClick={() => {
                   window.scrollTo(0, 0);
                   }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Group */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Our Group
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about/group#vgs"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Vegith Global Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about/group#mlpl"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  MLPL — Fleet Subsidiary
                </Link>
              </li>

              <li>
                <Link
                  href="/about/group#vp"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Vegith Pinnacle
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-white/30 mb-1">Email</p>

              <a
                href="mailto:info@vegithglobal.com"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                info@vegithglobal.com
              </a>
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Vegith Global Services Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  {l}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}