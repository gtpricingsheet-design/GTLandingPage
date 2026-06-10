import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CalendarCheck } from 'lucide-react';
import AnimatedConsole from './AnimatedConsole';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/jay-jovexstudio/30min';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open directly if widget hasn't loaded yet
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-4 py-1.5 rounded-full">
                <Sparkles size={14} />
                Web Design & AI Automation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              Websites that work.{' '}
              <span className="text-indigo-600">Automation</span>{' '}
              that scales.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              We build high-converting websites and custom AI workflows that free your team from repetitive work — so you can focus on growing your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary CTA — Calendly popup */}
              <button
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-lg transition-all hover:shadow-xl hover:scale-105 font-semibold"
              >
                <CalendarCheck size={18} />
                Book a free call
              </button>

              {/* Secondary CTA — scroll to contact form */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3.5 rounded-lg transition-all font-semibold"
              >
                Get a free mockup
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Trust nudge */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-gray-400 flex items-center gap-1.5 pt-1"
            >
              <CalendarCheck size={13} className="text-emerald-500" />
              30-min call &mdash; no commitment, no sales pressure.
            </motion.p>
          </motion.div>

          {/* Right Column — Animated Console Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center w-full"
          >
            <AnimatedConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
