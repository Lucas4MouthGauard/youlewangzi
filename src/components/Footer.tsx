import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Twitter, Mail, Sparkles } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cyber-black/90 border-t border-neon-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
              <span className="text-2xl font-bold neon-text">FatAni</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your exclusive AI companion, combining cutting-edge technology with charming personality for an unprecedented interactive experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
                  Start Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Support: 24/7 Online
              </li>
              <li className="text-gray-300">
                Location: Virtual World
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 分隔线 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-neon-pink/20 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} FatAni. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with</span>
              <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
              <span className="text-gray-400 text-sm">for you</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 