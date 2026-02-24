
import React from 'react';

const RegulatoryFocus: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 py-24 sm:py-32 relative overflow-hidden border-t border-[#999999]/10">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[#C48DB9]/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-[#60B9D9]/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-block bg-[#FBB531]/10 border border-[#FBB531]/30 rounded-full px-4 py-1.5 mb-6">
                <h2 className="text-xs font-bold text-[#d99516] tracking-widest uppercase">The Regulatory Reality</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              The FSRA now demands <span className="text-[#60B9D9]">board-level</span> cyber governance.
            </h3>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
              Effective 31 January 2026, the FSRA's Cyber Risk Management Rules (GEN 3.5) place direct accountability on the board. Most firms are not yet ready.
            </p>

            <div className="mb-12 p-8 bg-slate-50 border border-[#999999]/20 rounded-2xl relative">
              <svg className="absolute top-6 left-6 w-8 h-8 text-[#C48DB9]/40 transform -translate-x-2 -translate-y-2 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C7.89543 16 7 16.8954 7 18L7 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.983C14.8784 16 13.983 16.8954 13.983 18L13.983 21H21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H7V21H3Z" opacity="0.5"/></svg>
              <p className="text-slate-700 italic leading-relaxed text-sm relative z-10 pl-6 border-l-2 border-[#C48DB9]">
                "The board and senior management must hold ultimate responsibility for cyber risk. Firms are expected to assign clear operational roles for cyber risk management to ensure effective oversight, accountability and timely response during incidents."
              </p>
              <p className="text-[#C48DB9] text-xs font-bold mt-4 uppercase tracking-wider pl-6">— FSRA Financial and Cyber Crime Prevention Unit, 2026</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Direct Governing Body Accountability",
                  text: "The Governing Body is now directly and personally accountable for cyber risk governance. This responsibility cannot be fully delegated to IT providers.",
                  id: "1",
                  color: "#FBB531"
                },
                {
                  title: "Continuous Obligations",
                  text: "The obligations are specific, continuous, and recurring. Compliance is not a one-time exercise but a standing agenda item requiring regular evidence.",
                  id: "2",
                  color: "#60B9D9"
                },
                {
                  title: "Disproportionate Cost",
                  text: "A full-time CISO is a disproportionate cost for most ADGM fund managers and smaller regulated entities, yet the requirement for expertise remains.",
                  id: "3",
                  color: "#C48DB9"
                }
              ].map((item) => (
                <div key={item.id} className="flex items-start space-x-6 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold mt-1 transition-all shadow-sm`} style={{ borderColor: item.color, color: item.color, backgroundColor: 'white' }}>
                    {item.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32">
             <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#999999]/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="w-2 h-8 bg-[#60B9D9] rounded-full mr-4"></span>
                Key Obligations (GEN 3.5)
              </h4>
              <div className="space-y-6">
                {[
                  { code: "GEN 3.5.3", title: "Governing Body Accountability", desc: "Directors must understand cyber risk and define tolerance." },
                  { code: "GEN 3.5.1", title: "Board-Approved Framework", desc: "A written framework reviewed annually by the board." },
                  { code: "GEN 3.5.4", title: "Asset & Risk Assessment", desc: "Current inventory and regular risk assessments." },
                  { code: "GEN 3.5.5", title: "Protection of ICT Assets", desc: "Patch management, encryption, and access controls." },
                  { code: "GEN 3.5.14", title: "Monitoring & Testing", desc: "Vulnerability scanning and annual penetration testing." },
                  { code: "GEN 3.5.16", title: "Incident Response Plan", desc: "Written plan, tested regularly with tabletop exercises." },
                  { code: "GEN 3.5.18", title: "24-Hour Notification", desc: "Mandatory notification to FSRA for material incidents." },
                  { code: "GEN 3.5.2", title: "Third-Party Risk", desc: "Mandatory due diligence on outsourced ICT providers." }
                ].map((item, i) => (
                  <div key={i} className="flex group">
                     <div className="flex flex-col items-center mr-4">
                        <div className="w-2 h-2 rounded-full bg-[#999999] group-hover:bg-[#60B9D9] transition-colors shadow-sm"></div>
                        {i !== 7 && <div className="w-px h-full bg-[#999999]/30 my-1 group-hover:bg-[#999999]"></div>}
                     </div>
                     <div className="pb-2">
                        <div className="flex items-baseline space-x-2 mb-1">
                             <h5 className="font-bold text-slate-900 text-sm">{item.title}</h5>
                             <span className="text-[10px] font-mono text-[#60B9D9] bg-[#60B9D9]/10 px-1.5 py-0.5 rounded">{item.code}</span>
                        </div>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryFocus;
