import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { designImages } from "@/constants/imageMetadata";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

function ServiceCard({
  title,
  description,
  backgroundImage,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative h-96 md:h-[432px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-lg">
        <h3 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl font-normal font-montserrat leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  const services = [
    {
      title: "Residential Cleaning",
      description: "For those needing housekeeping for their homes.",
      backgroundImage: designImages.residential.imageSquare.path,
    },
    {
      title: "Office Cleaning",
      description: "For those in need of a clean working area.",
      backgroundImage: designImages.officeCleaning.imageSquare.path,
    },
    {
      title: "Move-in/Move-out",
      description: "For those in need of moving in or out cleaning assistance.",
      backgroundImage: designImages.moveInOut.serviceImage.path,
    },
    {
      title: "Airbnb Cleaning",
      description: "For those in need of providing a hospitable Airbnb home.",
      backgroundImage: designImages.airbnbCleaning.rectangle3.path,
    },
  ];

  return (
    <section className="bg-yeldy-teal">
      {/* Section Title */}
      <div className="py-16 text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-white font-montserrat"
        >
          Our Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            backgroundImage={service.backgroundImage}
          />
        ))}
      </div>
    </section>
  );
}
