
import React from 'react';

const CISSPLogo = () => (
  <svg viewBox="0 0 400 400" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="360" height="360" rx="60" stroke="#8EBDBE" strokeWidth="25"/>
    <text x="50%" y="225" textAnchor="middle" fill="black" style={{ font: 'bold 90px Manrope, sans-serif', letterSpacing: '-2px' }}>CISSP</text>
    <circle cx="330" cy="70" r="55" fill="#1A1A1A"/>
    <text x="330" y="82" textAnchor="middle" fill="white" style={{ font: 'bold 32px Manrope, sans-serif' }}>ISC2</text>
    <path d="M305 200 L320 200" stroke="#1A1A1A" strokeWidth="4"/>
  </svg>
);

const PECBBadge = ({ title, sub }: { title: string, sub: string }) => (
  <svg viewBox="0 0 400 400" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hexagon Shield */}
    <path d="M200 10 L370 100 V300 L200 390 L30 300 V100 L200 10Z" fill="white" stroke="#9E1B21" strokeWidth="12"/>
    <path d="M200 25 L355 110 V290 L200 375 L45 290 V110 L200 25Z" fill="#F8F8F8" opacity="0.5"/>
    
    {/* Header */}
    <text x="50%" y="125" textAnchor="middle" fill="#9E1B21" style={{ font: 'bold 75px Manrope, sans-serif', letterSpacing: '4px' }}>PECB</text>
    
    {/* Banner */}
    <path d="M20 150 H380 V260 H20 Z" fill="#9E1B21"/>
    <path d="M20 150 L100 205 L20 260 Z" fill="#7D151A"/>
    <path d="M380 150 L300 205 L380 260 Z" fill="#7D151A"/>
    
    {/* Banner Text */}
    <text x="50%" y="195" textAnchor="middle" fill="white" style={{ font: 'bold 36px Manrope, sans-serif' }}>{title}</text>
    <text x="50%" y="235" textAnchor="middle" fill="white" style={{ font: '500 24px Manrope, sans-serif' }}>{sub}</text>
    
    {/* Footer Checkmark */}
    <circle cx="200" cy="325" r="35" stroke="#9E1B21" strokeWidth="4"/>
    <path d="M185 325 L195 335 L215 315" stroke="#9E1B21" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CredentialsStrip: React.FC = () => {
  return (
    <div className="bg-white py-16 border-t border-[#999999]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
            Professional Accreditations
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* CISSP Logo */}
            <div className="h-20 md:h-28 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 transform hover:scale-105 cursor-default">
              <CISSPLogo />
            </div>
            
            {/* ISO 27001 Logo */}
            <div className="h-20 md:h-28 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 transform hover:scale-105 cursor-default">
              <PECBBadge title="ISO/IEC 27001" sub="Lead Implementer" />
            </div>
            
            {/* ISO 42001 Logo */}
            <div className="h-20 md:h-28 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 transform hover:scale-105 cursor-default">
              <PECBBadge title="ISO/IEC 42001" sub="Lead Implementer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialsStrip;
