import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PriceFactorProps {
  number: string;
  title: string;
  description: string;
}

function PriceFactor({ number, title, description }: PriceFactorProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && numberRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          numberRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.25,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          },
        )
        .fromTo(
          cardRef.current.querySelector(".content"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
    }
  }, []);

  return (
    <div ref={cardRef} className="text-center text-white relative">
      {/* Large number background */}
      <div
        ref={numberRef}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 text-yeldy-lightgreen text-[200px] font-bold font-montserrat leading-none pointer-events-none"
        style={{ opacity: 0.25 }}
      >
        {number}
      </div>

      {/* Content */}
      <div className="content relative z-10 pt-32">
        <h3 className="text-2xl md:text-4xl font-bold font-montserrat mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl font-normal font-montserrat leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function PricesVary() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    if (titleRef.current && subtitleRef.current) {
      timeline
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
    }
  }, []);

  const priceFactors = [
    {
      number: "1",
      title: "Size Of Property",
      description:
        "Some paragraph text to explain why size of property will affect the price.",
    },
    {
      number: "2",
      title: "Cleaning Frequency",
      description:
        "Some paragraph text to explain why the cleaning frequency will affect the price.",
    },
    {
      number: "3",
      title: "Type of Cleaning",
      description:
        "Some paragraph text to explain why the type of cleaning will affect the price.",
    },
    {
      number: "4",
      title: "Additional Services",
      description:
        "Some paragraph text to explain why any additional services will affect the price.",
    },
  ];

  return (
    <section className="bg-yeldy-teal pt-20 pb-[121px]">
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-8"
          >
            Prices Vary
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-normal text-white font-montserrat max-w-3xl mx-auto leading-relaxed"
          >
            Some paragraph text that will explain the importance of such reason
            why the user should choose this cleaning company.
          </p>
        </div>

        {/* Price Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mb-20">
          {priceFactors.map((factor, index) => (
            <PriceFactor
              key={index}
              number={factor.number}
              title={factor.title}
              description={factor.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
