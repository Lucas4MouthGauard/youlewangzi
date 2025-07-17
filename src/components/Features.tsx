import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Heart, Zap, Shield, Users, Star, Globe, Lock } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Dialogue',
      description: 'Based on advanced natural language processing technology, capable of understanding context and conducting deep conversations',
      color: 'from-neon-blue to-neon-purple',
      delay: 0.1
    },
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'Equipped with emotion recognition capabilities, able to sense user mood changes and provide warm, caring companionship',
      color: 'from-neon-pink to-neon-purple',
      delay: 0.2
    },
    {
      icon: Zap,
      title: '3D Interaction',
      description: 'Real-time 3D rendering technology, supporting gesture recognition and voice interaction for immersive experiences',
      color: 'from-neon-purple to-neon-pink',
      delay: 0.3
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'End-to-end encryption technology ensures your privacy security, with all conversation content strictly confidential',
      color: 'from-neon-green to-neon-blue',
      delay: 0.4
    },
    {
      icon: Users,
      title: 'Social Features',
      description: 'Supports multi-user interaction, allowing you to share FatAni\'s companionship experience with other users',
      color: 'from-neon-pink to-neon-blue',
      delay: 0.5
    },
    {
      icon: Star,
      title: 'Personalization',
      description: 'Customize FatAni\'s appearance, personality, and behavior patterns according to user preferences',
      color: 'from-neon-purple to-neon-green',
      delay: 0.6
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Supports multiple languages including Chinese, English, Japanese, allowing global users to enjoy the service',
      color: 'from-neon-blue to-neon-pink',
      delay: 0.7
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security standards, 24/7 monitoring, ensuring stable system operation',
      color: 'from-neon-green to-neon-purple',
      delay: 0.8
    }
  ]

  const stats = [
    { label: 'Active Users', value: '100K+', color: 'text-neon-pink' },
    { label: 'Response Accuracy', value: '99.9%', color: 'text-neon-blue' },
    { label: 'Response Time', value: '<100ms', color: 'text-neon-purple' },
    { label: 'Satisfaction', value: '98%', color: 'text-neon-green' }
  ]

  return (
    <section className="min-h-screen pt-16">
      {/* 头部 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">
          FatAni Core Features
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Combining cutting-edge AI technology with charming personality for an unprecedented interactive experience
        </p>
      </motion.div>

      {/* 统计信息 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="cyber-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 功能网格 */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="cyber-card group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 技术栈展示 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="bg-cyber-gray/50 py-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold neon-text text-center mb-12">
            Technical Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">Frontend Technology</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React 18 + TypeScript</li>
                <li>• Three.js 3D Rendering</li>
                <li>• Framer Motion Animation</li>
                <li>• Tailwind CSS Styling</li>
              </ul>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">AI Technology</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Natural Language Processing</li>
                <li>• Emotion Recognition Algorithm</li>
                <li>• Deep Learning Models</li>
                <li>• Speech Synthesis Technology</li>
              </ul>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">Security & Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• End-to-end Encryption</li>
                <li>• Real-time Response Optimization</li>
                <li>• Distributed Architecture</li>
                <li>• 99.9% Availability</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 未来规划 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
                  <h2 className="text-4xl font-bold neon-text text-center mb-12">
            Future Plans
          </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-4">Short-term Goals</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Add more personalization options</li>
              <li>• Optimize 3D model details</li>
              <li>• Enhance dialogue intelligence</li>
              <li>• Expand multi-language support</li>
            </ul>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-4">Long-term Vision</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• VR/AR Immersive Experience</li>
              <li>• Holographic Projection Technology</li>
              <li>• Emotional Memory System</li>
              <li>• Cross-platform Synchronization</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Features 