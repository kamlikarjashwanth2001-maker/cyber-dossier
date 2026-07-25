import { motion } from "framer-motion";
import cloudImg from "@/assets/p11-cloud.jpg";

export function Page08CloudSecurity({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      
      {/* Full bleed background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={cloudImg}
          alt="Cloud Security"
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent" />
        <div className="absolute inset-0 bp-grid-fine opacity-30" />
      </div>

      {/* Animated SVG Cloud Network (Inspired by Pentest Graph) */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
         <motion.path
            d="M 100,600 L 400,300 L 700,500 L 1100,200 L 1500,400"
            fill="none"
            stroke="#00D8FF"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
         />
         <motion.path
            d="M 100,600 L 500,700 L 900,450 L 1300,600 L 1700,300"
            fill="none"
            stroke="#FF355E"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
         />
         {[
           { cx: 400, cy: 300, c: "#00D8FF" },
           { cx: 700, cy: 500, c: "#00D8FF" },
           { cx: 1100, cy: 200, c: "#00D8FF" },
           { cx: 500, cy: 700, c: "#FF355E" },
           { cx: 900, cy: 450, c: "#FF355E" },
         ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={5}
              fill="#0B1220"
              stroke={node.c}
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + i * 0.2 }}
            />
         ))}
      </svg>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full h-full flex flex-col p-8 md:p-16">
        
        {/* Top Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            08 — CLOUD SEC
          </div>
          <div className="h-px w-12 bg-cyan/30" />
          <div className="flex items-center gap-2 mono text-[9px] text-cyan/70">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
            MULTI-CLOUD ARCHITECTURE
          </div>
        </div>

        {/* Hero Title (Left Side) */}
        <div className="max-w-2xl mt-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display text-6xl md:text-8xl leading-[1.05] font-semibold mb-6 text-paper"
          >
            Cloud<br />
            <span className="text-cyan">Security.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-paper/80 text-sm leading-relaxed max-w-lg mb-8"
          >
            Misconfigurations are the leading cause of cloud breaches. We analyze your AWS, Azure, GCP, and Kubernetes deployments to ensure proper IAM governance and network segmentation.
          </motion.p>
        </div>

        {/* Floating Glass Panel (Right Side) */}
        <div className="absolute top-16 right-8 md:right-16 max-w-md w-full">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="glass p-6 bg-void/80 backdrop-blur-md border border-cyan/20"
           >
              <div className="mono text-[9px] text-cyan tracking-[0.3em] mb-4 uppercase">
                What's Included
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "CSPM implementation and tuning",
                  "IAM privilege auditing (CIEM)",
                  "Kubernetes & container reviews",
                  "IaC security scanning and guardrails",
                  "Continuous compliance mapping"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan mt-0.5 text-xs">✓</span>
                    <span className="text-xs text-paper/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
           </motion.div>
        </div>

        {/* Floating Deliverable Cards (Bottom) */}
        <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 w-full max-w-5xl">
          {[
            { tag: "AUDIT", title: "Config Reports", desc: "AWS, Azure, GCP audits." },
            { tag: "REMEDIATE", title: "IAM Plans", desc: "Excess-privilege mapping." },
            { tag: "GUARDRAIL", title: "IaC Templates", desc: "Terraform & CloudFormation." },
            { tag: "MONITOR", title: "Drift Detection", desc: "Real-time alerts setup." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="border border-cyan/20 bg-void/60 backdrop-blur-sm p-4 hover:border-cyan/50 transition-colors"
            >
              <div className="mono text-[8px] text-cyan tracking-[0.2em] mb-2">{item.tag}</div>
              <div className="display text-sm font-semibold text-paper mb-1">{item.title}</div>
              <div className="text-[10px] text-paper/60">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {goToIndex && (
          <div className="absolute bottom-8 right-8 md:right-16">
            <button onClick={() => goToIndex(2)} className="mono text-[10px] border border-cyan/30 bg-cyan/5 px-6 py-2 text-cyan hover:bg-cyan/20 uppercase tracking-[0.2em] transition-colors">
              ← Back to Directory
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
