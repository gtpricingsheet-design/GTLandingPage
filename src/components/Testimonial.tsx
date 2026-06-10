import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarCheck } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/jay-jovexstudio/30min';

export default function Testimonial() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={ref} className="bg-gray-950 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Case Studies &amp; Work
            <br />
            <span className="font-light text-gray-500">coming soon.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            Our portfolio of custom web designs and AI automation workflows is on its way. In the meantime — book a call and see what we can build for you.
          </p>
          <div className="pt-4">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] hover:scale-105"
            >
              <CalendarCheck size={18} />
              Book a free call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
