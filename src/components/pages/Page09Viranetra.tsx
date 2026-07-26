import { motion } from "framer-motion";
import viranetra from "@/assets/p9-viranetra.jpg";

export function Page09Viranetra() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30" />

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 p-8 md:p-14 gap-8">
        
        {/* Left Side Content */}
        <div className="md:col-span-5 flex flex-col justify-start pt-4 xl:pt-10">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan mb-6 xl:mb-8">
            09 — Platform Feature
          </div>

          <div>
            <div className="mono text-[10px] text-cyan tracking-[0.35em] mb-3">◈ VIRANETRA</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="display text-5xl md:text-6xl xl:text-7xl leading-[1] font-semibold tracking-tight"
            >
              Meet <span className="text-cyan">Viranetra</span>
            </motion.h2>
            <p className="mt-5 max-w-md text-paper/70 text-sm md:text-base leading-relaxed">
              A unified cyber defense platform — telemetry, intelligence, detection, and response in one operator-grade console.
            </p>
          </div>

          {/* Mini Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full mt-6 xl:mt-8 bg-void/80 backdrop-blur-md border border-line/30 rounded-lg p-4 xl:p-5 font-sans text-paper shadow-2xl relative overflow-hidden hidden md:block"
          >
            {/* Dashboard Header */}
            <div className="flex justify-between items-center border-b border-line/30 pb-3 mb-5">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mono text-[9px] tracking-[0.2em] text-paper/40 uppercase">viranetra.hith.io / soc / overview</div>
              <div className="mono text-[10px] tracking-widest text-cyan font-semibold flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></div> LIVE
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-5">
              <div className="bg-white/5 border border-white/10 rounded p-4">
                 <div className="mono text-[9px] uppercase tracking-wider text-paper/50 mb-2">Security Posture</div>
                 <div className="text-2xl xl:text-3xl font-semibold text-cyan">87<span className="text-xs text-paper/40 font-normal">/100</span></div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded p-4">
                 <div className="mono text-[9px] uppercase tracking-wider text-paper/50 mb-2 flex items-center justify-between">Active Threats <span className="text-red-400">⚠</span></div>
                 <div className="text-2xl xl:text-3xl font-semibold text-paper">1,284</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded p-4">
                 <div className="mono text-[9px] uppercase tracking-wider text-paper/50 mb-2 flex items-center justify-between">Critical Alerts <span className="text-red-500">⛨</span></div>
                 <div className="text-2xl xl:text-3xl font-semibold text-paper">37</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded p-4">
                 <div className="mono text-[9px] uppercase tracking-wider text-paper/50 mb-2 flex items-center justify-between">Assets Monitored</div>
                 <div className="text-2xl xl:text-3xl font-semibold text-paper">48.9k</div>
              </div>
            </div>

            {/* Threat Intel Feed */}
            <div className="bg-white/5 border border-white/10 rounded p-4">
               <div className="mono text-[10px] uppercase tracking-widest text-paper/60 mb-4 border-b border-white/10 pb-2">Threat Intelligence Feed</div>
               <div className="space-y-4">
                 <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                    <div>
                       <div className="text-sm text-paper/90 font-medium">Lateral movement detected · prod-db-04</div>
                       <div className="mono text-[9px] text-red-400 mt-1 uppercase tracking-wider">CRITICAL · 12S AGO</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-1 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                    <div>
                       <div className="text-sm text-paper/90 font-medium">Anomalous OAuth grant · M365 tenant</div>
                       <div className="mono text-[9px] text-yellow-400 mt-1 uppercase tracking-wider">HIGH · 47S AGO</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-1 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,216,255,0.8)]"></div>
                    <div>
                       <div className="text-sm text-paper/90 font-medium">New asset discovered: 10.42.8.91</div>
                       <div className="mono text-[9px] text-cyan mt-1 uppercase tracking-wider">INFO · 2M AGO</div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side Dynamic Circular UI */}
        <div className="md:col-span-7 relative flex items-center justify-center min-h-[500px] overflow-hidden">
          
          {/* Animated SVG Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50"
          >
            <svg viewBox="0 0 800 800" className="w-[150%] h-[150%] max-w-[900px] max-h-[900px]">
              <circle cx="400" cy="400" r="320" fill="none" stroke="#00D8FF" strokeWidth="1" strokeDasharray="4 12" opacity="0.4" />
              <circle cx="400" cy="400" r="260" fill="none" stroke="#00D8FF" strokeWidth="2" strokeDasharray="2 6" opacity="0.7" />
              <circle cx="400" cy="400" r="180" fill="none" stroke="#00D8FF" strokeWidth="1" strokeDasharray="1 4" opacity="0.5" />
              <circle cx="400" cy="400" r="100" fill="none" stroke="#00D8FF" strokeWidth="1" opacity="0.3" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40"
          >
             <svg viewBox="0 0 800 800" className="w-[140%] h-[140%] max-w-[800px] max-h-[800px]">
              <circle cx="400" cy="400" r="350" fill="none" stroke="#00D8FF" strokeWidth="1" strokeDasharray="1 10" />
              <circle cx="400" cy="400" r="220" fill="none" stroke="#00D8FF" strokeWidth="4" strokeDasharray="1 20" opacity="0.6" />
            </svg>
          </motion.div>

          {/* Central Core */}
          <div className="absolute z-20 w-24 h-24 bg-void border border-cyan/50 rounded-full shadow-[0_0_40px_rgba(0,216,255,0.5)] flex items-center justify-center">
             <div className="w-12 h-12 bg-cyan rounded-full animate-pulse shadow-[0_0_30px_rgba(0,216,255,1)]" />
          </div>

          {/* Feature Nodes */}
          {[
            "VIRA Cortex", "Netra Scan", "VIRA Forensic", "Netra Respond",
            "Vira Playbook", "VIRA Maya", "Predictive Defense", 
            "SOC Intelligence", "Event Logs", "Reports", "Assets"
          ].map((feature, i, arr) => {
            const angle = (i * (360 / arr.length)) - 90;
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, type: "spring" }}
                className="absolute z-30 flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg) translate(min(28vw, 260px)) rotate(${-angle}deg)`
                }}
              >
                <div className="relative group">
                   <div className="bg-void/90 backdrop-blur-md border border-cyan/50 px-4 py-2.5 rounded shadow-[0_0_15px_rgba(0,216,255,0.2)] group-hover:border-cyan group-hover:bg-cyan/10 group-hover:shadow-[0_0_30px_rgba(0,216,255,0.6)] transition-all cursor-default text-center">
                     <div className="mono text-[9px] xl:text-[10px] text-cyan font-bold tracking-widest uppercase whitespace-nowrap">
                       {feature}
                     </div>
                   </div>
                </div>
              </motion.div>
            );
          })}

          {/* corner metrics */}
          <div className="absolute top-4 right-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70 z-40">
            <div className="text-cyan">◉ AI CORE</div>
            <div className="mt-1">Status: NOMINAL</div>
            <div>Uptime: 99.997%</div>
          </div>
          <div className="absolute bottom-4 left-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70 z-40">
            <div className="text-cyan">TELEMETRY</div>
            <div className="mt-1">2.4B events / day</div>
          </div>
        </div>
      </div>
    </div>
  );
}
