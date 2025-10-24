import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./ui/button";
import { Search, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = ["Destinations", "Tours", "Hotels", "Flights", "About"];

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="font-[Inter] sticky top-0 z-[9999] w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h1 className="text-lg font-bold text-gray-900 tracking-tight">Trippleog</h1>

          {/* Desktop Navigation (unchanged) */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="hidden sm:flex bg-black text-white">Book Now</Button>

            {/* Small hamburger — visible on small screens only */}
            <button
              className="relative flex flex-col justify-between w-5 h-4 md:hidden focus:outline-none"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-full h-[2px] bg-black rounded-full shadow-sm"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-full h-[2px] bg-black rounded-full shadow-sm"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-full h-[2px] bg-black rounded-full shadow-sm"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay rendered via Portal */}
      <MobileMenuPortal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}

/* Mobile menu component that renders into document.body via a portal */
function MobileMenuPortal({ isOpen, onClose, navItems }) {
  // Build overlay content
  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col bg-white text-center items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          {/* Top bar with small logo + close icon (so user always knows how to close) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="pl-1">
              <span className="text-lg font-semibold text-gray-900">Trippleog</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="p-2 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Nav Items — vertically spaced, readable size on mobile */}
          <div className="flex flex-col items-center justify-center space-y-6 px-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href="#"
                onClick={onClose}
                className="text-gray-900 text-lg  tracking-wide"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.06 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA buttons at bottom of menu */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-gray-300 text-sm text-gray-800"
            >
              Sign In
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-black text-white text-sm"
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(overlay, document.body);
}
