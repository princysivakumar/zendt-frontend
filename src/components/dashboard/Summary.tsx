
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoubleBgBox from "../doubleBgBox";
import ExpandToggleButton from "./ExpandToggleButton";
import PaymentAccordion from "./PaymentAccordion";

const transactions = [
  { id: 1, name: "Aginaldo", amount: 353.01, avatar: "/avatar-placeholder.svg" },
  { id: 2, name: "Aginaldo", amount: 353.01, avatar: "/avatar-placeholder.svg" },
  { id: 3, name: "Aginaldo", amount: 353.01, avatar: "/avatar-placeholder.svg" },
  { id: 4, name: "Aginaldo", amount: 353.01, avatar: "/avatar-placeholder.svg" },
];

export default function DashboardSummary() {
  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  const wallets = [
    { code: "INR", amount: "23,098 rs", image: "/india.png" },
    { code: "USD", amount: "203 usd", image: "/usa.png" },
    { code: "AED", amount: "2,234 aed", image: "/uae.png" },
    { code: "EUR", amount: "560 eur", image: "/euro.png"  },
  ];

  const [walletStart, setWalletStart] = useState(0);
  const [showSettlementDetails, setShowSettlementDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const walletTrackRef = useRef<HTMLDivElement>(null);
  const [walletStep, setWalletStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const visibleCount = Math.min(wallets.length, isMobile ? 1 : 3);
  const maxStart = Math.max(0, wallets.length - visibleCount);

  useEffect(() => {
    setWalletStart((prev) => Math.min(prev, maxStart));
  }, [maxStart]);

  useEffect(() => {
    const measure = () => {
      if (!walletTrackRef.current) return;
      const cards = walletTrackRef.current.querySelectorAll<HTMLDivElement>("[data-wallet-card]");
      if (cards.length >= 2) {
        const first = cards[0].getBoundingClientRect();
        const second = cards[1].getBoundingClientRect();
        setWalletStep(second.left - first.left);
      } else if (cards.length === 1) {
        setWalletStep(cards[0].getBoundingClientRect().width);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [visibleCount, wallets.length]);

  const canSlideLeft = walletStart > 0;
  const canSlideRight = walletStart + visibleCount < wallets.length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2 text-left">
        <p className="text-4xl font-semibold">Hello Roberto !</p>
        <p className="text-white/60">How you doing?</p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-[0.25em] text-white">WALLETS</h2>
        </div>
        <div className="flex items-center gap-3">
          {canSlideLeft && (
            <ExpandToggleButton
              variant="button"
              className="h-14 w-10"
              icon={
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 16.5L1.5 9L8.75 1.5" stroke="white" strokeLinecap="round" />
                </svg>
              }
              onClick={() => setWalletStart((prev) => Math.max(0, prev - visibleCount))}
            />
          )}
          <div className="flex-1 overflow-hidden">
            <div
              ref={walletTrackRef}
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${walletStart * walletStep}px)`,
              }}
            >
              {wallets.map((wallet) => (
                <div
                  key={wallet.code}
                  data-wallet-card
                  style={{ minWidth: `calc(${100 / visibleCount}% - 0.5rem)` }}
                >
                  <DoubleBgBox
                    variant="small"
                    flagImage={wallet.image}
                    topLeft={<span className="text-sm font-semibold">{wallet.code}</span>}
                    bottomLeft={wallet.amount}
                    className="justify-between"
                  />
                </div>
              ))}
            </div>
          </div>
          {canSlideRight && (
            <ExpandToggleButton
              variant="button"
              className="h-14 w-10"
              icon={
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 1.5L8.5 9L1.25 16.5" stroke="white" strokeLinecap="round" />
                </svg>
              }
              onClick={() =>
                setWalletStart((prev) => Math.min(prev + visibleCount, Math.max(0, wallets.length - visibleCount)))
              }
            />
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DoubleBgBox variant="wide" className="justify-between">
          <div className="text-left text-white space-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Current balance</p>
            <p className="text-2xl font-semibold">Rs 1,00,000</p>
          </div>
        </DoubleBgBox>

        <button
          type="button"
          onClick={() => {
            if (isMobile) {
              navigate("/dashboard/settlement");
              return;
            }
            setShowSettlementDetails((prev) => !prev);
          }}
          aria-expanded={showSettlementDetails}
          className="text-left w-full"
        >
          <DoubleBgBox variant="wide" className="justify-between">
            <div className="text-left text-white space-y-1">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Last settlement</p>
              <p className="text-2xl font-semibold">$24,000</p>
              <p className="text-xs text-white/60">Deposited on July 10th</p>
            </div>
          </DoubleBgBox>
        </button>
      </section>

      {!isMobile && showSettlementDetails && (
        <div className="space-y-3">
          <PaymentAccordion />
        </div>
      )}

      <section className="rounded-[32px] bg-gradient-to-br from-[#0d1017] via-[#11161f] to-[#07080a] p-8 text-left text-white shadow-[0_30px_45px_rgba(4,4,7,0.55)] border border-white/5">
        <header className="flex flex-col gap-2 mb-6">
          <h3 className="text-xl font-semibold">Recent transaction</h3>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-400">
            <span>THIS MONTH</span>
            <span className="text-emerald-400 tracking-normal">
              ${total.toFixed(0)}
            </span>
          </div>
          <hr className="border-t border-white/10" />
        </header>

        <ul className="space-y-4">
          {transactions.map((tx) => (
            <li key={tx.id} className="flex items-center justify-between text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-black/60 overflow-hidden">
                  <img src={tx.avatar} alt={tx.name} className="h-full w-full object-cover" />
                </div>
                <span className="text-base text-white">{tx.name}</span>
              </div>
              <span className="text-base tracking-wide">${tx.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            to="/dashboard/transactions"
            className="text-sm text-white/80 hover:text-white transition"
          >
            View all transaction
          </Link>
        </div>
      </section>
    </div>
  );
}
