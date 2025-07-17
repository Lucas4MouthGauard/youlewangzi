import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { WalletConnectButton } from './WalletConnect'

interface HeaderProps {
  onSectionChange: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    { name: 'Home', section: 'hero' },
    { name: 'FatAni', section: 'fatani' },
    { name: 'Chat', section: 'chat' },
    { name: '3D Images', section: 'image3d' },
    { name: 'Features', section: 'features' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-md border-b border-neon-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange('hero')}
          >
            <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
            <span className="text-2xl font-bold neon-text">FatAni</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onSectionChange(item.section)}
                className="text-white hover:text-neon-pink transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Wallet Connect Button */}
            <WalletConnectButton />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <WalletConnectButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-neon-pink transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-neon-pink/30"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      onSectionChange(item.section)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left text-white hover:text-neon-pink transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 