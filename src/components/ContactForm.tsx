import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Clock, Layout, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New mockup request from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          website: formData.website || 'Not provided',
          message: formData.description,
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Fire Google Ads conversion event
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18229511331',
            event_category: 'form',
            event_label: 'mockup_request',
          });
        }
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email jay@jovexstudio.com directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-gray-950 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                <Sparkles size={12} />
                Risk-Free Process
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                See your website
                <br />
                <span className="font-light text-gray-400">before you commit.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                We don’t ask for credit cards or upfront fees. We build a high-fidelity custom mockup of your homepage first, so you can witness the Jovex standard yourself.
              </p>
            </div>

            <div className="relative z-10 space-y-5 py-6 border-y border-white/10">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">48-Hour Delivery</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Your interactive homepage mockup delivered within two business days.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Layout className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">100% Bespoke Design</h4>
                  <p className="text-gray-500 text-xs mt-0.5">No generic templates. Tailored to your audience and industry.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">No Commitment</h4>
                  <p className="text-gray-500 text-xs mt-0.5">If you decide not to proceed, the mockup is yours to keep.</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-gray-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>We respect your privacy and never share your email.</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-gray-900">Request your free mockup</h3>
                    <p className="text-gray-400 text-sm">Tell us about your project and we’ll handle the rest.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Current Website <span className="text-gray-300 font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Business Goals &amp; Brief
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does and what you want to achieve."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm text-red-600"
                    >
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get a free mockup
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Prefer to talk first?{' '}
                    <a href="https://calendly.com/jay-jovexstudio/30min" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Book a 30-min call instead &rarr;
                    </a>
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="text-center space-y-6 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900">Mockup request received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Thanks, <span className="font-semibold text-gray-900">{formData.name}</span>. Keep an eye on{' '}
                      <span className="font-semibold text-gray-900">{formData.email}</span>{' '}
                      — your custom mockup arrives within 48 hours.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-center gap-6 text-xs text-gray-400">
                    <span>Avg. response: 2 hours</span>
                    <span>·</span>
                    <span>2 slots left this week</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
