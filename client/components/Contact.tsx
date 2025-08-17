import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { designImages } from "@/constants/imageMetadata";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    if (titleRef.current && subtitleRef.current && formRef.current) {
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
        )
        .fromTo(
          formRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('${designImages.contact.rectangle2.path}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-8"
          >
            Contact Section
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-normal text-white font-montserrat max-w-3xl mx-auto leading-relaxed"
          >
            Some paragraph text that will explain the importance of contacting
            us important to get a housekeeping estimate.
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* First and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white font-semibold text-sm mb-2 font-montserrat"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full h-15 px-4 py-3 bg-yeldy-green/90 text-white placeholder-white/70 border-none rounded focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white font-semibold text-sm mb-2 font-montserrat"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full h-15 px-4 py-3 bg-yeldy-green/90 text-white placeholder-white/70 border-none rounded focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold text-sm mb-2 font-montserrat"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-15 px-4 py-3 bg-yeldy-green/90 text-white placeholder-white/70 border-none rounded focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-white font-semibold text-sm mb-2 font-montserrat"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 bg-yeldy-green/90 text-white placeholder-white/70 border-none rounded focus:outline-none focus:ring-2 focus:ring-white/30 resize-vertical"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yeldy-green hover:bg-yeldy-teal text-white font-bold py-3 px-14 rounded-full text-sm transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
