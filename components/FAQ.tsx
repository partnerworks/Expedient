
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = t('faq.items') as Array<{question: string, answer: string}>;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 py-24 sm:py-32 border-t border-[#999999]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#60B9D9] tracking-widest uppercase mb-4">{t('faq.tag')}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('faq.title')}
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
                className="w-full px-6 py-5 text-start flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-[#60B9D9]' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 rtl:ml-0 rtl:mr-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#60B9D9] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
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
