import { useState } from "react";
import { ShoppingCart, Tag, Check, ArrowRight, ShieldCheck, Zap, X, Sparkles } from "lucide-react";
import { Button } from "../../client/components/ui/button";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("Save10");
  const [isApplied, setIsApplied] = useState(true);
  const [discountPercent, setDiscountPercent] = useState(10);

  const basePrice = 299;
  const discountAmount = isApplied ? (basePrice * discountPercent) / 100 : 0;
  const finalPrice = basePrice - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toLowerCase() === "save10") {
      setIsApplied(true);
      setDiscountPercent(10);
    } else {
      setIsApplied(false);
      setDiscountPercent(0);
    }
  };

  return (
    <>
      {/* 21st Floating Cart Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-2xl shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all hover:ring-4 hover:ring-blue-500/30 group animate-[float_4s_ease-in-out_infinite]"
        aria-label="Open Order Cart"
      >
        <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Order Cart & 10% Off</span>
        <span className="bg-yellow-400 text-blue-950 text-xs px-2.5 py-0.5 rounded-full font-black shadow-xs">
          Save10
        </span>
      </button>

      {/* Cart Modal / Drawer with 21st Glassmorphism Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-md rounded-3xl bg-card border-2 border-border p-6 sm:p-7 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Review Your Order Cart
                </h3>
                <p className="text-xs text-muted-foreground">
                  SaaS Starter & Turnkey Digital Package
                </p>
              </div>
            </div>

            {/* Package Details */}
            <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 mb-4">
              <div className="flex items-center justify-between font-bold text-sm text-foreground">
                <span>All-in-One SaaS & App Build</span>
                <span className="text-primary">${basePrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Full-stack setup, mobile app readiness, company guidance & lifetime support.
              </p>
            </div>

            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="mb-4">
              <label className="text-xs font-bold text-muted-foreground block mb-1.5 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-purple-500" /> Got a discount code?
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon (Save10)"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-background border-2 border-border focus:border-primary focus:outline-none uppercase font-mono font-bold"
                  />
                </div>
                <Button type="submit" size="sm" className="rounded-xl font-bold px-4">
                  Apply
                </Button>
              </div>
              {isApplied && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Coupon 'Save10' applied: 10% instant savings!
                </p>
              )}
            </form>

            {/* Summary Price Breakdown */}
            <div className="space-y-2 py-3.5 border-y border-border/60 text-xs sm:text-sm mb-5">
              <div className="flex justify-between text-muted-foreground font-medium">
                <span>Subtotal</span>
                <span>${basePrice.toFixed(2)}</span>
              </div>
              {isApplied && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>10% First Order Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-foreground pt-2 border-t border-border/40">
                <span>Total Amount</span>
                <span className="text-blue-600 dark:text-blue-400 text-lg">${finalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground mb-5 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Moneyback
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-blue-500" /> Instant Setup
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href="http://Navidakram.com/payment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm text-center shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Proceed to Checkout (${finalPrice.toFixed(2)}) <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
