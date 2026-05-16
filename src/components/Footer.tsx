import { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GT</span>
              </div>
              <span className="text-lg font-bold text-white">GT Produce</span>
            </div>
            <p className="text-sm leading-relaxed">
              The UK's premier fresh produce partner for businesses that demand the best.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#wholesale" className="hover:text-green-400 transition-colors">
                  Wholesale
                </a>
              </li>
              <li>
                <a href="#prep" className="hover:text-green-400 transition-colors">
                  Prep Services
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-green-400 transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Leeds, UK</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <a href="tel:+441132500000" className="hover:text-green-400 transition-colors">
                  +44 (0)113 250 0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <a
                  href="mailto:hello@gtproduce.uk"
                  className="hover:text-green-400 transition-colors"
                >
                  hello@gtproduce.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Get the latest insights on wholesale trends and product updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-400 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-green-400 mt-2">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
            <p>&copy; 2024 GT Produce. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
