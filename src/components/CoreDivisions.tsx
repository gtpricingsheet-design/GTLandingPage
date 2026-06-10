import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Bot, TrendingUp, CheckCircle } from 'lucide-react';
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const services = [
    {
      title: 'Web Design',
      description:
        'Bespoke, high-speed websites built to convert visitors into customers. Clean design, mobile-first, and optimised for performance.',
      icon: Monitor,
      bullets: [
        'Custom design, no templates',
        'Mobile-first & lightning fast',
        'Built to convert & rank',
      ],
      dark: false,
    },
    {
      title: 'AI Automation',
      description:
        'Custom AI agents and workflow automations that eliminate repetitive tasks and integrate seamlessly with your existing tools.',
      icon: Bot,
      bullets: [
        'Custom AI agents & chatbots',
        'CRM & tool integrations',
        'Save hours every week',
      ],
      dark: true,
    },
    {
      title: 'Lead Generation',
      description:
        'High-converting landing pages, automated lead capture, and smart follow-up sequences that fill your pipeline while you sleep.',
      icon: TrendingUp,
      bullets: [
        'Landing pages that convert',
        'Automated lead nurturing',
        'Performance tracking built in',
      ],
      dark: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Three Services.
            <br />
            <span className="font-light text-gray-400">One Studio.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            Whether you need a new website, smarter workflows, or more leads — we build it to a premium standard, every time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-8 flex flex-col cursor-pointer transition-all ${
                  service.dark
                    ? 'bg-gray-950 text-white shadow-[0_8px_40px_rgba(0,0,0,0.18)]'
                    : 'bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                  service.dark ? 'bg-indigo-500/20' : 'bg-gray-100'
                }`}>
                  <IconComponent className={`w-5 h-5 ${
                    service.dark ? 'text-indigo-400' : 'text-gray-700'
                  }`} />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  service.dark ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${
                  service.dark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        service.dark ? 'text-indigo-400' : 'text-gray-400'
                      }`} />
                      <span className={`text-sm ${
                        service.dark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group ${
                    service.dark
                      ? 'text-indigo-400 hover:text-indigo-300'
                      : 'text-indigo-600 hover:text-indigo-700'
                  }`}
                >
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
