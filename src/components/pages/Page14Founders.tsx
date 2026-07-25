import { motion } from "framer-motion";
import akhilImg from "@/assets/akhil.jpg";
import nikhilaImg from "@/assets/nikhila.jpg";

export function Page14Founders({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden flex flex-col p-8 md:p-12 xl:p-16">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bp-grid opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full">
        
        {/* Header - Fixed Height, Compact & Single Line */}
        <div className="flex-none flex items-center justify-between mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
                COMMAND & CONTROL
              </div>
              <div className="h-px w-12 bg-cyan/30" />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="display text-3xl md:text-4xl lg:text-5xl font-semibold text-paper tracking-tight whitespace-nowrap"
            >
              Architects of Defense. <span className="text-cyan">Hunters of Threats.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-paper/60 text-xs md:text-sm max-w-xs text-right hidden md:block"
          >
            Built by leaders who have lived through breaches and emerged stronger.
          </motion.p>
        </div>

        {/* Founder Profiles - Vertically Stacked (Flex-1) */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 min-h-0">
          
          {/* Akhil Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass bg-void/80 backdrop-blur-md border border-cyan/20 p-5 xl:p-6 flex items-stretch gap-6 xl:gap-8 hover:border-cyan/40 transition-colors overflow-hidden"
          >
            {/* Image */}
            <div className="w-40 xl:w-56 flex-shrink-0 relative overflow-hidden border border-line/30 h-full">
              <img src={akhilImg} alt="Akhil Gabbeta" className="absolute inset-0 w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan/50" />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h3 className="display text-2xl xl:text-3xl font-semibold text-paper mb-1 truncate">Akhil Gabbeta</h3>
              <p className="mono text-[10px] text-cyan uppercase tracking-[0.1em] mb-3 truncate">Founder & CEO, Hackers In Threat Hunt</p>
              
              <div className="text-paper/80 text-xs xl:text-sm leading-relaxed space-y-2 mb-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                <p>A cybersecurity visionary who started his journey hacking systems to understand them — and then dedicated his career to defending them. Akhil founded HITH Technologies to bring operator-grade security to enterprises worldwide.</p>
                <p>Under his leadership, HITH launched <span className="text-cyan font-semibold">Viranetra</span> — a unified cyber defense platform that combines telemetry, intelligence, detection, and response in one console. Featured in Business Talkz as "Hacking the Hackers" — Akhil's mission is to hunt threats before they become breaches.</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Cybersecurity Pioneer", "Viranetra Architect", "Enterprise Defense"].map(tag => (
                  <span key={tag} className="border border-cyan/30 bg-cyan/5 px-2 py-1 text-cyan mono text-[8px] xl:text-[9px] uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Nikhila Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 glass bg-void/80 backdrop-blur-md border border-cyan/20 p-5 xl:p-6 flex items-stretch gap-6 xl:gap-8 hover:border-cyan/40 transition-colors overflow-hidden"
          >
            {/* Image */}
            <div className="w-40 xl:w-56 flex-shrink-0 relative overflow-hidden border border-line/30 h-full">
              <img src={nikhilaImg} alt="Nikhila Abbarla" className="absolute inset-0 w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan/50" />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h3 className="display text-2xl xl:text-3xl font-semibold text-paper mb-1 truncate">Nikhila Abbarla</h3>
              <p className="mono text-[10px] text-cyan uppercase tracking-[0.1em] mb-3 truncate">Co-Founder & Chief Business Officer</p>
              
              <div className="text-paper/80 text-xs xl:text-sm leading-relaxed space-y-2 mb-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                <p>Building a cybersecurity company requires more than technology. It requires trust, execution, market clarity, and the ability to convert complex security needs into practical business value.</p>
                <p>As Co-Founder and CBO, the role is focused on business strategy, client engagement, operational growth, and market positioning. This includes strengthening HITH's presence while aligning teams, services, and client outcomes with long-term business goals.</p>
                <p>For Viranetra, the objective is to establish it as a practical cyber intelligence platform. Driven by discipline and accountability, the mission is to support HITH's growth into a trusted cybersecurity brand built on reliability and measurable impact.</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Co-Founder & CBO", "Deep Tech Strategy", "Governance & Growth"].map(tag => (
                  <span key={tag} className="border border-cyan/30 bg-cyan/5 px-2 py-1 text-cyan mono text-[8px] xl:text-[9px] uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer Navigation */}
        <div className="flex-none mt-6 flex justify-between items-center w-full">
           <div className="flex gap-3 mono text-[9px] uppercase tracking-[0.2em] text-paper/40">
              <span>[ RESTRICTED CLEARANCE ]</span>
           </div>
           {goToIndex && (
            <button onClick={() => goToIndex(2)} className="mono text-[9px] border border-cyan/30 bg-cyan/5 px-4 py-2 text-cyan hover:bg-cyan hover:text-void uppercase tracking-[0.2em] transition-colors">
              ← Return to Directory
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
