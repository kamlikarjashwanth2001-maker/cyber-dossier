import { motion } from "framer-motion";
import cloudImg from "@/assets/p11-cloud.jpg";

export function Page08CloudSecurity({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-y-auto custom-scrollbar">
      
      {/* Animated Glowing Cloud Lights in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 30, 0], y: [0, 50, -20, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[50%] right-[10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 40, -40, 0], y: [0, 40, -40, 0], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-cyan/20 rounded-full blur-[90px]"
        />
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-[40vh] flex flex-col justify-center px-8 md:px-24 pt-24 pb-8 z-10">
        {/* Background Image with Gradient Fade */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={cloudImg}
            alt="Cloud Security"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/80 to-void" />
          <div className="absolute inset-0 bp-grid-fine opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
              08 — Discipline
            </div>
            <div className="h-px w-12 bg-cyan/30" />
            <div className="flex items-center gap-2 mono text-[9px] text-cyan/70">
              <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
              MULTI-CLOUD ENVIRONMENT ACTIVE
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold mb-4 tracking-tight text-paper"
          >
            Cloud<br />
            <span className="text-cyan">Security.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mono text-xs md:text-sm text-cyan uppercase tracking-[0.2em] max-w-2xl leading-relaxed"
          >
            Secure your multi-cloud infrastructure and cloud-native apps.
          </motion.p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 w-full px-8 md:px-24 pb-24 flex flex-col gap-12">
        
        {/* Overview Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h3 className="display text-2xl font-semibold text-paper mb-4 flex items-center gap-4">
            <span className="w-8 h-px bg-cyan"></span>
            Overview
          </h3>
          <p className="text-paper/80 text-base leading-relaxed">
            Misconfigurations are the leading cause of cloud breaches. We analyze your AWS, Azure, GCP, and Kubernetes deployments to ensure proper IAM governance, network segmentation, and adherence to cloud security benchmarks.
          </p>
        </motion.div>

        {/* What's Included Row - Brought much higher up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <h3 className="display text-2xl font-semibold text-paper mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-cyan"></span>
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Cloud Security Posture Management (CSPM) implementation and tuning",
              "Identity & Access Management (IAM) privilege auditing (CIEM)",
              "Kubernetes and container security orchestration reviews",
              "Infrastructure as Code (IaC) security scanning and guardrails",
              "Cloud network architecture and egress filtering validation",
              "Continuous compliance mapping (CIS Benchmarks, NIST)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border border-cyan/10 bg-panel/30 p-5 hover:bg-cyan/5 hover:border-cyan/30 transition-colors backdrop-blur-sm rounded-sm">
                <div className="flex-shrink-0 w-5 h-5 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center mt-0.5">
                  <span className="text-cyan text-xs">✓</span>
                </div>
                <span className="text-[13px] text-paper/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & FAQ Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="display text-2xl font-semibold text-paper mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-cyan"></span>
              Key Deliverables
            </h3>
            <div className="bg-panel/40 border border-line/30 p-8 backdrop-blur-sm">
              <ul className="flex flex-col gap-4">
                {[
                  "Cloud configuration audit reports",
                  "IAM excess-privilege remediation plan",
                  "Kubernetes cluster security scorecards",
                  "Automated guardrail templates (Terraform, CloudFormation)",
                  "Real-time drift detection setup"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-cyan rotate-45" />
                    <span className="text-[14px] text-paper/90 tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="display text-2xl font-semibold text-paper mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-cyan"></span>
              FAQ
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { q: "Do you support multi-cloud environments?", a: "Yes, our team is proficient across AWS, Azure, and Google Cloud Platform, providing unified security strategies." },
                { q: "How do you detect drift in cloud environments?", a: "We implement continuous monitoring tools and IaC guardrails that instantly alert on unauthorized configuration changes." }
              ].map((faq, i) => (
                 <div key={i} className="border border-line/30 p-6 bg-panel/30 hover:bg-panel/50 transition-colors backdrop-blur-sm">
                    <div className="text-cyan text-sm font-semibold mb-3 tracking-wide">{faq.q}</div>
                    <div className="text-paper/70 text-[13px] leading-relaxed">{faq.a}</div>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Footer Navigation */}
        <div className="pt-8 border-t border-line/30 flex justify-between items-center mt-8">
           <div className="flex gap-3 mono text-[9px] uppercase tracking-[0.2em] text-paper/40">
              <span>[ CONFIDENTIAL ]</span>
           </div>
           {goToIndex && (
            <button onClick={() => goToIndex(2)} className="mono text-[10px] bg-cyan/10 border border-cyan/30 px-6 py-3 text-cyan hover:bg-cyan hover:text-void uppercase tracking-[0.2em] transition-all flex items-center gap-3">
              ← Return to Directory
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
