#!/bin/bash

# FatAni 部署脚本
echo "🚀 开始部署 FatAni AI美少女伴侣..."

# 检查Node.js版本
echo "📋 检查环境..."
node --version
npm --version

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建生产版本
echo "🔨 构建生产版本..."
npm run build

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位于 dist/ 目录"
    echo "🌐 可以使用以下命令启动静态服务器："
    echo "   npx serve dist"
    echo "   # 或者"
    echo "   python -m http.server 8000 --directory dist"
else
    echo "❌ 构建失败！"
    exit 1
fi

echo "🎉 部署完成！" 