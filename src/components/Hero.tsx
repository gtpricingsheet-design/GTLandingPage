import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              The UK's Premier Fresh Produce Partner
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Next-generation wholesale and bespoke prep for businesses that demand the best.
            </motion.p>

            {/* Micro Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200"
            >
              <div>
                <div className="text-2xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">70+</div>
                <div className="text-sm text-gray-600">Years Legacy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg transition-all hover:shadow-xl hover:scale-105 font-semibold">
                Explore Wholesale
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3.5 rounded-lg transition-all font-semibold">
                Our Services
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-emerald-50 flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-900 font-bold text-2xl tracking-tight">Jovex Studio</p>
                <p className="text-gray-600 text-sm mt-1">Web Design & AI Automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
