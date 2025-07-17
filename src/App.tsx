import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import FatAni3D from './components/FatAni3D'
import ChatInterface from './components/ChatInterface'
import Features from './components/Features'
import Image3DViewer from './components/Image3DViewer'
import ParticleEffect from './components/ParticleEffect'
import Footer from './components/Footer'
import WalletConnect from './components/WalletConnect'
import WalletStatus from './components/WalletStatus'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl font-bold neon-text mb-4">FatAni</div>
          <div className="text-neon-blue text-xl">Initializing AI System...</div>
          <div className="mt-8">
            <div className="w-16 h-16 border-4 border-neon-pink border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <WalletConnect>
      <div className="min-h-screen bg-cyber-black relative overflow-hidden">
        <ParticleEffect />
        <Header onSectionChange={setCurrentSection} />
        <WalletStatus />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {currentSection === 'hero' && (
              <motion.div
                key="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero 
                  onExplore={() => setCurrentSection('fatani')} 
                  onImage3D={() => setCurrentSection('image3d')}
                />
              </motion.div>
            )}
            
            {currentSection === 'fatani' && (
              <motion.div
                key="fatani"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <FatAni3D onChat={() => setCurrentSection('chat')} />
              </motion.div>
            )}
            
            {currentSection === 'chat' && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
              >
                <ChatInterface onBack={() => setCurrentSection('fatani')} />
              </motion.div>
            )}
            
            {currentSection === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Features />
              </motion.div>
            )}
            
            {currentSection === 'image3d' && (
              <motion.div
                key="image3d"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Image3DViewer onBack={() => setCurrentSection('hero')} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </WalletConnect>
  )
}

export default App 