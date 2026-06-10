import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonial() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 py-12"
        >
          <div className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Case Studies & Work
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Our portfolio of custom web designs and smart AI automation workflows is coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
