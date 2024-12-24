import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to saving lives through blood donation. Join our
              mission to make a difference in your community.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="hover:text-red-600">
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link to="/request" className="hover:text-red-600">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-red-600">
                  Donation Centers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  to="mailto:info@blooddonation.org"
                  className="hover:text-red-600"
                >
                  info@blooddonation.org
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Blood Donation Organization. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
