import { Link } from "react-router-dom";

export const WBLogo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
    <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
      <circle cx="32" cy="32" r="30" className="fill-navy" />
      <circle cx="32" cy="32" r="22" fill="none" className="stroke-gold" strokeWidth="1.2" />
      <polygon points="32,8 36,32 32,56 28,32" className="fill-gold" />
      <polygon points="8,32 32,28 56,32 32,36" className="fill-gold" />
      <polygon points="15,15 33,30 49,49 30,34" className="fill-gold" opacity="0.55" />
      <polygon points="49,15 34,30 15,49 30,34" className="fill-gold" opacity="0.55" />
    </svg>
    <span className="font-display text-xl tracking-wide text-foreground group-hover:text-gold transition-colors">
      World <span className="text-gold">Builders</span>
    </span>
  </Link>
);

export default WBLogo;