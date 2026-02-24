
import React from 'react';
import { useLanguage } from './LanguageContext';

const RegulatoryFocus: React.FC = () => {
  const { t } = useLanguage();
  
  const points = t('regulatory.points') as Array<{title: string, text: string}>;
  const obligations = t('regulatory.obligations_list') as Array<{code: string, title: string, desc: string}>;
  const pointColors = ["#FBB531", "#60B9D9", "#C48DB9"];

  return (
    <div className="bg-white text-slate-900 py-24 sm:py-32 relative overflow-hidden border-t border-[#999999]/10">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 rtl:left-0 rtl:right-auto -mr-40 rtl:-ml-40 -mt-40 w-[600px] h-[600px] bg-[#C48DB9]/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 rtl:right-0 rtl:left-auto -ml-40 rtl:-mr-40 -mb-40 w-[500px] h-[500px] bg-[#60B9D9]/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-block bg-[#FBB531]/10 border border-[#FBB531]/30 rounded-full px-4 py-1.5 mb-6">
                <h2 className="text-xs font-bold text-[#d99516] tracking-widest uppercase">{t('regulatory.tag')}</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              {t('regulatory.title')}
            </h3>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
              {t('regulatory.subtitle')}
            </p>

            <div className="mb-12 p-8 bg-slate-50 border border-[#999999]/20 rounded-2xl relative">
              <svg className="absolute top-6 left-6 rtl:left-auto rtl:right-6 w-8 h-8 text-[#C48DB9]/40 transform -translate-x-2 rtl:translate-x-2 -translate-y-2 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C7.89543 16 7 16.8954 7 18L7 21H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.983C14.8784 16 13.983 16.8954 13.983 18L13.983 21H21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H7V21H3Z" opacity="0.5"/></svg>
              <p className="text-slate-700 italic leading-relaxed text-sm relative z-10 pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C48DB9]">
                "{t('regulatory.quote')}"
              </p>
              <p className="text-[#C48DB9] text-xs font-bold mt-4 uppercase tracking-wider pl-6 rtl:pl-0 rtl:pr-6">{t('regulatory.quote_source')}</p>
            </div>
            
            <div className="space-y-8">
              {points.map((item, index) => {
                const color = pointColors[index % pointColors.length];
                return (
                <div key={index} className="flex items-start space-x-6 rtl:space-x-reverse group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold mt-1 transition-all shadow-sm`} style={{ borderColor: color, color: color, backgroundColor: 'white' }}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              )})}
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32">
             <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#999999]/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="w-2 h-8 bg-[#60B9D9] rounded-full mr-4 rtl:mr-0 rtl:ml-4"></span>
                {t('regulatory.obligations_title')}
              </h4>
              <div className="space-y-6">
                {obligations.map((item, i) => (
                  <div key={i} className="flex group">
                     <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                        <div className="w-2 h-2 rounded-full bg-[#999999] group-hover:bg-[#60B9D9] transition-colors shadow-sm"></div>
                        {i !== obligations.length - 1 && <div className="w-px h-full bg-[#999999]/30 my-1 group-hover:bg-[#999999]"></div>}
                     </div>
                     <div className="pb-2">
                        <div className="flex items-baseline space-x-2 rtl:space-x-reverse mb-1">
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
