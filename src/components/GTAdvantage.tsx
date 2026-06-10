import { motion } from 'framer-motion';
import { Zap, LayoutTemplate, Brain } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function GTAdvantage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const advantages = [
    {
      icon: Zap,
      title: 'Fast & Focused',
      description: 'No lengthy agency processes. You get a free mockup within 48 hours, clear timelines, and a direct line to the people building your project.',
    },
    {
      icon: LayoutTemplate,
      title: 'Built to Convert',
      description: 'Every design decision is made with your business goal in mind. Clean, purposeful layouts that guide visitors toward action — not just impressions.',
    },
    {
      icon: Brain,
      title: 'AI-First Thinking',
      description: 'We don\'t bolt AI on as an afterthought. Automation is embedded from day one — saving your team hours every week and scaling what works.',
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
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Jovex Studio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not a faceless agency. We're a focused studio that ships fast, communicates clearly, and builds things that actually work.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
