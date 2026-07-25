import { motion } from "framer-motion";
import akhilImg from "@/assets/akhil.jpg";
import nikhilaImg from "@/assets/nikhila.jpg";

export function Page14Founders({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-y-auto custom-scrollbar pt-20 pb-16">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bp-grid opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-cyan/30" />
            <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
              COMMAND & CONTROL
            </div>
            <div className="h-px w-12 bg-cyan/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="display text-4xl md:text-6xl font-semibold mb-4 text-paper tracking-tight"
          >
            Frontline Operators. <br/>
            <span className="text-cyan">Not Boardroom Consultants.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-paper/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Built by leaders who have lived through breaches and emerged stronger.
          </motion.p>
        </div>

        {/* Founder Profiles */}
        <div className="flex flex-col gap-12 w-full">
          
          {/* Akhil Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full glass bg-void/80 backdrop-blur-md border border-cyan/20 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-cyan/40 transition-colors"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex-shrink-0 relative overflow-hidden rounded-sm border border-line/30 aspect-[3/4]">
              <img src={akhilImg} alt="Akhil Gabbeta" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay pointer-events-none" />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan/50" />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col h-full justify-center pt-2">
              <h3 className="display text-3xl font-semibold text-paper mb-1">Akhil Gabbeta</h3>
              <p className="mono text-xs text-cyan uppercase tracking-[0.1em] mb-6">Founder & CEO, Hackers In Threat Hunt</p>
              
              <div className="text-paper/80 text-sm leading-relaxed space-y-4 mb-8">
                <p>A cybersecurity visionary who started his journey hacking systems to understand them — and then dedicated his career to defending them. Akhil founded HITH Technologies to bring operator-grade security to enterprises worldwide.</p>
                <p>Under his leadership, HITH launched <span className="text-cyan font-semibold">Viranetra</span> — a unified cyber defense platform that combines telemetry, intelligence, detection, and response in one console. Featured in Business Talkz as "Hacking the Hackers" — Akhil's mission is to hunt threats before they become breaches.</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {["Cybersecurity Pioneer", "Viranetra Architect", "Enterprise Defense"].map(tag => (
                  <span key={tag} className="border border-cyan/30 bg-cyan/5 px-3 py-1.5 text-cyan mono text-[9px] uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Nikhila Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full glass bg-void/80 backdrop-blur-md border border-cyan/20 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-cyan/40 transition-colors"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex-shrink-0 relative overflow-hidden rounded-sm border border-line/30 aspect-[3/4]">
              <img src={nikhilaImg} alt="Nikhila Abbarla" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan/50" />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col h-full justify-center pt-2">
              <h3 className="display text-3xl font-semibold text-paper mb-1">Nikhila Abbarla</h3>
              <p className="mono text-xs text-cyan uppercase tracking-[0.1em] mb-6">Co-Founder & Chief Business Officer</p>
              
              <div className="text-paper/80 text-sm leading-relaxed space-y-4 mb-8">
                <p>Building a cybersecurity company requires more than technology. It requires trust, execution, market clarity, and the ability to convert complex security needs into practical business value.</p>
                <p>As Co-Founder and CBO, the role is focused on business strategy, client engagement, operational growth, and market positioning. This includes strengthening HITH's presence while aligning teams, services, and client outcomes with long-term business goals.</p>
                <p>For Viranetra, the objective is to establish it as a practical cyber intelligence platform. Driven by discipline and accountability, the mission is to support HITH's growth into a trusted cybersecurity brand built on reliability and measurable impact.</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {["Co-Founder & CBO", "Deep Tech Strategy", "Governance & Growth"].map(tag => (
                  <span key={tag} className="border border-cyan/30 bg-cyan/5 px-3 py-1.5 text-cyan mono text-[9px] uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {goToIndex && (
          <div className="mt-16 mb-8 w-full flex justify-end">
            <button onClick={() => goToIndex(2)} className="mono text-[10px] border border-cyan/30 bg-cyan/5 px-6 py-3 text-cyan hover:bg-cyan hover:text-void uppercase tracking-[0.2em] transition-colors flex items-center gap-3">
              ← Return to Operations Directory
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
