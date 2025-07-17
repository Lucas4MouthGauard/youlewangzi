import React from 'react'
import { motion } from 'framer-motion'
import { useWallet } from '@solana/wallet-adapter-react'
import { Wallet, CheckCircle, XCircle } from 'lucide-react'

const WalletStatus: React.FC = () => {
  const { connected, wallet, publicKey } = useWallet()

  if (!connected) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-20 right-4 z-50"
    >
      <div className="cyber-card bg-cyber-gray/90 backdrop-blur-md border border-neon-green/50">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-neon-green" />
          <div>
            <div className="text-sm font-bold text-white">
              {wallet?.adapter.name} Connected
            </div>
            <div className="text-xs text-gray-300">
              {publicKey?.toBase58().slice(0, 8)}...{publicKey?.toBase58().slice(-8)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WalletStatus 