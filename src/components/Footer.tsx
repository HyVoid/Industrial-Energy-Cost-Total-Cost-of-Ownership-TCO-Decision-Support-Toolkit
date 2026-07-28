import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5 mt-auto py-4">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[40px] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#888888] text-[11px] text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2251FF]" />
          <span className="font-semibold text-[#051C2C]">STRAT-EXCEL v2.4</span>
          <span>| Industrial Energy Cost Comparison</span>
        </div>

        {/* Privacy Note required by specification */}
        <div className="flex items-center gap-1.5 bg-[#F5F5F2] px-3 py-1 rounded-full border border-black/5">
          <Lock className="w-3.5 h-3.5 text-[#051C2C]" />
          <span className="text-[#051C2C]/80 font-medium">
            Storage is entirely handled via localStorage on this device. No user data is transmitted or stored on any external server.
          </span>
        </div>
      </div>
    </footer>
  );
};
