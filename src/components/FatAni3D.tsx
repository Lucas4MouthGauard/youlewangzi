import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei'
import { MessageCircle, Heart, Settings } from 'lucide-react'

interface FatAni3DProps {
  onChat: () => void
}

// 3D模型组件
function FatAniModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* 头部 */}
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        position={[0, 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#ff6ec7" : "#ff69b4"}
          emissive="#ff1493"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* 身体 */}
      <Box args={[1.5, 2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#da70d6"
          emissive="#9370db"
          emissiveIntensity={0.1}
          metalness={0.6}
          roughness={0.3}
        />
      </Box>

      {/* 眼睛 */}
      <Sphere args={[0.1, 16, 16]} position={[-0.3, 2.2, 0.8]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00bfff" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.3, 2.2, 0.8]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00bfff" emissiveIntensity={0.5} />
      </Sphere>

      {/* 装饰性光环 */}
      <Sphere args={[2, 32, 32]} position={[0, 2, 0]}>
        <meshStandardMaterial
          color="#ff6ec7"
          transparent
          opacity={0.1}
          wireframe
        />
      </Sphere>
    </group>
  )
}

// 粒子效果
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(1000 * 3).map(() => (Math.random() - 0.5) * 20)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ff6ec7"
        transparent
        opacity={0.6}
      />
    </points>
  )
}

const FatAni3D: React.FC<FatAni3DProps> = ({ onChat }) => {
  const [currentAction, setCurrentAction] = useState('idle')

  const actions = [
    { id: 'chat', icon: MessageCircle, label: 'Start Chat', color: 'from-neon-blue to-neon-purple' },
    { id: 'love', icon: Heart, label: 'Show Love', color: 'from-neon-pink to-neon-purple' },
    { id: 'settings', icon: Settings, label: 'Customize', color: 'from-neon-purple to-neon-pink' }
  ]

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-16">
      {/* 3D Canvas */}
      <div className="w-full lg:w-2/3 h-96 lg:h-screen relative">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff6ec7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
          
          <FatAniModel />
          <Particles />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* 浮动信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-4 left-4 right-4 lg:left-8 lg:right-8"
        >
          <div className="cyber-card text-center">
            <h3 className="text-xl font-bold neon-text mb-2">Valentine 3D Model</h3>
            <p className="text-gray-300">Real-time rendered AI companion with interactive controls</p>
          </div>
        </motion.div>
      </div>

      {/* 控制面板 */}
      <div className="w-full lg:w-1/3 p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold neon-text mb-4">Interact with Valentine</h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience real interaction with AI companion through advanced 3D technology
          </p>
        </motion.div>

        {/* 操作按钮 */}
        <div className="space-y-4">
          {actions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              onClick={() => {
                setCurrentAction(action.id)
                if (action.id === 'chat') onChat()
              }}
              className={`w-full cyber-card group hover:scale-105 transition-all duration-300 ${
                currentAction === action.id ? 'ring-2 ring-neon-pink' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">{action.label}</h3>
                  <p className="text-gray-300 text-sm">
                    {action.id === 'chat' && 'Start intelligent dialogue'}
                    {action.id === 'love' && 'Express emotional interaction'}
                    {action.id === 'settings' && 'Personalization settings'}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CA信息和Buy按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="cyber-card"
        >
          <h3 className="text-lg font-bold text-white mb-4">Token Information</h3>
          <div className="space-y-4">
                          <div className="bg-cyber-gray/50 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Contract Address:</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('Cq4HdLWjyyBNzZgyPuJrUh7Y7WncgDLoJpJKpZe6bonk')
                      alert('Contract address copied to clipboard!')
                    }}
                    className="text-neon-blue hover:text-neon-pink text-sm transition-colors duration-300"
                  >
                    Copy
                  </button>
                </div>
                <div className="text-white font-mono text-xs break-all">
                  Cq4HdLWjyyBNzZgyPuJrUh7Y7WncgDLoJpJKpZe6bonk
                </div>
              </div>
              
              <button
                onClick={() => window.open('https://letsbonk.fun/token/Cq4HdLWjyyBNzZgyPuJrUh7Y7WncgDLoJpJKpZe6bonk', '_blank')}
                className="w-full cyber-button bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green transition-all duration-300"
              >
                Buy $游乐王子
              </button>
          </div>
        </motion.div>

        {/* 状态信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="cyber-card"
        >
          <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">AI Response</span>
              <span className="text-neon-green">Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">3D Rendering</span>
              <span className="text-neon-blue">60 FPS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Emotion Engine</span>
              <span className="text-neon-pink">Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FatAni3D 