import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

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
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full">
                <Sparkles size={14} />
                Web Design & AI Automation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              Websites that work.{' '}
              <span className="text-green-600">Automation</span>{' '}
              that scales.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              We build high-converting websites and custom AI workflows that free your team from repetitive work — so you can focus on growing your business.
            </motion.p>

            {/* Micro Stats — honest placeholders, fill in when ready */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200"
            >
              <div>
                <div className="text-2xl font-bold text-green-600">—</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">—</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">—</div>
                <div className="text-sm text-gray-600">Hours Saved via AI</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg transition-all hover:shadow-xl hover:scale-105 font-semibold"
              >
                Get a free mockup
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3.5 rounded-lg transition-all font-semibold"
              >
                Our Services
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-emerald-50 flex items-center justify-center relative">
              {/* Decorative blobs */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              {/* Floating card mock */}
              <div className="relative z-10 w-64 space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">JS</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Jovex Studio</div>
                      <div className="text-xs text-gray-500">New project brief received</div>
                    </div>
                  </div>
                  <div className="h-2 bg-green-100 rounded-full w-full mb-1.5"></div>
                  <div className="h-2 bg-green-100 rounded-full w-3/4"></div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-xs font-semibold text-gray-900 mb-2">AI Workflow Active</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Lead qualification running…</span>
                  </div>
                </div>
                <div className="bg-green-600 rounded-xl p-4 shadow-lg text-white text-center">
                  <div className="text-xs font-semibold">Mockup ready in 48hrs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
