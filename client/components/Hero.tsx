import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    if (logoRef.current && textRef.current && buttonRef.current) {
      timeline
        .fromTo(
          logoRef.current,
          { scale: 0, rotation: 180 },
          { scale: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" },
        )
        .fromTo(
          textRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/d12d75f3a9a12a0b04ebb82b543cd641db1ab98d?width=2880')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <img
          ref={logoRef}
          src="https://api.builder.io/api/v1/image/assets/TEMP/3fd9345e8760a41feb6a82354d0e9d0057257bed?width=508"
          alt="Yeldy Logo"
          className="mx-auto mb-8 w-64 h-auto"
        />

        <div ref={textRef} className="mb-12">
          <p className="text-xl md:text-2xl font-normal font-montserrat max-w-lg mx-auto leading-relaxed">
            Brief catching slogan or explanation about the company.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="bg-yeldy-teal hover:bg-yeldy-green text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
        >
          Button
        </button>
      </div>
    </section>
  );
}
