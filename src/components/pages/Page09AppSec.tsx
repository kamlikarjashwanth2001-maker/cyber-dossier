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
        
        {/* Left Side: Glitch Image Window */}
        <div className="hidden md:block col-span-5 relative h-[70vh]">
          <div className="absolute inset-0 border border-danger/40 bg-danger/5 p-2">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-danger" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-danger" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-danger" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-danger" />
            
            <div className="flex justify-between items-center px-2 py-1 mb-2 border-b border-danger/20">
              <span className="mono text-[9px] text-danger tracking-[0.2em]">[ SAST_SCANNER_ACTIVE ]</span>
              <span className="w-1.5 h-1.5 bg-danger animate-pulse rounded-full" />
            </div>

            <motion.div 
              className="relative w-full h-[calc(100%-24px)] overflow-hidden"
              initial={{ filter: 'grayscale(100%) contrast(120%)' }}
              whileInView={{ filter: 'grayscale(0%) contrast(100%)' }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <img src={appsecImg} alt="Application Security" className="w-full h-full object-cover opacity-80" />
              {/* Scanline effect over image */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-cyan/20 to-transparent"
                animate={{ y: ['-100%', '800%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Terminal Text Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center h-full">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan mb-2">
            09 — Discipline
          </div>
          
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display text-4xl md:text-6xl leading-[0.95] font-semibold mb-6"
          >
            Application<br />
            <span className="text-cyan">Security.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-lg text-paper/70 text-sm leading-relaxed mb-10"
          >
            We help you build secure software from the ground up. Identifying business logic flaws, API vulnerabilities, and integrating security seamlessly into your deployment pipelines before code reaches production.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-10">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="relative pl-6"
              >
                <div className="absolute left-0 top-1.5 w-3 h-[1px] bg-cyan/50" />
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="display font-semibold text-sm tracking-wide text-paper">{p.t}</span>
                </div>
                <div className="mono text-[9px] text-paper/50 leading-relaxed">{p.d}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {goToIndex && (
              <button onClick={() => goToIndex(2)} className="mono text-[10px] border border-cyan/30 bg-cyan/5 px-4 py-2 text-cyan hover:bg-cyan/20 uppercase tracking-[0.2em] transition-colors flex items-center gap-2">
                ← Return to Directory
              </button>
            )}
            <div className="hidden md:flex flex-wrap gap-2 mono text-[9px] uppercase tracking-[0.3em] text-paper/40">
              [ SAST / DAST / API / THREAT_MODELING ]
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
