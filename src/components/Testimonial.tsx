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
          className="text-center space-y-8"
        >
          <div>
            <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8">
              "GT Produce transformed how we manage our supply chain. Their reliability, quality, and tech-forward approach means we can focus on what we do best. They're not just a supplier—they're a trusted partner."
            </p>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-gray-900">Sarah Mitchell</p>
              <p className="text-gray-600 text-sm">Head of Operations, Premier Hospitality Group</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i }}
                className="text-2xl"
              >
                ★
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
