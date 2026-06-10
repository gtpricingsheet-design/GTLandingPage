import { motion } from 'framer-motion';
import { Zap, LayoutTemplate, Brain } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Advantage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const advantages = [
    {
      number: '01',
      icon: Zap,
      title: 'Fast & Focused',
      description:
        'No lengthy agency processes. You get a free mockup within 48 hours, clear timelines, and a direct line to the people building your project.',
    },
    {
      number: '02',
      icon: LayoutTemplate,
      title: 'Built to Convert',
      description:
        'Every design decision is made with your business goal in mind. Clean, purposeful layouts that guide visitors toward action — not just impressions.',
    },
    {
      number: '03',
      icon: Brain,
      title: 'AI-First Thinking',
      description:
        "We don't bolt AI on as an afterthought. Automation is embedded from day one — saving your team hours every week and scaling what works.",
    },
  ];

  return (
    <section ref={ref} className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-3">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Why Choose
            <br />
            <span className="font-light text-gray-400">Jovex Studio</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            We’re not a faceless agency. We’re a focused studio that ships fast, communicates clearly, and builds things that actually work.
          </p>
        </motion.div>

        {/* Numbered stack */}
        <div className="space-y-0 divide-y divide-gray-200">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
                className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start py-10 hover:bg-white hover:px-6 hover:-mx-6 rounded-xl transition-all duration-300 cursor-default"
              >
                {/* Large number */}
                <span className="text-5xl md:text-6xl font-black text-gray-200 group-hover:text-indigo-200 transition-colors leading-none pt-1">
                  {advantage.number}
                </span>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-xl">{advantage.description}</p>
                </div>

                {/* Arrow — desktop only */}
                <div className="hidden md:flex items-center self-center">
                  <span className="text-gray-200 group-hover:text-indigo-400 text-2xl transition-all duration-300 group-hover:translate-x-1 inline-block">
                    &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
