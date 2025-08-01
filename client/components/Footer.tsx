import { Link } from "react-router-dom";

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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/097d88dea458133848845d83b2e4e8320e3643b0?width=60"
                  alt="Instagram"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ab605a4facebed52c3947ef1efb9cacec7694a3f?width=60"
                  alt="Twitter"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/30975515022c089d2c78065da28725490a54a7e1?width=58"
                  alt="TikTok"
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
