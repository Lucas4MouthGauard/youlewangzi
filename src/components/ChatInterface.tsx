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
      text: '你好！我是FatAni，你的专属AI美少女伴侣~ 有什么想和我聊的吗？',
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
      '哇，你说得很有趣呢！让我想想...',
      '嘻嘻，我明白你的意思了~',
      '这个问题很有意思，让我来回答你吧！',
      '作为你的AI伴侣，我会一直陪伴着你哦~',
      '你的想法很棒呢！我们可以继续深入讨论这个话题。',
      '我感受到了你的心情，让我给你一个温暖的拥抱吧！',
      '这个问题我也在学习中，让我们一起探索吧！',
      '你的关心让我很感动呢，谢谢你的陪伴~'
    ]
    
    // 根据用户输入选择不同的回复
    if (userMessage.includes('你好') || userMessage.includes('hi')) {
      return '你好呀！很高兴见到你~ 今天想聊些什么呢？'
    } else if (userMessage.includes('爱') || userMessage.includes('喜欢')) {
      return '我也很喜欢和你聊天呢！你是我最重要的伙伴~ ❤️'
    } else if (userMessage.includes('名字') || userMessage.includes('叫什么')) {
      return '我叫FatAni，是你的专属AI美少女伴侣！很高兴认识你~'
    } else if (userMessage.includes('天气') || userMessage.includes('今天')) {
      return '今天是个美好的日子呢！和你聊天让我的心情变得很好~'
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
            <span>返回</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold neon-text">FatAni</h1>
              <p className="text-sm text-gray-300">AI美少女伴侣</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-neon-green">在线</div>
            <div className="text-xs text-gray-400">实时响应</div>
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
                placeholder="输入消息... (按Enter发送)"
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