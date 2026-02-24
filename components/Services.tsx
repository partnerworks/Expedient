
import React from 'react';

const services = [
  {
    title: "Fractional CISO and Cyber NED",
    description: "The regulator requires qualified, accountable cyber expertise at board level. Expedient steps into that role directly, attending board meetings, owning your cyber risk position and ensuring your Governing Body meets its obligations — without the cost of a permanent hire.",
    color: "#FBB531"
  },
  {
    title: "Cyber Risk Management Framework",
    description: "Every regulated firm in ADGM must have a documented Cyber Risk Management Framework, approved by the Governing Body and reviewed annually. We design it, secure board approval and ensure it remains current as your business and the regulatory environment evolve.",
    color: "#60B9D9"
  },
  {
    title: "Incident Readiness and Response",
    description: "If a material cyber incident occurs, you have 24 hours to notify the FSRA. We ensure your Governing Body has the right plan in place, oversee its development, ensure it is properly tested and make certain your team understands their obligations before an incident occurs.",
    color: "#C48DB9"
  },
  {
    title: "Third-Party and Supply Chain Risk",
    description: "Your firm remains fully responsible for the cyber risk introduced by every supplier, cloud provider and fund administrator you use. We help your board assess, govern and document that risk, ensuring your oversight obligations are met regardless of your outsourcing arrangements.",
    color: "#999999"
  },
  {
    title: "ISO 27001 Implementation",
    description: "We oversee your ISO 27001 implementation from initial gap assessment through to certification, ensuring the right people are accountable at each stage and that the standard is properly maintained once achieved. Referenced directly in FSRA guidance as a relevant framework.",
    color: "#60B9D9"
  },
  {
    title: "AI Risk Governance (ISO 42001)",
    description: "As AI tools become embedded in business operations, boards need to understand and oversee the risks they introduce. We help your organisation identify and manage AI risk through a structured approach aligned to ISO 42001, or guide you through the process of achieving full certification against the standard.",
    color: "#FBB531"
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32 border-t border-[#999999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="lg:max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#C48DB9]/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C48DB9]"></span>
                <span className="text-xs font-bold text-[#C48DB9] tracking-widest uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Strategic advisory for <br className="hidden md:block"/>
              <span className="text-[#60B9D9]">governance</span> and <span className="text-[#C48DB9]">compliance</span>.
            </h2>
          </div>
          <div className="lg:max-w-md lg:pb-2">
            <p className="text-xl text-slate-600 leading-relaxed pl-6 border-l-4 border-[#FBB531]">
              Distinct from operational IT support, we provide the oversight and frameworks required by regulators.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-[#999999]/20 hover:border-[#60B9D9] transition-all duration-300 group flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
