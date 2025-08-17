import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { designImages } from "@/constants/imageMetadata";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={designImages.logo.yeldyGreen.path}
            alt={designImages.logo.yeldyGreen.alt}
            className="h-[200px] w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-yeldy-teal text-lg font-normal hover:text-yeldy-green transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-yeldy-teal text-lg font-normal hover:text-yeldy-green transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="text-yeldy-teal text-lg font-normal hover:text-yeldy-green transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-yeldy-teal text-lg font-normal hover:text-yeldy-green transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-yeldy-teal p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
