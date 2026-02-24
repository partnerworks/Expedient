
import React from 'react';
import { useLanguage } from './LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const servicesList = t('services.items') as Array<{title: string, description: string}>;
  const colors = ["#FBB531", "#60B9D9", "#C48DB9", "#999999", "#60B9D9", "#FBB531"];

  return (
    <div className="bg-white py-24 sm:py-32 border-t border-[#999999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="lg:max-w-3xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#C48DB9]/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C48DB9]"></span>
                <span className="text-xs font-bold text-[#C48DB9] tracking-widest uppercase">{t('services.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {t('services.title_pre')} <br className="hidden md:block"/>
              <span className="text-[#60B9D9]">{t('services.title_gov')}</span> {t('services.title_and')} <span className="text-[#C48DB9]">{t('services.title_comp')}</span>.
            </h2>
          </div>
          <div className="lg:max-w-md lg:pb-2">
            <p className="text-xl text-slate-600 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#FBB531]">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const color = colors[index % colors.length];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#999999]/20 hover:border-[#60B9D9] transition-all duration-300 group flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: `${color}15`, color: color }}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
