import React, { useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import { motion } from 'framer-motion'
import { Wallet, LogOut } from 'lucide-react'

// 导入钱包样式
require('@solana/wallet-adapter-react-ui/styles.css')

interface WalletConnectProps {
  children: React.ReactNode
}

const WalletConnect: React.FC<WalletConnectProps> = ({ children }) => {
  // 设置网络（主网或测试网）
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  // 支持的钱包
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

// 钱包连接按钮组件
export const WalletConnectButton: React.FC = () => {
  const { WalletMultiButton } = require('@solana/wallet-adapter-react-ui')
  const { useWallet } = require('@solana/wallet-adapter-react')
  const { connected, disconnect } = useWallet()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      {connected ? (
        <div className="flex items-center space-x-2">
          <div className="text-sm text-neon-green">Connected</div>
          <button
            onClick={disconnect}
            className="cyber-button text-sm px-3 py-1"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="wallet-adapter-button-wrapper">
          <WalletMultiButton className="cyber-button !bg-gradient-to-r !from-neon-purple !to-neon-pink !text-white !border-neon-pink !hover:!shadow-neon-pink/50 !transition-all !duration-300 !hover:!scale-105" />
        </div>
      )}
    </motion.div>
  )
}

export default WalletConnect 