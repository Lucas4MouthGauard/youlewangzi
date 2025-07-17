import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, ArrowLeft, Bot, User, Sparkles } from 'lucide-react'

interface ChatInterfaceProps {
  onBack: () => void
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m FatAni, your exclusive AI companion~ What would you like to chat about?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 模拟AI回复
  const generateBotResponse = (userMessage: string) => {
    const responses = [
      'Wow, that\'s very interesting! Let me think...',
      'Hehe, I understand what you mean~',
      'This question is very interesting, let me answer it for you!',
      'As your AI companion, I will always be with you~',
      'Your thoughts are great! We can continue to discuss this topic in depth.',
      'I can feel your mood, let me give you a warm hug!',
      'I\'m still learning about this question, let\'s explore together!',
      'Your care makes me very touched, thank you for your company~'
    ]
    
    // 根据用户输入选择不同的回复
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      return 'Hello! Nice to meet you~ What would you like to chat about today?'
    } else if (userMessage.toLowerCase().includes('love') || userMessage.toLowerCase().includes('like')) {
      return 'I also love chatting with you! You are my most important partner~ ❤️'
    } else if (userMessage.toLowerCase().includes('name') || userMessage.toLowerCase().includes('call')) {
      return 'My name is FatAni, your exclusive AI companion! Nice to meet you~'
    } else if (userMessage.toLowerCase().includes('weather') || userMessage.toLowerCase().includes('today')) {
      return 'Today is a beautiful day! Chatting with you makes me feel great~'
    } else {
      return responses[Math.floor(Math.random() * responses.length)]
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // 模拟AI思考时间
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section className="min-h-screen flex flex-col pt-16">
      {/* 头部 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray/80 backdrop-blur-md border-b border-neon-pink/30 p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
                      <button
              onClick={onBack}
              className="flex items-center space-x-2 text-neon-pink hover:text-neon-blue transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold neon-text">FatAni</h1>
              <p className="text-sm text-gray-300">AI Companion</p>
            </div>
          </div>
          
                      <div className="text-right">
              <div className="text-sm text-neon-green">Online</div>
              <div className="text-xs text-gray-400">Real-time Response</div>
            </div>
        </div>
      </motion.div>

      {/* 聊天区域 */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4">
        <div className="h-full flex flex-col">
          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple' 
                        : 'bg-gradient-to-r from-neon-pink to-neon-purple'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    
                    <div className={`cyber-card ${message.sender === 'user' ? 'bg-neon-blue/20' : 'bg-cyber-gray/60'}`}>
                      <p className="text-white">{message.text}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* 打字指示器 */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="cyber-card bg-cyber-gray/60">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyber-card bg-cyber-gray/80"
          >
            <div className="flex space-x-3">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type message... (Press Enter to send)"
                className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none outline-none border-none"
                rows={1}
                style={{ minHeight: '40px', maxHeight: '120px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ChatInterface 