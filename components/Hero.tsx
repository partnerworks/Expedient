
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["leadership", "strategy", "advice"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(75); // Faster deleting
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(150); // Natural typing
      }

      if (!isDeleting && text === fullWord) {
        // Pause for 3 seconds when word is complete
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative bg-white pt-12 pb-40 overflow-hidden">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .cursor-blink {
            animation: blink 1s step-end infinite;
            display: inline-block;
            width: 4px;
            height: 0.85em;
            background-color: #60B9D9;
            margin-left: 4px;
            vertical-align: middle;
            border-radius: 2px;
          }
        `}
      </style>
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 right-0 w-[800px] h-[800px] bg-[#60B9D9]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FBB531]/5 rounded-full blur-[100px]"></div>
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.2] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-white border border-[#999999]/20 px-5 py-2 rounded-full mb-10 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBB531] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FBB531]"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">FRACTIONAL CISO and CYBER-FOCUSED NED</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8 min-h-[2.1em] md:min-h-0">
            Board-level cyber <br className="hidden md:block" /> 
            <span>{text}</span><span className="cursor-blink"></span> for the <span className="text-[#60B9D9]">ADGM.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto font-normal">
            Expedient provides fractional CISO and cyber-focused NED services to help you meet FSRA expectations with confidence. We translate technical risk into business decisions without the overhead of a full-time executive hire.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://calendly.com/chrishyatt/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FBB531] text-slate-900 px-10 py-5 rounded-xl text-lg font-extrabold hover:bg-[#e3a32a] transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/10 inline-flex justify-center items-center"
            >
              Book a call
            </a>
            <button 
              onClick={() => document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-slate-700 border border-[#999999]/50 px-10 py-5 rounded-xl text-lg font-bold hover:bg-slate-50 hover:border-[#999999] transition-all"
            >
              Understand Your Obligations
            </button>
          </div>
          
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
               {[
                 { label: "FSRA Compliance", color: "#60B9D9" },
                 { label: "ISO 27001", color: "#C48DB9" },
                 { label: "ISO 42001", color: "#FBB531" },
                 { label: "Cyber Risk Management", color: "#999999" }
               ].map((item, idx) => (
                 <div key={idx} className="group bg-white border border-[#999999]/20 rounded-xl px-4 py-5 flex flex-col items-center justify-center hover:border-[#999999]/40 hover:shadow-md transition-all duration-300">
                    <div className="w-2 h-2 rounded-full mb-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: item.color }}></div>
                    <span className="font-bold text-slate-800 text-sm md:text-base text-center">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
