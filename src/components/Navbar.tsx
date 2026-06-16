import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Landmark, PhoneCall, ShieldCheck, Scale, FileWarning } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

import { Link, useLocation } from "wouter";

import vgsLogo from "../../public/VGS logo.png";

const serviceDropdownItems = [
  {
    id: "fleet",
    title: "Fleet Management",
    desc: "FTL, Reverse Logistics, Hybrid Fleet",
    href: "/services#fleet",
  },
  {
    id: "distribution",
    title: "Distribution Management",
    desc: "Route Planning, Last-Mile",
    href: "/services#distribution",
  },
  {
    id: "control-tower",
    title: "Control Tower & Monitoring",
    desc: "GPS Tracking & Monitoring",
    href: "/services#control-tower",
  },
  {
    id: "vas",
    title: "Value Added Services",
    desc: "Emergency Response & Compliance",
    href: "/services#vas",
  },
];

const aboutDropdownItems = [
  {
    id: "overview",
    icon: Building2,
    title: "Company Overview",
    desc: "Our story & vision",
    href: "/about",
  },
  {
    id: "leadership",
    icon: Users,
    title: "Leadership Team",
    desc: "Meet our leadership",
    href: "/about/leadership",
  },
  {
    id: "group",
    icon: Briefcase,
    title: "The Vegith Group",
    desc: "Group companies",
    href: "/about/group",
  },
];
const investorDropdownItems = [
  { 
    id: "financial", 
    icon: Landmark, 
    title: "Financial Data", 
    desc: "Audited statements", 
    href: "/pages/FinancialData" 
  },
  { 
    id: "annual", 
    icon: FileText, 
    title: "Annual Return", 
    desc: "Yearly return reports", 
    href: "/investor/annual-return" 
  },
  { 
    id: "enquiry", 
    icon: PhoneCall, 
    title: "Investor Enquiry", 
    desc: "Contact details", 
    href: "/investor/enquiry" 
  },
];

export function Navbar() {
  const [location, navigate] = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const [investorOpen, setInvestorOpen] = useState(false);

  const [mobileInvestorOpen, setMobileInvestorOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [location]);

  const handleHashNavigation = (href: string) => {
    const [path, hash] = href.split("#");

    if (window.location.pathname === path && hash) {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.history.replaceState(null, "", href);
    } else {
      navigate(href);
    }

    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 shadow-sm"
          : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <img
            src={vgsLogo}
            alt="Vegith Global Services"
            className="w-32 h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">

          {/* Home */}
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              location === "/"
                ? "text-[#0a1628] font-semibold"
                : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition ${
                location.startsWith("/about")
                  ? "text-[#0a1628] font-semibold"
                  : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
              }`}
            >
              About Us

              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3"
                >
                  {aboutDropdownItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#0a1628] transition">
                          <Icon className="w-4 h-4 text-gray-500 group-hover:text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#0a1628]">
                              {item.title}
                            </span>

                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition" />
                          </div>

                          <p className="text-xs text-gray-400 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition ${
                location.startsWith("/services")
                  ? "text-[#0a1628] font-semibold"
                  : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
              }`}
            >
              Services

              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2"
                >
                  {serviceDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleHashNavigation(item.href)}
                      className="group text-left flex flex-col gap-1 p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#0a1628]">
                          {item.title}
                        </span>

                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition" />
                      </div>

                      <p className="text-xs text-gray-400">
                        {item.desc}
                      </p>
                    </button>
                  ))}

                  <div className="col-span-2 pt-2 border-t border-gray-100 mt-1">
                    <Link
                      href="/services"
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0a1628] text-white text-sm font-semibold hover:bg-[#1a2d4a] transition"
                    >
                      View All Services

                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Careers */}
          <Link
            href="/careers"
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              location === "/careers"
                ? "text-[#0a1628] font-semibold"
                : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
            }`}
          >
            Careers
          </Link>

            {/* Investor Droupdown */}
            <div className="relative" onMouseEnter={() => setInvestorOpen(true)} onMouseLeave={() => setInvestorOpen(false)}>
            <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition ${
              location.startsWith("/investor") ? "text-[#0a1628] font-semibold" : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
            }`}>
              Investor <ChevronDown className={`w-4 h-4 transition-transform ${investorOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {investorOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
                  {investorDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.id} href={item.href} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#0a1628] transition">
                          <Icon className="w-4 h-4 text-gray-500 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#0a1628]">{item.title}</span>
                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        {/* Corporate */}
        <Link
            href="/corporate/policies"
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              location === "/careers"
                ? "text-[#0a1628] font-semibold"
                : "text-gray-600 hover:text-[#0a1628] hover:bg-gray-50"
            }`}
          >
            Corporate
          </Link>

        </nav>

       

        {/* Contact Button */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-md bg-[#0a1628] hover:bg-[#1a2d4a] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">

              <Link
                href="/"
                className="block py-2 text-sm font-medium text-gray-700"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block py-2 text-sm font-medium text-gray-700"
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                >
                  Services

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          handleHashNavigation(item.href)
                        }
                        className="block text-left text-sm text-gray-600"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/careers"
                className="block py-2 text-sm font-medium text-gray-700"
              >
                Careers
              </Link>
              
              {/* MobileInvestor */}
              <div>
                <button
                  onClick={() =>
                    setMobileInvestorOpen(!mobileInvestorOpen)
                  }
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                >
                  Investor

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileInvestorOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileInvestorOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {investorDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() =>
                          handleHashNavigation(item.href)
                        }
                        className="block text-left text-sm text-gray-600"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              
              <Link
                href="/careers"
                className="block py-2 text-sm font-medium text-gray-700"
              >
                Corporate
              </Link>

              <Link
                href="/contact"
                className="block mt-4 text-center px-5 py-3 text-sm font-semibold text-white rounded-md bg-[#0a1628]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}