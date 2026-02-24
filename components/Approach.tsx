
import React from 'react';
import { useLanguage } from './LanguageContext';

const Approach: React.FC = () => {
  const { t } = useLanguage();
  
  const pillarsList = t('approach.pillars') as Array<{title: string, content: string}>;
  const pillarsConfig = [
    { color: "#FBB531", textColor: "text-slate-900", numberColor: "text-black/20" },
    { color: "#60B9D9", textColor: "text-white", numberColor: "text-white/30" },
    { color: "#C48DB9", textColor: "text-white", numberColor: "text-white/30" },
    { color: "#999999", textColor: "text-white", numberColor: "text-white/30" }
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative border-t border-[#999999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h2 className="text-sm font-bold text-[#60B9D9] tracking-widest uppercase mb-4">{t('approach.tag')}</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              {t('approach.title')}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('approach.desc')}
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-[#999999]/20 shadow-lg relative overflow-hidden group">
              {/* Light card with border */}
              <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-1.5 h-full bg-[#60B9D9] group-hover:w-3 transition-all duration-300"></div>
              <div className="relative z-10 pl-2 rtl:pl-0 rtl:pr-2">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{t('approach.profile.name')}</h4>
                <p className="text-xs font-bold text-[#60B9D9] uppercase tracking-wide mb-6">{t('approach.profile.title')}</p>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                    {t('approach.profile.bio')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillarsList.map((pillar, index) => {
                    const config = pillarsConfig[index];
                    return (
                        <div 
                          key={index} 
                          className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          style={{ backgroundColor: config.color }}
                        >
                          <div className={`text-5xl font-black mb-4 tabular-nums ${config.numberColor}`}>0{index + 1}</div>
                          <h4 className={`text-lg font-bold mb-2 ${config.textColor}`}>{pillar.title}</h4>
                          <p className={`text-sm leading-relaxed ${config.textColor} opacity-90`}>{pillar.content}</p>
                        </div>
                    );
                })}
             </div>
          </div>
        </div>

        <div className="bg-[#FBB531] text-slate-900 rounded-3xl p-12 md:p-20 shadow-xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C48DB9]/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-start">
            <div className="max-w-xl">
              <h4 className="text-3xl font-extrabold mb-4">{t('approach.cta.title')}</h4>
              <p className="text-slate-900/80 text-lg font-bold">{t('approach.cta.subtitle')}</p>
            </div>
            <a 
              href="https://calendly.com/chrishyatt/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FBB531] px-12 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl transform hover:-translate-y-1 inline-block text-center"
            >
              {t('approach.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
