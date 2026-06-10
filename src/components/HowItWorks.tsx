import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ImageIcon, Code2, Rocket } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/jay-jovexstudio/30min';

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const steps = [
    {
      number: '01',
      icon: ImageIcon,
      title: 'Free Mockup',
      description:
        "Tell us about your business and goals. We'll send you a free, no-obligation custom mockup within 48 hours — so you see exactly what you're getting before committing.",
    },
    {
      number: '02',
      icon: Code2,
      title: 'Build',
      description:
        "Once you're happy, we get to work. Your website or automation is built to spec, with regular check-ins and a shared project board so you're never in the dark.",
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch',
      description:
        "We handle the full launch — domain, hosting setup, testing, and go-live. Then we're on hand for support as your business grows.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
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
    <section ref={ref} id="how-it-works" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            A simple, transparent process from first conversation to launch day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-px bg-white/10 z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 flex items-center justify-center transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <CalendarCheck size={18} />
            Book a free call
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 px-8 py-3.5 rounded-lg font-semibold transition-all"
          >
            Get a free mockup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
