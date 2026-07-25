import { motion } from "framer-motion";
import cloudImg from "@/assets/p11-cloud.jpg";

const PROCESS = [
  { n: "01", t: "POSTURE", d: "Assess and harden IAM, network, and storage configurations." },
  { n: "02", t: "COMPUTE", d: "Secure serverless functions and Kubernetes clusters." },
  { n: "03", t: "DETECT", d: "Monitor control plane logs (CloudTrail, Azure Monitor)." },
  { n: "04", t: "RESPOND", d: "Automate containment of compromised cloud identities." },
];

export function Page08CloudSecurity({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-ink overflow-hidden">
      {/* Full bleed background image with low opacity */}
      <motion.img
        src={cloudImg}
        alt="Cloud Architecture Map"
        width={1920}
        height={1080}
        loading="lazy"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bp-grid opacity-50" />

      {/* Animated SVG Network Mesh representing Cloud */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        {[
          { x1: "10%", y1: "80%", x2: "40%", y2: "40%", c: "#00D8FF" },
          { x1: "40%", y1: "40%", x2: "70%", y2: "70%", c: "#00D8FF" },
          { x1: "70%", y1: "70%", x2: "90%", y2: "30%", c: "#FF355E" },
          { x1: "20%", y1: "20%", x2: "40%", y2: "40%", c: "#00D8FF" },
          { x1: "60%", y1: "15%", x2: "90%", y2: "30%", c: "#00D8FF" },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.c}
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: i * 0.3 }}
          />
        ))}
        {/* Animated Packets on lines */}
        {[
          { cx: "40%", cy: "40%", delay: 0 },
          { cx: "70%", cy: "70%", delay: 1 },
          { cx: "90%", cy: "30%", delay: 1.5 },
        ].map((node, i) => (
          <motion.circle
            key={`n${i}`}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#0B1220"
            stroke="#00D8FF"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + node.delay }}
          />
        ))}
      </svg>

      <div className="relative z-10 w-full h-full flex items-center justify-end p-8 md:p-16">
        {/* Floating frosted glass panel on the right */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-void/80 backdrop-blur-md border border-cyan/20 p-8 md:p-12 shadow-[0_0_50px_rgba(0,216,255,0.05)]"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
              08 — Discipline
            </div>
            <div className="flex items-center gap-2 mono text-[9px] text-cyan/70">
              <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
              REGION: us-east-1 ONLINE
            </div>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display text-4xl md:text-6xl leading-[1.1] font-semibold mb-6"
          >
            Cloud<br />
            <span className="text-cyan">Security.</span>
          </motion.h2>

          <p className="max-w-md text-paper/70 text-sm leading-relaxed mb-8">
            The cloud is someone else's computer, but the risk is entirely yours. We secure AWS, Azure, and GCP architectures from misconfiguration and lateral movement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="border-l-2 border-cyan/40 pl-4 py-1"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="mono text-[9px] text-cyan">{p.n}</span>
                  <span className="display font-semibold text-sm tracking-wide">{p.t}</span>
                </div>
                <div className="mono text-[9px] text-paper/50 leading-relaxed">{p.d}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between mt-auto pt-6 border-t border-line/30">
             <div className="flex flex-wrap gap-2 mono text-[8px] uppercase tracking-[0.2em] text-paper/60">
              {["AWS", "AZURE", "GCP", "CSPM", "KUBERNETES"].map((t) => (
                <span key={t} className="px-2 py-1 bg-cyan/5 text-cyan/80">
                  {t}
                </span>
              ))}
            </div>
            
            {goToIndex && (
              <button onClick={() => goToIndex(2)} className="mono text-[9px] text-cyan hover:text-white uppercase tracking-[0.2em] transition-colors flex items-center gap-2">
                ← Directory
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
