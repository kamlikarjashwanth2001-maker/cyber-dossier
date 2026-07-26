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

        {/* Right Side Image with Chakra Animation and Text Overlays */}
        <div className="md:col-span-7 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.95, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative w-full max-w-[800px] aspect-[16/18] flex items-center justify-center"
            style={{ filter: "drop-shadow(0 0 60px rgba(0,216,255,0.4))" }}
          >
            {/* 1. Outer Static Layer (Text Boxes) */}
            <div 
              className="absolute inset-0"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 32% 28% at 50% 49%, transparent 99%, black 100%)",
                maskImage: "radial-gradient(ellipse 32% 28% at 50% 49%, transparent 99%, black 100%)"
              }}
            >
              <img
                src={viranetra}
                alt="Viranetra Outer"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>

            {/* 2. Inner Spinning Chakra Layer */}
            <div 
              className="absolute inset-0"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 32% 28% at 50% 49%, black 99%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 32% 28% at 50% 49%, black 99%, transparent 100%)"
              }}
            >
              <motion.img
                src={viranetra}
                alt="Viranetra Inner Chakra"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-full h-full object-contain pointer-events-none origin-[50%_49%]"
              />
            </div>

            {/* 3. Text Overlays to replace the gibberish names */}
            {[
              { name: "VIRA Cortex", top: "25.5%", left: "50%", rot: 0, w: "22%", h: "8.5%" },
              { name: "Netra Scan", top: "32%", left: "73%", rot: 25, w: "20%", h: "8.5%" },
              { name: "VIRA Forensic", top: "51.5%", left: "82.5%", rot: 0, w: "18%", h: "9%" },
              { name: "Netra Respond", top: "72%", left: "74%", rot: -28, w: "22%", h: "9%" },
              { name: "Vira Playbook", top: "81%", left: "50.5%", rot: 0, w: "18%", h: "7.5%" },
              { name: "VIRA Maya", top: "73%", left: "27.5%", rot: 30, w: "21%", h: "9%" },
              { name: "Predictive Defense", top: "52%", left: "18.5%", rot: 0, w: "18%", h: "8%" },
              { name: "SOC Intel", top: "33%", left: "28%", rot: -28, w: "21%", h: "9%" },
            ].map((box, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center bg-[#01090d] border-[0.5px] border-cyan/20 rounded-[3px] shadow-[0_0_15px_rgba(0,216,255,0.15)] overflow-hidden"
                style={{
                  top: box.top,
                  left: box.left,
                  width: box.w,
                  height: box.h,
                  transform: `translate(-50%, -50%) rotate(${box.rot}deg)`
                }}
              >
                <div className="absolute inset-0 bg-cyan/5"></div>
                <span className="relative z-10 text-[0.6rem] sm:text-xs md:text-sm font-mono font-bold text-cyan uppercase tracking-widest text-center px-2 shadow-cyan/50 drop-shadow-md">
                  {box.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* SVG Rings for extra effect */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center"
          >
            <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] max-w-[600px]">
              <circle cx="200" cy="200" r="190" fill="none" stroke="#00D8FF" strokeDasharray="1 10" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* corner metrics */}
          <div className="absolute top-4 right-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70">
            <div className="text-cyan">◉ AI CORE</div>
            <div className="mt-1">Status: NOMINAL</div>
            <div>Uptime: 99.997%</div>
          </div>
          <div className="absolute bottom-4 left-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70">
            <div className="text-cyan">TELEMETRY</div>
            <div className="mt-1">2.4B events / day</div>
          </div>
        </div>
      </div>
    </div>
  );
}
