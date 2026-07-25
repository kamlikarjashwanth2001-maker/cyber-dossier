import { motion } from "framer-motion";

export function Page04ServicesHub({ goToIndex }: { goToIndex?: (i: number) => void }) {
  const allServices = [
    {
      title: "Threat Hunting",
      desc: "Proactive, intelligence-driven operations mapped to MITRE ATT&CK.",
      targetIndex: 3,
      icon: "🎯"
    },
    {
      title: "Penetration Testing",
      desc: "Simulated real-world attacks to uncover vulnerabilities.",
      targetIndex: 4,
      icon: "🛡️"
    },
    {
      title: "SOC as a Service",
      desc: "24/7/365 continuous monitoring, triage, and response.",
      targetIndex: 5,
      icon: "👁️"
    },
    {
      title: "Cloud Security",
      desc: "Hardening and defending AWS, Azure, and GCP architectures.",
      targetIndex: 6,
      icon: "☁️"
    },
    {
      title: "Application Security",
      desc: "Deep code review, SAST/DAST, and secure SDLC integration.",
      targetIndex: 7,
      icon: "🔒"
    },
    {
      title: "Digital Forensics",
      desc: "Deep-dive evidence recovery and artifact analysis.",
      targetIndex: 8,
      icon: "🔍"
    },
    {
      title: "Incident Response",
      desc: "Rapid containment, eradication, and recovery from active attacks.",
      targetIndex: 9,
      icon: "⚡"
    },
    {
      title: "Security Consulting",
      desc: "vCISO, compliance (ISO 27001, SOC2), and strategic advisory.",
      targetIndex: 10,
      icon: "📄"
    },
  ];

  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <div className="absolute inset-0 bp-grid-fine opacity-20 pointer-events-none" />
      
      <div className="relative z-10 h-full grid grid-rows-[auto_1fr] p-8 md:p-16">
        <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
          <div>04 — Operations Directory</div>
          <div className="text-paper/40 mt-1">Explore all capabilities</div>
        </div>

        <div className="flex flex-col justify-center h-full max-w-7xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display text-4xl md:text-6xl text-paper mb-12 text-center"
          >
            OUR SERVICES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 + 0.3 }}
                onClick={() => goToIndex?.(s.targetIndex)}
                className="group cursor-pointer block h-full"
              >
                <div className="h-full glass p-6 border border-line/60 hover:border-cyan/50 transition-colors relative overflow-hidden flex flex-col bg-ink/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="text-2xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{s.icon}</div>
                  <h3 className="text-xl font-medium text-paper mb-3 group-hover:text-cyan transition-colors">{s.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed flex-grow">{s.desc}</p>
                  
                  <div className="mt-6 flex items-center gap-2 mono text-[9px] uppercase tracking-[0.2em] text-cyan">
                    <span className="w-4 h-[1px] bg-cyan block group-hover:w-8 transition-all" />
                    <span>Explore →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
