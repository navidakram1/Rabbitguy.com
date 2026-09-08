const WHATSAPP_URL = "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0";

export function Announcement() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative flex w-full items-center justify-center gap-3 py-2 px-4 text-center text-xs sm:text-sm font-medium shadow-md">
      <span className="flex items-center gap-1.5">
        <span className="animate-pulse">⚡</span>
        <strong className="font-bold">1560+ Projects Done!</strong>
        <span className="hidden sm:inline">Use Coupon <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold text-yellow-300">Save10</span> for 10% off</span>
      </span>
      <div className="bg-white/20 hidden w-0.5 h-4 lg:block"></div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/20 hover:bg-white/30 text-white cursor-pointer rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide transition-all hover:scale-105"
      >
        💬 Live WhatsApp Support →
      </a>
    </div>
  );
}
