
import React, { useState } from 'react';

const faqs = [
  {
    question: "Do the FSRA's Cyber Risk Management Rules apply to my firm?",
    answer: "If your firm holds a Financial Services Permission granted by the FSRA and operates within Abu Dhabi Global Market, the rules apply to you. They came into effect on 31 January 2026 and cover every Authorised Person in ADGM, regardless of the size or nature of your business. Fund managers, investment managers, brokers, family offices and fintech firms are all within scope."
  },
  {
    question: "What exactly is the board required to do under the new rules?",
    answer: "The rules place ultimate accountability for cyber risk governance directly on the Governing Body. This means your board must approve a written Cyber Risk Management Framework, define the firm's cyber risk tolerance, receive regular reporting on cyber threats and ensure that the right expertise is in place to manage those risks. These are personal governance obligations on directors, not responsibilities that can be delegated entirely to an IT provider or outsourced function."
  },
  {
    question: "We already have an IT support provider. Does that not cover our obligations?",
    answer: "No. An IT support provider or managed security service handles the operational and technical layer of your systems. The FSRA's rules require board-level governance, documented frameworks, defined risk tolerance and accountability structures that sit above and separate from your day-to-day IT function. Outsourcing your IT does not transfer your regulatory obligations — your Governing Body remains fully responsible regardless of what third parties you engage."
  },
  {
    question: "What is a fractional CISO and why would we need one?",
    answer: "A fractional CISO is an experienced senior cyber security professional who acts in the Chief Information Security Officer role for your firm on a part-time or retainer basis. For most ADGM fund managers and smaller regulated entities, hiring a full-time CISO is a significant and disproportionate overhead. A fractional arrangement gives your board the qualified, accountable senior expertise the regulator expects, at a cost that is appropriate to the scale of your business."
  },
  {
    question: "What is a Cyber Risk Management Framework and do we need one?",
    answer: "A Cyber Risk Management Framework is a written document, approved by your Governing Body, that sets out how your firm identifies, assesses and manages cyber risk. It must define roles and responsibilities, establish your cyber risk tolerance and integrate with your overall risk management arrangements. Every Authorised Person in ADGM is required to have one. If your firm does not currently have a documented and board-approved framework in place, this is an immediate compliance gap."
  },
  {
    question: "What happens if we experience a cyber incident?",
    answer: "The FSRA requires firms to notify the regulator within 24 hours of becoming aware that a material cyber incident has occurred. A material incident is defined broadly and includes anything that affects customer data, client assets, operational continuity, financial position or the firm's reputation. Without a tested Cyber Incident Response Plan and a clear internal escalation process already in place, meeting that 24-hour window is extremely difficult. Expedient helps firms build and test these plans before an incident occurs, and provides support through the notification process if one does."
  },
  {
    question: "How is Expedient different from a cyber security consultancy?",
    answer: "Expedient operates exclusively at the governance and strategy level. We work with and on behalf of your Governing Body, not your IT team. We do not provide technical security assessments, manage firewalls, supply operational security staff or run a helpdesk. Our focus is on the board-level accountability, policy frameworks and strategic decision-making that the FSRA requires your directors to own. Think of us as the cyber expertise your board needs in the room, rather than a supplier your IT function engages."
  },
  {
    question: "We are a small fund with a lean team. Are these rules really enforced for firms our size?",
    answer: "The FSRA applies its requirements proportionately, taking into account the nature, scale and complexity of each firm. However, the obligations themselves are not tiered — they apply to every Authorised Person regardless of size. The FSRA issued its Cyber Risk Survey to over 300 regulated firms in early 2026, confirming that board-level cyber representation and defined individual accountability are now baseline expectations across the market. Expedient's engagements are specifically designed and priced for smaller regulated firms that need to meet these obligations without the overhead of a large compliance function."
  },
  {
    question: "What does an engagement with Expedient typically look like?",
    answer: "Most engagements begin with an initial review of your current cyber governance position relative to the FSRA's requirements. From there, we agree a structured retainer that covers your ongoing needs: framework development and maintenance, board reporting, incident readiness and regulatory compliance support. Engagements are scoped to reflect the actual needs of your business and adjusted over time as your firm evolves. There is no fixed template — the work is shaped around what your Governing Body genuinely needs."
  },
  {
    question: "How do we get started?",
    answer: "The starting point is a straightforward, confidential conversation. We will discuss your firm's current position, the specific obligations that apply to you and where the most pressing gaps are. There is no obligation attached to that initial discussion. You can book a consultation directly through the website or contact us by email to arrange a time."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 py-24 sm:py-32 border-t border-[#999999]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#60B9D9] tracking-widest uppercase mb-4">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-[#60B9D9] shadow-md' : 'border-[#999999]/20 hover:border-[#60B9D9]/50'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-[#60B9D9]' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#60B9D9] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
