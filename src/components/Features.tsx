import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Heart, Zap, Shield, Users, Star, Globe, Lock } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: '智能对话',
      description: '基于先进的自然语言处理技术，能够理解上下文，进行深度对话交流',
      color: 'from-neon-blue to-neon-purple',
      delay: 0.1
    },
    {
      icon: Heart,
      title: '情感陪伴',
      description: '具备情感识别能力，能够感知用户情绪变化，提供温暖贴心的陪伴',
      color: 'from-neon-pink to-neon-purple',
      delay: 0.2
    },
    {
      icon: Zap,
      title: '3D互动',
      description: '实时3D渲染技术，支持手势识别和语音交互，带来沉浸式体验',
      color: 'from-neon-purple to-neon-pink',
      delay: 0.3
    },
    {
      icon: Shield,
      title: '隐私保护',
      description: '端到端加密技术，确保您的隐私安全，所有对话内容严格保密',
      color: 'from-neon-green to-neon-blue',
      delay: 0.4
    },
    {
      icon: Users,
      title: '社交功能',
      description: '支持多用户互动，可以与其他用户分享FatAni的陪伴体验',
      color: 'from-neon-pink to-neon-blue',
      delay: 0.5
    },
    {
      icon: Star,
      title: '个性化定制',
      description: '根据用户喜好定制FatAni的外观、性格和行为模式',
      color: 'from-neon-purple to-neon-green',
      delay: 0.6
    },
    {
      icon: Globe,
      title: '多语言支持',
      description: '支持中文、英文、日文等多种语言，全球用户都能享受服务',
      color: 'from-neon-blue to-neon-pink',
      delay: 0.7
    },
    {
      icon: Lock,
      title: '安全可靠',
      description: '企业级安全标准，24/7监控，确保系统稳定运行',
      color: 'from-neon-green to-neon-purple',
      delay: 0.8
    }
  ]

  const stats = [
    { label: '活跃用户', value: '10万+', color: 'text-neon-pink' },
    { label: '对话准确率', value: '99.9%', color: 'text-neon-blue' },
    { label: '响应时间', value: '<100ms', color: 'text-neon-purple' },
    { label: '满意度', value: '98%', color: 'text-neon-green' }
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
          FatAni 核心功能
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
          融合尖端AI技术与少女魅力，为您带来前所未有的智能交互体验
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
            技术架构
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">前端技术</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React 18 + TypeScript</li>
                <li>• Three.js 3D渲染</li>
                <li>• Framer Motion 动画</li>
                <li>• Tailwind CSS 样式</li>
              </ul>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">AI技术</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 自然语言处理</li>
                <li>• 情感识别算法</li>
                <li>• 深度学习模型</li>
                <li>• 语音合成技术</li>
              </ul>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-xl font-bold text-white mb-4">安全与性能</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 端到端加密</li>
                <li>• 实时响应优化</li>
                <li>• 分布式架构</li>
                <li>• 99.9%可用性</li>
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
          未来规划
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-4">短期目标</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 增加更多个性化选项</li>
              <li>• 优化3D模型细节</li>
              <li>• 提升对话智能度</li>
              <li>• 扩展多语言支持</li>
            </ul>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-4">长期愿景</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• VR/AR沉浸式体验</li>
              <li>• 全息投影技术</li>
              <li>• 情感记忆系统</li>
              <li>• 跨平台同步</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Features 