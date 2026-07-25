import { motion } from "framer-motion";
import cloudImg from "@/assets/p11-cloud.jpg";

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

      <div className="relative z-10 w-full h-full flex items-center justify-end p-8 md:p-16 pointer-events-none">
        {/* Floating frosted glass panel on the right - Made scrollable for extra content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl h-full max-h-[85vh] overflow-y-auto custom-scrollbar bg-void/85 backdrop-blur-xl border border-cyan/20 p-8 md:p-12 shadow-[0_0_50px_rgba(0,216,255,0.05)] pointer-events-auto"
        >
          <div className="flex justify-between items-start mb-6 sticky top-0 bg-void/90 backdrop-blur-md pt-2 pb-4 z-20 border-b border-line/30 -mt-4 mb-8">
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
            className="display text-4xl md:text-5xl leading-[1.1] font-semibold mb-2"
          >
            Cloud<br />
            <span className="text-cyan">Security.</span>
          </motion.h2>

          <p className="mono text-[10px] text-cyan uppercase tracking-[0.2em] mb-8">
            Secure your multi-cloud infrastructure and cloud-native apps.
          </p>

          <div className="mb-10">
            <h3 className="display text-lg font-semibold text-paper mb-3 border-l-2 border-cyan pl-3">Overview</h3>
            <p className="text-paper/70 text-sm leading-relaxed">
              Misconfigurations are the leading cause of cloud breaches. We analyze your AWS, Azure, GCP, and Kubernetes deployments to ensure proper IAM governance, network segmentation, and adherence to cloud security benchmarks.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="display text-lg font-semibold text-paper mb-4 border-l-2 border-cyan pl-3">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Cloud Security Posture Management (CSPM) implementation and tuning",
                "Identity & Access Management (IAM) privilege auditing (CIEM)",
                "Kubernetes and container security orchestration reviews",
                "Infrastructure as Code (IaC) security scanning and guardrails",
                "Cloud network architecture and egress filtering validation",
                "Continuous compliance mapping (CIS Benchmarks, NIST)"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-cyan/5 border border-cyan/10 p-3">
                  <span className="text-cyan mt-0.5">✓</span>
                  <span className="text-[11px] text-paper/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="display text-lg font-semibold text-paper mb-4 border-l-2 border-cyan pl-3">Key Deliverables</h3>
            <ul className="flex flex-col gap-2">
              {[
                "Cloud configuration audit reports",
                "IAM excess-privilege remediation plan",
                "Kubernetes cluster security scorecards",
                "Automated guardrail templates (Terraform, CloudFormation)",
                "Real-time drift detection setup"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  <span className="text-sm text-paper/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="display text-lg font-semibold text-paper mb-4 border-l-2 border-cyan pl-3">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-3">
              {[
                { q: "Do you support multi-cloud environments?", a: "Yes, our team is proficient across AWS, Azure, and Google Cloud Platform, providing unified security strategies." },
                { q: "How do you detect drift in cloud environments?", a: "We implement continuous monitoring tools and IaC guardrails that instantly alert on unauthorized configuration changes." }
              ].map((faq, i) => (
                 <div key={i} className="border border-line/30 p-4 bg-void">
                    <div className="text-cyan text-sm font-semibold mb-2">Q: {faq.q}</div>
                    <div className="text-paper/70 text-xs leading-relaxed">A: {faq.a}</div>
                 </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between mt-8 pt-6 border-t border-line/30">
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
