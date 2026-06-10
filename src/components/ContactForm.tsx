import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Clock, Layout } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Fallback for development if VITE_WEB3FORMS_ACCESS_KEY is not set
    if (!accessKey || accessKey.includes('YOUR_ACCESS_KEY')) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          website: formData.website || 'N/A',
          message: formData.description,
          subject: 'New Jovex Studio Mockup Request',
          from_name: 'Jovex Studio Landing Page',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to send request. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-indigo-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <Sparkles size={14} />
                Risk-Free Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                See your website before you commit.
              </h2>
              <p className="text-indigo-200 leading-relaxed text-sm md:text-base">
                We don't ask for credit cards or upfront fees. We build a high-fidelity custom mockup of your homepage first, so you can witness the Jovex standard yourself.
              </p>
            </div>

            {/* Checklist */}
            <div className="relative z-10 space-y-5 py-6 border-y border-white/10">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-4.5 h-4.5 text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">48-Hour Delivery</h4>
                  <p className="text-indigo-200 text-xs md:text-sm mt-0.5">Your interactive homepage mockup is delivered straight to your inbox within two business days.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Layout className="w-4.5 h-4.5 text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">100% Bespoke Design</h4>
                  <p className="text-indigo-200 text-xs md:text-sm mt-0.5">No generic templates. Your design is tailored to suit your specific target audience and industry.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">No Commitment</h4>
                  <p className="text-indigo-200 text-xs md:text-sm mt-0.5">If you decide not to proceed, the mockup is yours to keep. No strings, no hard sales calls.</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-indigo-300 flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>We respect your privacy and never share your email address.</span>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[500px]">
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
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Request your free mockup</h3>
                    <p className="text-gray-500 text-sm">Tell us a bit about your project and we'll handle the rest.</p>
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg animate-shake">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Current Website URL <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Business Goals & Project Brief
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does and what you're hoping to achieve with a new website or AI automation workflow."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting request...
                      </>
                    ) : (
                      <>
                        Get a free mockup
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="text-center space-y-6 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={36} className="animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Mockup request received!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Thanks, <span className="font-semibold text-indigo-600">{formData.name}</span>. We've received your request and will review your brief. Keep an eye on your inbox at <span className="font-semibold text-gray-800">{formData.email}</span> — your custom homepage mockup will arrive within 48 hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-center gap-6 text-xs text-gray-400">
                    <span>Average response time: 2 hours</span>
                    <span>•</span>
                    <span>Availability: 2 slots left this week</span>
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
