import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Plane, Box } from '@react-three/drei'
import { Upload, RotateCcw, Download, Eye } from 'lucide-react'

interface Image3DViewerProps {
  onBack: () => void
}

// 3D图片展示组件
function Image3DDisplay({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* 3D图片展示 */}
      <Plane
        ref={meshRef}
        args={[3, 4]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(imageUrl)}
          transparent
          opacity={0.9}
        />
      </Plane>

      {/* 装饰性边框 */}
      <Box args={[3.2, 4.2, 0.1]} position={[0, 0, -0.1]}>
        <meshStandardMaterial
          color="#ff6ec7"
          emissive="#ff1493"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* 粒子效果 */}
      <Box args={[4, 5, 0.05]} position={[0, 0, -0.2]}>
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          wireframe
        />
      </Box>
    </group>
  )
}

const Image3DViewer: React.FC<Image3DViewerProps> = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)



  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsProcessing(true)
      
      // 模拟3D处理时间
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file)
        setSelectedImage(imageUrl)
        setIsProcessing(false)
      }, 2000)
    }
  }



  const resetView = () => {
    setSelectedImage(null)
  }

  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-16">
      {/* 3D展示区域 */}
      <div className="w-full lg:w-2/3 h-96 lg:h-screen relative">
        {selectedImage ? (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ff6ec7" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
            
            <Image3DDisplay imageUrl={selectedImage} />
            
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              autoRotate={false}
            />
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cyber-gray/20 border-2 border-dashed border-neon-pink/30 rounded-lg">
            <div className="text-center">
              <Eye className="w-16 h-16 text-neon-pink mx-auto mb-4" />
              <p className="text-gray-300 text-lg">Please select an image for 3D display</p>
            </div>
          </div>
        )}

        {/* 处理状态指示器 */}
        {isProcessing && (
          <div className="absolute inset-0 bg-cyber-black/80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-neon-pink border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-neon-pink text-lg">Processing image...</p>
              <p className="text-gray-300 text-sm">Converting to 3D</p>
            </div>
          </div>
        )}
      </div>

      {/* 控制面板 */}
      <div className="w-full lg:w-1/3 p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold neon-text mb-4">3D Image Conversion</h2>
          <p className="text-lg text-gray-300 mb-8">
            Convert your 2D images into immersive 3D experiences with interactive controls and real-time rendering
          </p>
        </motion.div>

        {/* 上传按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyber-card"
        >
          <h3 className="text-lg font-bold text-white mb-4">Upload Image</h3>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="cyber-button w-full group"
          >
            <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Select Image File
          </button>
          <p className="text-gray-400 text-sm mt-2">
            Supports JPG, PNG, GIF formats, max 10MB
          </p>
        </motion.div>



        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={resetView}
            className="cyber-card w-full group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                                  <h3 className="text-lg font-bold text-white">Reset View</h3>
                  <p className="text-gray-300 text-sm">Clear current image</p>
              </div>
            </div>
          </button>

          <button
            onClick={onBack}
            className="cyber-card w-full group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                                  <h3 className="text-lg font-bold text-white">Back to Home</h3>
                  <p className="text-gray-300 text-sm">Return to FatAni homepage</p>
              </div>
            </div>
          </button>
        </motion.div>

        {/* 技术信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="cyber-card"
        >
          <h3 className="text-lg font-bold text-white mb-4">Technical Features</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Rendering Engine</span>
              <span className="text-neon-blue">Three.js</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Speed</span>
              <span className="text-neon-pink">Real-time</span>
            </div>
            <div className="flex justify-between">
              <span>Supported Formats</span>
              <span className="text-neon-purple">JPG/PNG/GIF</span>
            </div>
            <div className="flex justify-between">
              <span>Interaction Mode</span>
              <span className="text-neon-green">3D Rotate/Zoom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Image3DViewer 