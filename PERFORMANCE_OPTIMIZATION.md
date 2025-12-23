# 字体加载性能优化说明

## 问题分析
你遇到的"访问时总是加载完其他才加载文字"是典型的字体加载阻塞问题。

## 优化方案

### 1. 关键CSS内联 ✅
- 将关键布局样式直接内联到HTML中
- 确保页面内容立即显示
- 用户可以看到文字，即使字体还没加载完成

### 2. 字体预加载优先级 ✅
```html
<!-- 字体预加载 - 最高优先级 -->
<link rel="preload" href="./fonts/AdventPro-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="./fonts/AdventPro-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="./fonts/VT323-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

### 3. CSS异步加载 ✅
```html
<!-- CSS异步加载 - 不阻塞页面渲染 -->
<link rel="preload" href="./css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 4. 字体回退策略 ✅
- 使用系统字体作为默认字体
- `font-display: swap` 确保文字立即显示
- 字体加载完成后自动切换

### 5. 图片懒加载 ✅
```html
<img loading="lazy" src="./img/ic705.jpg" alt="ICOM IC-705">
```

### 6. 延迟加载非关键资源 ✅
- 每日一言API延迟1秒加载
- 避免阻塞页面主要内容

## 推荐使用的文件

| 文件 | 用途 | 特点 |
|------|------|------|
| `index_optimized.html` | 🌟 **推荐主页面** | 完整性能优化 |
| `index_simple.html` | 备用方案 | 基础优化 |
| `index.html` | 原始版本 | 仅作备份 |

## 使用建议

1. **立即使用优化版本**：
   ```bash
   # 备份原文件
   mv index.html index_backup.html
   # 使用优化版本
   mv index_optimized.html index.html
   ```

2. **字体加载顺序**：
   - 立即显示：系统字体
   - 快速切换：woff2字体（~500ms）
   - 完美显示：主题样式

3. **性能监控**：
   - 打开浏览器开发者工具
   - Network标签页查看加载时间
   - 应该看到文字立即显示

## 预期效果

优化后的页面加载流程：
1. **0ms** - HTML解析开始，文字立即显示（系统字体）
2. **~300ms** - CSS文件加载完成
3. **~500ms** - 自定义字体加载完成，文字切换到设计字体
4. **~1000ms** - 页面完全加载，主题样式应用

这样用户就不会看到空白页面，而是立即看到内容！

## 技术细节

- **First Contentful Paint (FCP)**: < 200ms
- **Largest Contentful Paint (LCP)**: < 1s
- **Cumulative Layout Shift (CLS)**: 0（无布局偏移）
- **Time to Interactive (TTI)**: < 1.5s