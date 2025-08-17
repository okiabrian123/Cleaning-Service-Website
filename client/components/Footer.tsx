import { Link } from "react-router-dom";
import { designImages } from "@/constants/imageMetadata";

export default function Footer() {
  return (
    <footer className="bg-yeldy-teal py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Links Column */}
          <div>
            <h3 className="text-white text-2xl font-bold font-montserrat mb-6">
              Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white text-lg font-normal font-montserrat hover:text-yeldy-lightgreen transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-lg font-normal font-montserrat hover:text-yeldy-lightgreen transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white text-lg font-normal font-montserrat hover:text-yeldy-lightgreen transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-lg font-normal font-montserrat hover:text-yeldy-lightgreen transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-white text-2xl font-bold font-montserrat mb-6">
              Social media
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img
                  src={designImages.footer.social.instagram.path}
                  alt={designImages.footer.social.instagram.alt}
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <img
                  src={designImages.footer.social.twitter.path}
                  alt={designImages.footer.social.twitter.alt}
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img
                  src={designImages.footer.social.tiktok.path}
                  alt={designImages.footer.social.tiktok.alt}
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white text-2xl font-bold font-montserrat mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <p className="text-white text-lg font-normal font-montserrat">
                +1(123) 456-789
              </p>
              <p className="text-white text-lg font-normal font-montserrat">
                +1(123) 456-789
              </p>
              <p className="text-white text-lg font-normal font-montserrat">
                emailexample@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white text-sm font-normal font-montserrat">
            © 2023 Cleaning Company | All Rights Deserved
          </p>
        </div>
      </div>
    </footer>
  );
}
