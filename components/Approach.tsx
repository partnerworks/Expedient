
import React from 'react';

const Approach: React.FC = () => {
  const pillars = [
    {
      title: "Deep Regulatory Knowledge",
      content: "We possess ADGM-specific expertise and detailed knowledge of the Cyber Risk Management Rules. Our advice is grounded in the specific rulebook that governs your licence.",
      color: "#FBB531",
      textColor: "text-slate-900", // Dark text for yellow background
      numberColor: "text-black/20"
    },
    {
      title: "Governance, Not Operations",
      content: "We operate as strategic advisors, not an IT support function. We sit on your side of the table to oversee providers and ensure accountability.",
      color: "#60B9D9",
      textColor: "text-white",
      numberColor: "text-white/30"
    },
    {
      title: "Proportionate to Your Business",
      content: "We apply the FSRA's proportionality principle. Our frameworks are calibrated to the nature, scale, and complexity of your firm, avoiding administrative burden.",
      color: "#C48DB9",
      textColor: "text-white",
      numberColor: "text-white/30"
    },
    {
      title: "Commercial Pragmatism",
      content: "We speak to sophisticated financial professionals. We understand commercial trade-offs and focus on defensible, risk-based decision making.",
      color: "#999999",
      textColor: "text-white",
      numberColor: "text-white/30"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative border-t border-[#999999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h2 className="text-sm font-bold text-[#60B9D9] tracking-widest uppercase mb-4">About Expedient</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Senior cyber security expertise purpose-built for regulated financial services.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Expedient was founded to address the gap between board-level regulatory requirements and the resourcing constraints of smaller regulated firms. We provide the expertise you need to satisfy the regulator, without the full-time headcount.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-[#999999]/20 shadow-lg relative overflow-hidden group">
              {/* Light card with border */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#60B9D9] group-hover:w-3 transition-all duration-300"></div>
              <div className="relative z-10 pl-2">
                <h4 className="text-xl font-bold text-slate-900 mb-1">Chris Hyatt</h4>
                <p className="text-xs font-bold text-[#60B9D9] uppercase tracking-wide mb-6">Founder, Expedient</p>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                    Chris Hyatt brings over 15 years of deep expertise in cyber security, spanning the spectrum from technical managed services to strategic governance, risk, and compliance. Holding the CISSP designation alongside PECB Lead Implementer certifications for both ISO 27001 and ISO 42001, he specialises in implementing robust frameworks that identify and effectively mitigate business risk. Chris founded Expedient to provide FSRA-regulated firms with the board-level translation they require, bridging the gap between complex technical operations and the specific governance obligations of the ADGM.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <div className={`text-5xl font-black mb-4 tabular-nums ${pillar.numberColor}`}>0{index + 1}</div>
                      <h4 className={`text-lg font-bold mb-2 ${pillar.textColor}`}>{pillar.title}</h4>
                      <p className={`text-sm leading-relaxed ${pillar.textColor} opacity-90`}>{pillar.content}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-[#FBB531] text-slate-900 rounded-3xl p-12 md:p-20 shadow-xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C48DB9]/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="max-w-xl">
              <h4 className="text-3xl font-extrabold mb-4">Ready to discuss your obligations?</h4>
              <p className="text-slate-900/80 text-lg font-bold">Confidential, no-obligation consultations for Governing Bodies and Senior Management.</p>
            </div>
            <a 
              href="https://calendly.com/chrishyatt/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FBB531] px-12 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl transform hover:-translate-y-1 inline-block text-center"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
