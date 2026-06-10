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
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      className="relative min-h-screen pt-20 bg-gray-950 flex items-center overflow-hidden"
      aria-label="Custom web design and AI automation for businesses"
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #a5b4fc 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow — left */}
      <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] bg-indigo-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Ambient glow — right, behind console */}
      <div className="absolute top-1/4 right-0 w-[520px] h-[520px] bg-indigo-500/15 rounded-full blur-[140px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 px-4 py-1.5 rounded-full">
                <Sparkles size={12} />
                Custom Web Design &amp; AI Automation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white"
            >
              Custom websites{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                built for business.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              We design and build high-converting business websites with AI-powered automation — so your team saves hours every week and your site turns visitors into customers.
            </motion.p>

            {/* Trust proof line */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 leading-relaxed max-w-lg"
            >
              Get a <strong className="text-gray-300">free custom website mockup</strong> in 48 hours. No templates. No upfront cost. No commitment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={openCalendly}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] hover:scale-105 font-semibold"
              >
                <CalendarCheck size={18} />
                Book a free call
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 px-8 py-3.5 rounded-lg transition-all font-semibold"
              >
                Get a free mockup
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs text-gray-500 flex items-center gap-1.5 pt-1"
            >
              <CalendarCheck size={13} className="text-emerald-500" />
              30-min call &mdash; no commitment, no sales pressure.
            </motion.p>
          </motion.div>

          {/* Right Column — Animated Console */}
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
