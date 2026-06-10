import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Bot, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function CoreDivisions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const services = [
    {
      title: 'Web Design',
      description: 'Bespoke, high-speed websites built to convert visitors into customers. Clean design, mobile-first, and optimised for performance.',
      icon: Monitor,
      bullets: [
        'Custom design, no templates',
        'Mobile-first & lightning fast',
        'Built to convert & rank',
      ],
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-200',
    },
    {
      title: 'AI Automation',
      description: 'Custom AI agents and workflow automations that eliminate repetitive tasks and integrate seamlessly with your existing tools.',
      icon: Bot,
      bullets: [
        'Custom AI agents & chatbots',
        'CRM & tool integrations',
        'Save hours every week',
      ],
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      borderColor: 'border-gray-700',
    },
    {
      title: 'Lead Generation',
      description: 'High-converting landing pages, automated lead capture, and smart follow-up sequences that fill your pipeline while you sleep.',
      icon: TrendingUp,
      bullets: [
        'Landing pages that convert',
        'Automated lead nurturing',
        'Performance tracking built in',
      ],
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-200',
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Three Services. One Studio.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a new website, smarter workflows, or more leads — we build it to a premium standard, every time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(22, 163, 74, 0.15)' }}
                className={`${service.bgColor} rounded-xl p-8 border-l-4 border-green-600 border-r border-t border-b ${service.borderColor} transition-all cursor-pointer group`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className={`text-2xl font-bold ${service.textColor}`}>
                    {service.title}
                  </h3>
                </div>

                <p className={`${service.textColor} mb-6 opacity-90 leading-relaxed`}>
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className={`flex items-start gap-3 ${service.textColor}`}>
                      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
