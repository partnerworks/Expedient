
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t('nav.services'), id: 'services' },
    { name: t('nav.compliance'), id: 'compliance' },
    { name: t('nav.approach'), id: 'approach' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#999999]/20 py-4 shadow-sm" dir="ltr">
      {/* We keep nav dir="ltr" internally for the layout structure if we want logo left and links right always, 
          OR we let it flip naturally. Letting it flip naturally is better for RTL users. 
          The parent LanguageContext sets 'dir' on html, so this will flip automatically. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#60B9D9] transition-colors">
              EXPEDIENT<span className="text-[#FBB531]">.</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 rtl:ml-0 rtl:mr-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-semibold transition-all tracking-wide ${
                    activeSection === link.id ? 'text-[#60B9D9]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold text-slate-600 hover:text-[#60B9D9] transition-colors px-2"
              >
                {t('nav.lang')}
              </button>
              <a 
                href="https://calendly.com/chrishyatt/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#60B9D9] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#4da3c4] transition-all shadow-md transform hover:-translate-y-0.5"
              >
                {t('nav.book')}
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
                onClick={toggleLanguage}
                className="text-sm font-semibold text-slate-600 hover:text-[#60B9D9]"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#999999]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-start px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://calendly.com/chrishyatt/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-start px-3 py-2 rounded-md text-base font-bold text-[#60B9D9] hover:bg-slate-50"
            >
              {t('nav.book')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
