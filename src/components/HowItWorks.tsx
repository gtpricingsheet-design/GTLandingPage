import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, Hammer, Rocket, CalendarCheck } from 'lucide-react';

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
      icon: FileSearch,
      title: 'Free Mockup',
      description:
        "Tell us about your business and goals. We'll send you a free, no-obligation custom mockup within 48 hours — so you see exactly what you're getting before committing.",
      tag: 'No commitment',
    },
    {
      number: '02',
      icon: Hammer,
      title: 'We Build',
      description:
        "Once you're happy with the mockup, we get to work. Built to spec with regular check-ins and a shared project board so you're never in the dark.",
      tag: 'Full transparency',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch',
      description:
        "We handle the full launch — domain, hosting, testing, and go-live. Then we stay on hand for support as your business grows.",
      tag: 'End-to-end',
    },
  ];

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={ref} id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Three steps.
            <br />
            <span className="font-light text-gray-400">Zero guesswork.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            A simple, transparent process from first conversation to launch day.
          </p>
        </motion.div>

        {/* Steps — horizontal cards with large numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gray-100 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
              className="relative z-10 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Large background number */}
              <span className="absolute top-4 right-6 text-7xl font-black text-gray-50 select-none leading-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <step.icon className="w-5 h-5 text-indigo-600" />
              </div>

              {/* Tag */}
              <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-3">
                {step.tag}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
          >
            <CalendarCheck size={18} />
            Book a free call
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600 px-8 py-3.5 rounded-lg font-semibold transition-all"
          >
            Get a free mockup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
