import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sectors() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectors = [
    'Hospitality',
    'Retail',
    'Healthcare',
    'Education',
    'Food Service',
    'Catering',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} id="sectors" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Expert supply solutions across diverse industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-4 justify-center"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: '#dcfce7' }}
              className="px-6 py-3 rounded-full border-2 border-gray-200 hover:border-green-600 transition-all cursor-pointer font-medium text-gray-900 bg-white"
            >
              {sector}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
