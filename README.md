# FatAni - AI美少女伴侣

![FatAni Logo](https://img.shields.io/badge/FatAni-AI%20Companion-pink?style=for-the-badge&logo=heart)

一个融合尖端AI技术与少女魅力的智能交互网页应用，为您带来前所未有的虚拟伴侣体验。

## ✨ 特性

- 🎭 **3D交互体验** - 基于Three.js的实时3D渲染
- 💬 **智能对话系统** - 先进的自然语言处理
- 💖 **情感陪伴** - 温暖贴心的AI伴侣
- 🎨 **科技+少女风格** - 独特的视觉设计
- 📱 **响应式设计** - 支持多设备访问
- ⚡ **高性能** - 流畅的动画和交互

## 🚀 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **3D渲染**: Three.js + React Three Fiber
- **动画**: Framer Motion
- **样式**: Tailwind CSS
- **构建工具**: Vite
- **图标**: Lucide React

## 📁 项目结构

```
fatani/
├── src/
│   ├── components/          # React组件
│   │   ├── Header.tsx      # 导航头部
│   │   ├── Hero.tsx        # 英雄区域
│   │   ├── FatAni3D.tsx    # 3D展示
│   │   ├── ChatInterface.tsx # 聊天界面
│   │   ├── Features.tsx    # 功能展示
│   │   ├── Footer.tsx      # 页脚
│   │   └── ParticleEffect.tsx # 粒子效果
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── package.json            # 项目配置
├── vite.config.ts          # Vite配置
├── tailwind.config.js      # Tailwind配置
└── README.md               # 项目说明
```

## 🎨 设计特色

### 配色方案
- **霓虹粉**: #ff6ec7 - 主要强调色
- **霓虹蓝**: #00d4ff - 次要强调色
- **霓虹紫**: #9d4edd - 辅助色
- **赛博黑**: #0a0a0a - 背景色

### 动画效果
- 流畅的页面过渡
- 粒子背景动画
- 3D模型交互
- 霓虹发光效果

## 🔧 自定义配置

### 修改主题色彩

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
colors: {
  'neon-pink': '#ff6ec7',
  'neon-blue': '#00d4ff',
  'neon-purple': '#9d4edd',
  // ... 更多颜色
}
```

### 调整3D模型

在 `src/components/FatAni3D.tsx` 中修改3D模型参数：

```typescript
// 修改模型大小、位置、材质等
<Sphere args={[1, 32, 32]} position={[0, 2, 0]}>
  <meshStandardMaterial color="#ff69b4" />
</Sphere>
```

## 📱 响应式支持

- **桌面端**: 完整功能体验
- **平板端**: 优化的触摸交互
- **移动端**: 简化的界面布局

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://reactjs.org/) - 前端框架
- [Three.js](https://threejs.org/) - 3D图形库
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架

## 📞 联系我们

- 邮箱: contact@fatani.ai
- 项目主页: [https://fatani.ai](https://fatani.ai)
- 问题反馈: [GitHub Issues](https://github.com/fatani/fatani/issues)

---

**FatAni** - 让AI陪伴更有温度 ❤️ 