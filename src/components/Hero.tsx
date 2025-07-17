import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Zap, Brain } from 'lucide-react'

interface HeroProps {
  onExplore: () => void
  onImage3D?: () => void
}

const Hero: React.FC<HeroProps> = ({ onExplore, onImage3D }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,110,199,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold neon-text"
            >
              FatAni
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-neon-blue font-medium"
            >
              Your Exclusive AI Companion
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Combining cutting-edge AI technology with charming personality for an unprecedented interactive experience
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
          >
            <div className="cyber-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Dialogue</h3>
              <p className="text-gray-300">Advanced natural language processing to understand your every need</p>
            </div>

            <div className="cyber-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emotional Support</h3>
              <p className="text-gray-300">Warm and caring emotional support, becoming your closest companion</p>
            </div>

            <div className="cyber-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3D Interaction</h3>
              <p className="text-gray-300">Immersive 3D experience, perfectly blending virtual and reality</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onExplore}
              className="cyber-button group text-lg px-8 py-4"
            >
              Start Experience
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            {onImage3D && (
              <button
                onClick={onImage3D}
                className="cyber-button group text-lg px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple"
              >
                3D Images
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">99.9%</div>
              <div className="text-gray-300">Response Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">24/7</div>
              <div className="text-gray-300">24/7 Companion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">1000+</div>
              <div className="text-gray-300">Emotional Expressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text">AI</div>
              <div className="text-gray-300">Deep Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 