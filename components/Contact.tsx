
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32 border-t border-[#999999]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-sm font-bold text-[#FBB531] tracking-widest uppercase mb-4">Contact</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Discuss your firm's obligations.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We operate discreetly and professionally with regulated entities across the UAE. Reach out for a confidential discussion about your cyber governance needs.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-[#60B9D9]/10 rounded-full flex items-center justify-center text-[#60B9D9] border border-[#60B9D9]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">Email</h5>
                  <p className="text-slate-500">hello@expedient.ae</p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-[#60B9D9]/10 rounded-full flex items-center justify-center text-[#60B9D9] border border-[#60B9D9]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">Primary Office</h5>
                  <p className="text-slate-500">Abu Dhabi Global Market (ADGM), Al Maryah Island, UAE</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-[#f9fafb] border border-[#999999]/20 rounded-2xl">
              <h5 className="font-bold mb-4 text-slate-900">Our Principles</h5>
              <div className="space-y-4">
                {[
                  {
                    title: "Value-Driven Engagement",
                    desc: "We scope every engagement to solve a real problem, never generating unnecessary work."
                  },
                  {
                    title: "Speed and Efficiency",
                    desc: "We move quickly and communicate clearly, avoiding bureaucracy where none is needed."
                  },
                  {
                    title: "Practical Problem-Solving",
                    desc: "Our advice is grounded in what works for your business, not theoretical frameworks applied without context."
                  },
                  {
                    title: "Board Representation",
                    desc: "We represent the Governing Body's interests, ensuring decisions are well-informed, accountable, and documented."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C48DB9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                      <span className="text-sm text-slate-500 block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#60B9D9] p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-center items-center text-center">
             {/* Gradient decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#C48DB9]/30 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
             
             <div className="relative z-10">
                 <h4 className="text-2xl font-bold text-white mb-6">Schedule a time</h4>
                 <p className="text-white/90 mb-8 text-lg">
                     Select a time that works for you to discuss your regulatory obligations and how we can support your board.
                 </p>
                 <a 
                   href="https://calendly.com/chrishyatt/45min"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto inline-block bg-white text-[#60B9D9] px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-lg"
                 >
                   Book a call
                 </a>
                 <p className="mt-8 text-xs text-white/70 text-center">
                   Consultations are confidential and obligation-free.
                 </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
