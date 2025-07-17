import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useConnection } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { motion } from 'framer-motion'
import { Wallet, Coins } from 'lucide-react'

const WalletStatus: React.FC = () => {
  const { connected, publicKey } = useWallet()
  const { connection } = useConnection()
  const [balance, setBalance] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (connected && publicKey) {
      const getBalance = async () => {
        try {
          const balance = await connection.getBalance(publicKey)
          setBalance(balance / LAMPORTS_PER_SOL)
        } catch (error) {
          console.error('Error getting balance:', error)
        }
      }
      getBalance()
    } else {
      setBalance(null)
    }
  }, [connected, publicKey, connection])

  if (!connected) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-4 z-50"
    >
      <div className="cyber-card bg-cyber-gray/90 backdrop-blur-md">
        <div className="flex items-center space-x-2 mb-2">
          <Wallet className="w-4 h-4 text-neon-pink" />
          <span className="text-sm font-bold text-white">Wallet Connected</span>
        </div>
        
        <div className="text-xs text-gray-300 mb-2">
          {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
        </div>
        
        {balance !== null && (
          <div className="flex items-center space-x-1">
            <Coins className="w-3 h-3 text-neon-blue" />
            <span className="text-xs text-neon-blue">
              {balance.toFixed(4)} SOL
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default WalletStatus 