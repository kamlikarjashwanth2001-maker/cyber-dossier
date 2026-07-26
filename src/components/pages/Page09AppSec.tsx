import { motion } from "framer-motion";
import appsecImg from "@/assets/p12-appsec.jpg";
import { useEffect, useState } from "react";

const PROCESS = [
  { n: "01", t: "REVIEW", d: "Deep manual code review targeting business logic flaws." },
  { n: "02", t: "SAST/DAST", d: "Automated analysis integrated into your CI/CD pipeline." },
  { n: "03", t: "MODEL", d: "Threat modeling architecture before code is even written." },
  { n: "04", t: "SECURE", d: "Developer-first remediation guidance and secure SDLC." },
];

const MOCK_CODE = `function parseJWT(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  // [CRITICAL] CWE-287: Improper Authentication
  // [!] Verify signature before decoding payload
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

// Scanning endpoints...
app.post('/api/v1/auth/login', async (req, res) => {
  const { username, password } = req.body;
  // [HIGH] CWE-89: SQL Injection Vulnerability Detected
  const query = \`SELECT * FROM users WHERE username = '\${username}' AND pass = '\${password}'\`;
  const result = await db.execute(query);
  if(result.rows > 0) {
     res.status(200).send({ token: generateToken(result.user) });
  }
});`;

export function Page09AppSec({ goToIndex }: { goToIndex?: (i: number) => void }) {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  useEffect(() => {
    const lines = MOCK_CODE.split('\n');
    let current = 0;
    const interval = setInterval(() => {
      if (current < lines.length) {
        setCodeLines(prev => [...prev, lines[current]]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#030712] overflow-hidden">
      {/* Background Scrolling Code */}
      <div className="absolute inset-0 p-8 md:p-16 opacity-10 pointer-events-none overflow-hidden">
        <pre className="mono text-[10px] text-cyan leading-relaxed whitespace-pre-wrap">
          {codeLines.join('\n')}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            _
          </motion.span>
        </pre>
      </div>

      <div className="absolute inset-0 bp-grid opacity-30" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-full gap-8 p-8 md:p-16 items-center">
        
        {/* Left Side: Advanced Holographic Image Window */}
        <div className="hidden md:flex col-span-5 relative h-[70vh] items-center justify-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative w-full aspect-[4/5] max-h-full border border-cyan/30 bg-cyan/5 p-3 shadow-[0_0_30px_rgba(0,216,255,0.15)] group"
             style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
             {/* Cyber Corners */}
             <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan shadow-[0_0_10px_rgba(0,216,255,0.5)]" />
             <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan shadow-[0_0_10px_rgba(0,216,255,0.5)]" />
             <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan shadow-[0_0_10px_rgba(0,216,255,0.5)]" />
             <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan shadow-[0_0_10px_rgba(0,216,255,0.5)]" />
             
             {/* Header Bar */}
             <div className="flex justify-between items-center px-3 py-2 mb-3 border-b border-cyan/30 bg-cyan/10">
               <span className="mono text-[10px] text-cyan tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan rounded-full animate-pulse shadow-[0_0_8px_#00D8FF]" />
                 SAST / DAST ACTIVE
               </span>
               <span className="mono text-[10px] text-cyan/60">SYS.ON</span>
             </div>

             <div className="relative w-full h-[calc(100%-40px)] overflow-hidden rounded-[2px] ring-1 ring-cyan/20">
               <img src={appsecImg} alt="Application Security" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 mix-blend-screen" />
               <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay" />
               
               {/* Advanced Scanline */}
               <motion.div 
                 className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,216,255,0.3)_50%,transparent_100%)] h-[15%]"
                 animate={{ top: ['-20%', '120%'] }}
                 transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
               />
               
               {/* Grid Overlay */}
               <div className="absolute inset-0 bp-grid-fine opacity-50" />
             </div>
          </motion.div>
        </div>

        {/* Right Side: Terminal Text Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center h-full">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan/50"></span>
            09 — Discipline
          </div>
          
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-semibold mb-6 tracking-tight"
          >
            Application<br />
            <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,216,255,0.5)]">Security.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-lg text-paper/80 text-sm md:text-base leading-relaxed mb-12 font-medium"
          >
            We help you build secure software from the ground up. Identifying business logic flaws, API vulnerabilities, and integrating security seamlessly into your deployment pipelines before code reaches production.
          </motion.p>

          {/* Interactive Process List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-10">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group relative p-4 border border-cyan/10 bg-cyan/[0.02] hover:bg-cyan/10 hover:border-cyan/40 transition-all duration-300 backdrop-blur-sm cursor-default overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Left Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan/20 group-hover:bg-cyan transition-colors shadow-[0_0_10px_rgba(0,216,255,0)] group-hover:shadow-[0_0_10px_rgba(0,216,255,1)]" />
                
                <div className="relative flex items-center gap-3 mb-2 z-10">
                  <span className="mono text-[10px] text-cyan font-bold opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(0,216,255,0)] group-hover:drop-shadow-[0_0_5px_rgba(0,216,255,1)]">
                    [{p.n}]
                  </span>
                  <span className="display font-semibold text-[13px] tracking-widest text-paper uppercase group-hover:text-cyan transition-colors">
                    {p.t}
                  </span>
                </div>
                <div className="relative mono text-[10px] text-paper/60 leading-relaxed group-hover:text-paper/90 transition-colors z-10">
                  {p.d}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {goToIndex && (
              <button onClick={() => goToIndex(2)} className="group relative overflow-hidden mono text-[10px] border border-cyan/30 bg-cyan/5 px-6 py-3 text-cyan uppercase tracking-[0.2em] transition-colors flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,216,255,0.3)]">
                <div className="absolute inset-0 w-0 bg-cyan/20 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 font-bold group-hover:text-white transition-colors">
                  ← Return to Directory
                </span>
              </button>
            )}
            <div className="hidden lg:flex flex-wrap gap-2 mono text-[9px] uppercase tracking-[0.3em] text-paper/40 ml-4">
              [ SAST / DAST / API / THREAT_MODELING ]
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
