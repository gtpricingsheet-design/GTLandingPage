import { motion } from 'framer-motion';
import { ArrowRight, Truck, Salad } from 'lucide-react';
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const divisions = [
    {
      title: 'GT Wholesale',
      description: 'Bulk supply solutions for restaurants, retailers, and food services. Fast logistics, premium quality, competitive pricing.',
      icon: Truck,
      bullets: [
        'Next-day delivery nationwide',
        'Custom order management',
        'Volume-based pricing',
      ],
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-200',
    },
    {
      title: 'GT Prep',
      description: 'Bespoke preparation services tailored to your exact specifications. From simple cuts to complex custom configurations.',
      icon: Salad,
      bullets: [
        'Custom preparation & packaging',
        'Quality assurance guaranteed',
        'Flexible delivery schedules',
      ],
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      borderColor: 'border-gray-700',
    },
  ];

  return (
    <section
      ref={ref}
      id="wholesale"
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
            Two Divisions. One Standard of Excellence.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need wholesale supply or custom preparation, we deliver premium quality every single time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {divisions.map((division, index) => {
            const IconComponent = division.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(22, 163, 74, 0.15)' }}
                className={`${division.bgColor} rounded-xl p-8 border-l-4 border-green-600 border-r border-t border-b ${division.borderColor} transition-all cursor-pointer group`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className={`text-2xl font-bold ${division.textColor}`}>
                    {division.title}
                  </h3>
                </div>

                <p className={`${division.textColor} mb-6 opacity-90 leading-relaxed`}>
                  {division.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {division.bullets.map((bullet, i) => (
                    <li key={i} className={`flex items-start gap-3 ${division.textColor}`}>
                      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group-hover:gap-3 transition-all"
                >
                  Explore
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
