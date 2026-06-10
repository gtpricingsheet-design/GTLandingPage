import { motion } from 'framer-motion';
import { Zap, MessageSquare, BarChart2, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function TrustBar() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const trustItems = [
    { icon: Zap, label: 'Fast Turnaround', stat: '48hrs' },
    { icon: MessageSquare, label: 'Free Mockup First', stat: '£0' },
    { icon: BarChart2, label: 'Conversion-Focused', stat: '100%' },
    { icon: Clock, label: 'Ongoing Support', stat: '24/7' },
  ];

  return (
    <section ref={ref} className="bg-gray-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col gap-1"
              >
                <span className="text-2xl font-black text-white">{item.stat}</span>
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
