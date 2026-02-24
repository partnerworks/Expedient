
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#999999]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
              EXPEDIENT Ltd<span className="text-[#FBB531]">.</span>
            </span>
            <p className="mt-4 text-sm text-slate-500 max-w-xs leading-relaxed">
              Board-level cyber governance and fractional CISO services for ADGM regulated entities.
            </p>
          </div>
          
          <div className="flex space-x-16">
            <div>
              <h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Focus</h6>
              <ul className="text-sm text-slate-500 space-y-3 font-medium">
                <li>ADGM Compliance</li>
                <li>FSRA Reporting</li>
                <li>Board Oversight</li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Firm</h6>
              <ul className="text-sm text-slate-500 space-y-3 font-medium">
                <li>Services</li>
                <li>Approach</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#999999]/20 flex flex-col md:flex-row justify-between items-end text-xs text-slate-500 space-y-4 md:space-y-0 font-medium">
          <p>© 2026 Expedient Ltd. All rights reserved.</p>
          <div className="text-right flex flex-col items-end">
            <p>Based in Abu Dhabi, UAE.</p>
            <p className="mt-1">ADGM Registration Approved & Pending</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
