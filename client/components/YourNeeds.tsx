import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ReasonCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg?: boolean;
}

function ReasonCard({
  title,
  description,
  icon,
  iconBg = false,
}: ReasonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="text-center text-white flex flex-col justify-center items-center"
    >
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        {iconBg ? (
          <div className="w-60 h-60 rounded-full bg-yeldy-teal flex items-center justify-center">
            <img src={icon} alt={title} className="w-40 h-auto" />
          </div>
        ) : (
          <img src={icon} alt={title} className="w-46 h-46" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold font-montserrat mb-4">{title}</h3>
      <p className="text-lg font-normal font-montserrat leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function YourNeeds() {
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

  const reasons = [
    {
      title: "Reason 1",
      description:
        "Some paragraph text for reason number 1 as to why choosing this company is a worthy investment.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d94e82e5ccc7a3d2a6d16ff8d73aa9f58b540f19?width=334",
      iconBg: false,
    },
    {
      title: "Reason 2",
      description:
        "Some paragraph text for reason number 1 as to why choosing this company is a worthy investment.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/57844002a379543005e8cf07460e605f99df64eb?width=368",
      iconBg: false,
    },
    {
      title: "Reason 3",
      description:
        "Some paragraph text for reason number 1 as to why choosing this company is a worthy investment.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2e7412963ed19cd87dae41988f3059535c0766fd?width=344",
      iconBg: false,
    },
  ];

  return (
    <section className="bg-yeldy-teal pt-[109px] pb-[119px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-8"
          >
            Your Needs
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-normal text-white font-montserrat max-w-3xl mx-auto leading-relaxed"
          >
            Some paragraph text that will explain the importance of such reason
            why the user should choose this cleaning company.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto justify-center items-center">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              iconBg={reason.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
