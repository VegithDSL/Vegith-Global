import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden" style={{ paddingTop: "64px" }}>
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/images/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 transition-opacity duration-1000" style={{ backgroundColor: "#0a1628", opacity: loaded ? 0 : 1, zIndex: 1 }} />
        {/* <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.82) 40%, rgba(10,22,40,0.45) 65%, rgba(10,22,40,0.20) 100%)", zIndex: 2 }} /> */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,1) 0%, rgba(10,22,40,0.5) 18%, transparent 45%)", zIndex: 2 }} />
        {/* <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.45) 0%, transparent 18%)", zIndex: 2 }} /> */}
      </div>

      {/* ── MUTE TOGGLE ── */}
      {/* <button
        onClick={toggleMute}
        title={muted ? "Unmute" : "Mute"}
        className="absolute top-20 right-6 z-30 w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all"
        style={{ backgroundColor: "rgba(10,22,40,0.45)", backdropFilter: "blur(6px)" }}
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button> */}

      {/* ── HERO CONTENT — fills remaining height, centered vertically ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-6">
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#e31e24" }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-[0.2em]">
                India's Integrated Logistics Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-4"
            >
              Integrated Logistics.<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #e8a0a2 0%, #e31e24 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligent Operations.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm md:text-base text-white mb-2 font-bold tracking-[0.22em] uppercase"
            >
              Commitment · Dedication · Delivery
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-sm md:text-base text-white mb-6 max-w-lg leading-relaxed "
            >
              Fleet management, distribution, and real-time control tower operations — built for modern enterprise movement across India.
            </motion.p>

            {/* CTAs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-sm transition-all group"
                style={{ backgroundColor: "#e31e24" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#c51a20")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#e31e24")}
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white border border-white/30 rounded-sm hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Talk to Our Team
              </a>
            </motion.div> */}
            {/* CTAs */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.55 }}
  className="flex flex-wrap items-center gap-3 mb-6"
>
  <Link
    href="/services"
    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-sm transition-all group"
    style={{ backgroundColor: "#e31e24" }}
  >
    Explore Services
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Link>

  <Link
    href="/contact"
    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white border border-white/30  rounded-sm hover:bg-white/10% hover:border-white/50 transition-all"
    style={{ backgroundColor: "rgba(255,255,255,0.05)"}}
  >
    Talk to Our Team
  </Link>
</motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {["GPS-Enabled Fleet", "24/7 Control Tower", "Pan-India Network", "300+ Owned Vehicles"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold text-white border border-white/15"
                  style={{ backgroundColor: "rgba(206, 74, 74, 0.05)", backdropFilter: "blur(6px)" }}
                >
                  <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR — anchored at bottom ── */}
      <div
        className="relative z-10 w-full"
        style={{ background: "rgba(182, 182, 182, 0)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "300+", label: "Owned Vehicles", sub: "via MLPL" },
              { value: "50,000+", label: "Trips Monitored", sub: "annually" },
              { value: "100+", label: "Cities Connected", sub: "pan-India" },
              { value: "24 / 7", label: "Control Tower", sub: "operations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="py-4 px-6 text-center"
              >
                <div className="text-xl md:text-2xl font-black text-white mb-0.5 tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/50 font-semibold uppercase tracking-widest">{stat.label}</div>
                <div className="text-[10px] text-white/30 mt-0.5 uppercase tracking-wider">{stat.sub}</div>
              </motion.div>            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
