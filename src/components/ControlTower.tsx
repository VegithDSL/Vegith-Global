import { motion } from "framer-motion";
import { Activity, AlertTriangle, CheckCircle2, MapPin, Truck, Wifi } from "lucide-react";

const vehicles = [
  { id: "VGS-001", route: "Mumbai → Pune", progress: 72, status: "On Time", eta: "2h 15m" },
  { id: "VGS-087", route: "Delhi → Jaipur", progress: 45, status: "On Time", eta: "3h 40m" },
  { id: "VGS-134", route: "Chennai → Bangalore", progress: 91, status: "Delayed", eta: "45m" },
  { id: "VGS-256", route: "Hyderabad → Mumbai", progress: 28, status: "On Time", eta: "6h 10m" },
];

const alerts = [
  { type: "warning", msg: "VGS-134: 22 min delay detected — rerouting", time: "2 min ago" },
  { type: "success", msg: "VGS-001: On schedule, ETA confirmed", time: "5 min ago" },
  { type: "info", msg: "VGS-256: Departed Hyderabad depot", time: "12 min ago" },
];

export function ControlTower() {
  return (
    <section id="control-tower" className="py-20 bg-[#0d1117] relative overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Live Command</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            Every Movement.<br />
            <span className="text-primary">Fully Visible.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Our central command monitors every vehicle, route, and milestone in real-time — predicting and resolving exceptions before they impact your SLA.
          </p>
        </motion.div>

        {/* GPS Dashboard */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-[#161b22] border border-white/8 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-white">Live GPS Map — India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs text-green-400 font-medium">LIVE</span>
              </div>
            </div>

            {/* SVG India Map mockup */}
            <div className="relative h-72 bg-[#0d1117] overflow-hidden p-4">
              <svg viewBox="0 0 600 380" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* India outline simplified */}
                <path
                  d="M200,40 L240,35 L280,50 L320,45 L360,60 L380,90 L390,130 L400,160 L410,200 L420,240 L400,270 L380,300 L360,320 L340,340 L320,360 L300,370 L280,355 L260,335 L240,310 L220,280 L200,250 L180,220 L170,190 L165,155 L170,120 L175,90 L185,65 Z"
                  fill="none"
                  stroke="#1e2d3d"
                  strokeWidth="1.5"
                />
                {/* State lines */}
                <path d="M200,40 L210,100 L230,150 L280,160 L330,155 L360,130 L390,130" fill="none" stroke="#1e2d3d" strokeWidth="0.5" />
                <path d="M165,190 L230,185 L290,195 L350,200 L390,200" fill="none" stroke="#1e2d3d" strokeWidth="0.5" />
                <path d="M170,120 L240,125 L300,130 L360,120" fill="none" stroke="#1e2d3d" strokeWidth="0.5" />

                {/* Route lines */}
                <motion.path
                  d="M180,240 L230,190 L290,155 L330,130"
                  fill="none" stroke="#E31E24" strokeWidth="2" strokeDasharray="6 3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M310,80 L330,130 L340,180"
                  fill="none" stroke="#1A4E9B" strokeWidth="2" strokeDasharray="6 3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <motion.path
                  d="M280,320 L285,260 L310,210 L330,180"
                  fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
                <motion.path
                  d="M260,270 L290,230 L310,200 L330,180"
                  fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 2 }}
                />

                {/* City dots */}
                {[
                  { x: 180, y: 240, label: "Mumbai", color: "#E31E24" },
                  { x: 310, y: 80, label: "Delhi", color: "#1A4E9B" },
                  { x: 280, y: 320, label: "Chennai", color: "#10b981" },
                  { x: 260, y: 270, label: "Hyderabad", color: "#f59e0b" },
                  { x: 330, y: 180, label: "Nagpur", color: "#a78bfa" },
                  { x: 230, y: 190, label: "Ahmedabad", color: "#E31E24" },
                  { x: 340, y: 130, label: "Jaipur", color: "#1A4E9B" },
                ].map((city) => (
                  <g key={city.label}>
                    <circle cx={city.x} cy={city.y} r="5" fill={city.color} opacity="0.9" />
                    <circle cx={city.x} cy={city.y} r="10" fill={city.color} opacity="0.15">
                      <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x={city.x + 8} y={city.y + 4} fill="#9ca3af" fontSize="9" fontFamily="sans-serif">{city.label}</text>
                  </g>
                ))}

                {/* Truck icons on routes */}
                <motion.circle
                  cx={0} cy={0} r="5" fill="#E31E24"
                  style={{ offsetPath: "path('M180,240 L230,190 L290,155 L330,130')" } as React.CSSProperties}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx={0} cy={0} r="5" fill="#1A4E9B"
                  style={{ offsetPath: "path('M310,80 L330,130 L340,180')" } as React.CSSProperties}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-3">
                {[
                  { color: "#E31E24", label: "VGS-001" },
                  { color: "#1A4E9B", label: "VGS-087" },
                  { color: "#10b981", label: "VGS-134" },
                  { color: "#f59e0b", label: "VGS-256" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className="w-3 h-1 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] text-gray-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle tracking rows */}
            <div className="p-4 space-y-2">
              {vehicles.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                >
                  <Truck className="w-4 h-4 text-gray-400 shrink-0" />
                  <div className="w-20 shrink-0">
                    <span className="text-xs font-bold text-white">{v.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400 mb-1 truncate">{v.route}</div>
                    <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${v.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 shrink-0 w-14 text-right">ETA {v.eta}</div>
                  <div className={`text-xs font-semibold shrink-0 px-2 py-0.5 rounded-full ${v.status === "On Time" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                    {v.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Stats */}
            <div className="rounded-2xl bg-[#161b22] border border-white/8 p-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Fleet Overview</h4>
              <div className="space-y-4">
                {[
                  { label: "Active Vehicles", value: "1,248", color: "text-green-400" },
                  { label: "Routes Running", value: "342", color: "text-blue-400" },
                  { label: "Delayed", value: "7", color: "text-yellow-400" },
                  { label: "Completed Today", value: "128", color: "text-white" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{stat.label}</span>
                    <span className={`text-lg font-black ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="rounded-2xl bg-[#161b22] border border-white/8 p-5 flex-1">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Live Alerts</h4>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                  >
                    {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />}
                    {alert.type === "success" && <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />}
                    {alert.type === "info" && <Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                    <div>
                      <p className="text-xs text-gray-300 leading-relaxed">{alert.msg}</p>
                      <span className="text-[10px] text-gray-500 mt-1 block">{alert.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl bg-[#161b22] border border-white/8 p-5">
              <div className="space-y-3">
                {[
                  { icon: Activity, title: "Live Telemetry", desc: "Speed, fuel & location" },
                  { icon: AlertTriangle, title: "Exception Alerts", desc: "Auto-flag deviations" },
                  { icon: CheckCircle2, title: "SLA Assurance", desc: "Proactive rerouting" },
                ].map((f) => (
                  <div key={f.title} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{f.title}</div>
                      <div className="text-xs text-gray-500">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
