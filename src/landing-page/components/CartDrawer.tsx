import { useState } from "react";
import { ShoppingCart, Tag, Check, ArrowRight, ShieldCheck, Zap, X } from "lucide-react";
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
      {/* Floating Cart Launcher Button for quick mobile/desktop access */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all"
        aria-label="Open Order Cart"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="hidden sm:inline">Order Cart & 10% Off</span>
        <span className="bg-yellow-400 text-blue-950 text-xs px-2 py-0.5 rounded-full font-extrabold">
          Save10
        </span>
      </button>

      {/* Cart Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <ShoppingCart className="w-5 h-5" />
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
              <div className="flex items-center justify-between font-semibold text-sm text-foreground">
                <span>All-in-One SaaS & App Build</span>
                <span>${basePrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Full-stack setup, mobile app readiness, company guidance & lifetime support.
              </p>
            </div>

            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="mb-4">
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Got a discount code?
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code (Save10)"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-background border border-border focus:border-primary focus:outline-none uppercase font-mono font-bold"
                  />
                  <Tag className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
                </div>
                <Button type="submit" size="sm" className="rounded-xl font-bold">
                  Apply
                </Button>
              </div>
              {isApplied && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1.5 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Coupon 'Save10' applied: 10% off!
                </p>
              )}
            </form>

            {/* Summary Price Breakdown */}
            <div className="space-y-2 py-3 border-y border-border/60 text-xs sm:text-sm mb-5">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${basePrice.toFixed(2)}</span>
              </div>
              {isApplied && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>10% First Order Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-border/40">
                <span>Total Amount</span>
                <span className="text-blue-600 dark:text-blue-400">${finalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground mb-5">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Moneyback
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Zap className="w-3.5 h-3.5 text-blue-500" /> Instant Setup
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href="http://Navidakram.com/payment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm text-center shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
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
