// 等待DOM加载完成
 document.addEventListener('DOMContentLoaded', () => {
     // 获取DOM元素
     const backgroundContainer = document.getElementById('background-container');
     const makeWishBtn = document.getElementById('make-wish-btn');
     const throwConfettiBtn = document.getElementById('throw-confetti-btn');
     const wishForm = document.getElementById('wish-form');
     const wishDisplay = document.getElementById('wish-display');
     const wishInput = document.getElementById('wish-input');
     const submitWishBtn = document.getElementById('submit-wish-btn');
     const userWish = document.getElementById('user-wish');
     const candlesContainer = document.getElementById('candles-container');
     
     // 初始化动态背景
     initDynamicBackground();
     
     // 完善蛋糕装饰
     enhanceCakeDecoration();
     
     // 生成蜡烛
     generateCandles();
     
     // 生成礼物盒
     generateGiftBoxes();
     
     // 绑定事件监听器
     makeWishBtn.addEventListener('click', showWishForm);
     submitWishBtn.addEventListener('click', submitWish);
     
     // 改进撒花按钮的事件监听
     throwConfettiBtn.addEventListener('click', function() {
         console.log('撒花按钮被点击');
         throwConfetti(100); // 增加彩带数量以确保可见性
         
         // 添加额外的视觉反馈
         this.style.transform = 'scale(0.95)';
         setTimeout(() => {
             this.style.transform = 'scale(1)';
         }, 100);
     });
     
     // 添加点击标题效果
     const birthdayTitle = document.getElementById('birthday-title');
     birthdayTitle.addEventListener('click', () => {
         birthdayTitle.style.transform = 'scale(1.2) rotate(5deg)';
         setTimeout(() => {
             birthdayTitle.style.transform = 'scale(1) rotate(0deg)';
         }, 300);
         // 同时生成一些小气泡
         createBubbles(5, { x: event.clientX, y: event.clientY });
     });
     
     // 为文档添加点击效果
     document.addEventListener('click', (event) => {
         // 如果点击的不是按钮和表单元素，创建气泡效果
         if (!event.target.closest('button') && !event.target.closest('#wish-form')) {
             createBubbles(3, { x: event.clientX, y: event.clientY });
         }
     });
 });
 
 // 初始化动态背景
 function initDynamicBackground() {
     const container = document.getElementById('background-container');
     
     // 创建星星背景
     createStars(100);
     
     // 定期创建气泡
     setInterval(() => {
         createBubbles(2);
     }, 1000);
     
     // 初始创建一些气泡
     createBubbles(15);
 }
 
 // 创建星星效果
 function createStars(count) {
     const container = document.getElementById('background-container');
     
     for (let i = 0; i < count; i++) {
         const star = document.createElement('div');
         star.className = 'star';
         
         // 随机大小和位置
         const size = Math.random() * 3 + 1;
         star.style.width = `${size}px`;
         star.style.height = `${size}px`;
         star.style.left = `${Math.random() * 100}vw`;
         star.style.top = `${Math.random() * 100}vh`;
         
         // 随机动画延迟和持续时间
         star.style.animationDelay = `${Math.random() * 5}s`;
         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
         
         container.appendChild(star);
     }
 }
 
 // 创建气泡效果
 function createBubbles(count, position = null) {
     const container = document.getElementById('background-container');
     
     for (let i = 0; i < count; i++) {
         const bubble = document.createElement('div');
         bubble.className = 'bubble';
         
         // 随机大小
         const size = Math.random() * 60 + 20;
         bubble.style.width = `${size}px`;
         bubble.style.height = `${size}px`;
         
         // 设置位置
         if (position) {
             // 如果指定了位置，则在该位置附近生成
             bubble.style.left = `${position.x - size/2 + (Math.random() * 40 - 20)}px`;
             bubble.style.top = `${position.y - size/2 + (Math.random() * 40 - 20)}px`;
         } else {
             // 否则随机位置
             bubble.style.left = `${Math.random() * 100}vw`;
             bubble.style.bottom = `-100px`;
         }
         
         // 设置动画
         const duration = Math.random() * 15 + 10;
         bubble.style.animationDuration = `${duration}s`;
         bubble.style.animationDelay = `${Math.random() * 5}s`;
         bubble.style.opacity = Math.random() * 0.5 + 0.2;
         bubble.style.transform = `translateY(0) rotate(0deg)`;
         
         // 添加到容器
         container.appendChild(bubble);
         
         // 动画结束后移除元素
         setTimeout(() => {
             if (bubble.parentNode) {
                 bubble.parentNode.removeChild(bubble);
             }
         }, duration * 1000);
     }
 }
 
 // 生成蜡烛
 function generateCandles() {
     const container = document.getElementById('candles-container');
     const candleCount = 7; // 可以根据需要调整蜡烛数量
     
     for (let i = 0; i < candleCount; i++) {
         const candle = document.createElement('div');
         candle.className = 'candle';
         
         // 随机蜡烛颜色
         const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
         const randomColor = colors[Math.floor(Math.random() * colors.length)];
         candle.style.background = `linear-gradient(90deg, ${randomColor}, ${darkerColor(randomColor, 0.2)})`;
         
         // 创建蜡烛芯
         const wick = document.createElement('div');
         wick.className = 'candle-wick';
         
         // 创建火焰
         const flame = document.createElement('div');
         flame.className = 'candle-flame';
         
         // 添加到蜡烛
         candle.appendChild(wick);
         candle.appendChild(flame);
         
         // 添加到容器
         container.appendChild(candle);
     }
 }
 
 // 完善蛋糕装饰
 function enhanceCakeDecoration() {
     const creamDecoration = document.querySelector('.cream-decoration');
     
     // 添加奶油点缀
     for (let i = 0; i < 5; i++) {
         const dot = document.createElement('span');
         creamDecoration.appendChild(dot);
     }
     
     // 为蛋糕添加彩色糖粒装饰
     const cake = document.getElementById('cake');
     const topLayer = document.querySelector('.cake-top');
     
     // 在蛋糕顶层添加彩色糖粒
     for (let i = 0; i < 20; i++) {
         const sprinkle = document.createElement('div');
         sprinkle.style.position = 'absolute';
         sprinkle.style.width = `${Math.random() * 4 + 2}px`;
         sprinkle.style.height = `${Math.random() * 8 + 4}px`;
         sprinkle.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#ff9f1c'][Math.floor(Math.random() * 5)];
         sprinkle.style.borderRadius = '3px';
         sprinkle.style.transform = `rotate(${Math.random() * 360}deg)`;
         sprinkle.style.left = `${Math.random() * 100}%`;
         sprinkle.style.bottom = `${Math.random() * 10}%`;
         sprinkle.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.2)';
         
         topLayer.appendChild(sprinkle);
     }
 }
 
 // 生成礼物盒
 function generateGiftBoxes() {
     const container = document.getElementById('gifts-container');
     const giftCount = 4; // 礼物盒数量
     
     // 礼物盒颜色配置
     const giftColors = [
         { color: '#ff6b6b', colorLight: '#ff8787', colorDark: '#e55555' }, // 红色系
         { color: '#4ecdc4', colorLight: '#6fdbd4', colorDark: '#3ebcb3' }, // 青色系
         { color: '#ffe66d', colorLight: '#fff09e', colorDark: '#e6d24a' }, // 黄色系
         { color: '#9b59b6', colorLight: '#ad71ce', colorDark: '#8a4a9c' }, // 紫色系
         { color: '#3498db', colorLight: '#5dade2', colorDark: '#2980b9' }  // 蓝色系
     ];
     
     for (let i = 0; i < giftCount; i++) {
         const giftBox = document.createElement('div');
         giftBox.className = 'gift-box';
         
         // 随机选择礼物盒颜色
         const colorConfig = giftColors[Math.floor(Math.random() * giftColors.length)];
         giftBox.style.setProperty('--gift-color', colorConfig.color);
         giftBox.style.setProperty('--gift-color-light', colorConfig.colorLight);
         giftBox.style.setProperty('--gift-color-dark', colorConfig.colorDark);
         
         // 随机礼物盒大小（小变化）
         const size = 80 + Math.random() * 40;
         giftBox.style.width = `${size}px`;
         giftBox.style.height = `${size}px`;
         
         // 创建礼物盒各部分
         const giftBottom = document.createElement('div');
         giftBottom.className = 'gift-bottom';
         
         const giftLid = document.createElement('div');
         giftLid.className = 'gift-lid';
         
         const ribbonHorizontal = document.createElement('div');
         ribbonHorizontal.className = 'gift-ribbon-horizontal';
         
         const ribbonVertical = document.createElement('div');
         ribbonVertical.className = 'gift-ribbon-vertical';
         
         const giftBow = document.createElement('div');
         giftBow.className = 'gift-bow';
         
         // 组装礼物盒
         giftBox.appendChild(giftBottom);
         giftBox.appendChild(giftLid);
         giftBox.appendChild(ribbonHorizontal);
         giftBox.appendChild(ribbonVertical);
         giftBox.appendChild(giftBow);
         
         // 添加点击动画效果
         giftBox.addEventListener('click', () => {
             // 礼物盒弹跳动画
             giftBox.style.animation = 'none';
             giftBox.style.transform = 'translateY(-30px) scale(1.2) rotate(5deg)';
             
             // 创建礼物盒打开效果
             setTimeout(() => {
                 giftLid.style.transform = 'translateY(-30px)';
                 giftLid.style.opacity = '0.8';
                 
                 // 创建一些小礼物或彩带效果
                 createGiftContents(giftBox.getBoundingClientRect());
                 
                 // 播放音效
                 playCelebrationSound();
                 
             }, 300);
             
             // 恢复动画
             setTimeout(() => {
                 giftBox.style.animation = '';
                 giftBox.style.transform = '';
                 giftLid.style.transform = '';
                 giftLid.style.opacity = '1';
             }, 1500);
         });
         
         // 添加到容器
         container.appendChild(giftBox);
     }
 }
 
 // 创建礼物盒打开时的内容效果
 function createGiftContents(boxRect) {
     const container = document.getElementById('background-container');
     const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#ff9f1c', '#9b59b6'];
     
     // 生成彩带和小礼物
     for (let i = 0; i < 15; i++) {
         const content = document.createElement('div');
         
         // 随机选择是彩带还是小圆点
         const isRibbon = Math.random() < 0.5;
         
         if (isRibbon) {
             // 彩带
             content.style.width = `${Math.random() * 30 + 10}px`;
             content.style.height = `${Math.random() * 10 + 5}px`;
             content.style.borderRadius = '2px';
         } else {
             // 小圆点
             content.style.width = `${Math.random() * 10 + 5}px`;
             content.style.height = `${Math.random() * 10 + 5}px`;
             content.style.borderRadius = '50%';
         }
         
         // 设置样式
         content.style.position = 'absolute';
         content.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
         content.style.left = `${boxRect.left + boxRect.width/2}px`;
         content.style.top = `${boxRect.top}px`;
         content.style.zIndex = '20';
         content.style.opacity = '1';
         
         // 添加动画
         const duration = Math.random() * 2 + 1;
         const angle = Math.random() * 360;
         const distance = Math.random() * 80 + 40;
         
         content.style.transition = `all ${duration}s ease-out`;
         
         container.appendChild(content);
         
         // 触发动画
         setTimeout(() => {
             const radian = (angle * Math.PI) / 180;
             const x = Math.cos(radian) * distance;
             const y = Math.sin(radian) * distance + window.innerHeight * 0.5;
             
             content.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`;
             content.style.opacity = '0';
         }, 10);
         
         // 移除元素
         setTimeout(() => {
             if (content.parentNode) {
                 content.parentNode.removeChild(content);
             }
         }, duration * 1000);
     }
 }
 
 // 使颜色变暗的辅助函数
 function darkerColor(color, factor) {
     // 简单实现：移除#，转换为RGB，降低亮度
     const hex = color.replace('#', '');
     let r = parseInt(hex.substr(0, 2), 16);
     let g = parseInt(hex.substr(2, 2), 16);
     let b = parseInt(hex.substr(4, 2), 16);
     
     r = Math.floor(r * (1 - factor));
     g = Math.floor(g * (1 - factor));
     b = Math.floor(b * (1 - factor));
     
     return `rgb(${r}, ${g}, ${b})`;
 }
 
 // 显示许愿表单
 function showWishForm() {
     const wishForm = document.getElementById('wish-form');
     const wishDisplay = document.getElementById('wish-display');
     
     // 隐藏可能显示的心愿，显示表单
     wishDisplay.classList.add('hidden');
     wishForm.classList.remove('hidden');
     
     // 聚焦输入框
     document.getElementById('wish-input').focus();
     
     // 添加动画效果
     wishForm.style.transform = 'scale(0.9)';
     wishForm.style.opacity = '0';
     setTimeout(() => {
         wishForm.style.transform = 'scale(1)';
         wishForm.style.opacity = '1';
     }, 10);
     
     // 创建庆祝效果
     createBubbles(8);
 }
 
 // 提交心愿
 function submitWish() {
     const wishInput = document.getElementById('wish-input');
     const wishDisplay = document.getElementById('wish-display');
     const userWish = document.getElementById('user-wish');
     const wishForm = document.getElementById('wish-form');
     
     // 获取心愿内容
     const wishText = wishInput.value.trim();
     
     if (wishText) {
         // 更新心愿显示
         userWish.textContent = wishText;
         
         // 隐藏表单，显示心愿
         wishForm.classList.add('hidden');
         wishDisplay.classList.remove('hidden');
         
         // 添加动画效果
         wishDisplay.style.transform = 'scale(0.9)';
         wishDisplay.style.opacity = '0';
         setTimeout(() => {
             wishDisplay.style.transform = 'scale(1)';
             wishDisplay.style.opacity = '1';
         }, 10);
         
         // 清空输入框
         wishInput.value = '';
         
         // 创建庆祝效果
         createBubbles(15);
         throwConfetti(20);
         
         // 播放音效（如果浏览器支持）
         playCelebrationSound();
     } else {
         // 提示用户输入内容
         wishInput.placeholder = '请输入你的心愿...';
         wishInput.style.borderColor = '#e74c3c';
         setTimeout(() => {
             wishInput.style.borderColor = '#ddd';
         }, 2000);
     }
 }
 
 // 撒花庆祝效果
 function throwConfetti(count = 50) {
     // 确保函数被调用
     console.log('撒花函数被调用，创建彩带数量：', count);
     
     const container = document.getElementById('background-container');
     const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#ff9f1c', '#7209b7', '#4361ee'];
     
     // 清除旧的彩带
     const oldConfetti = document.querySelectorAll('.confetti');
     oldConfetti.forEach(c => c.remove());
     
     for (let i = 0; i < count; i++) {
         const confetti = document.createElement('div');
         confetti.className = 'confetti';
         
         // 随机形状（正方形、圆形、三角形）
         const shape = Math.floor(Math.random() * 3);
         const size = Math.random() * 10 + 5;
         
         // 设置样式
         confetti.style.width = `${size}px`;
         confetti.style.height = `${size}px`;
         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
         confetti.style.position = 'absolute';
         confetti.style.zIndex = '20';
         confetti.style.opacity = '0';
         
         // 设置形状
         if (shape === 0) { // 正方形
             // 默认就是正方形
         } else if (shape === 1) { // 圆形
             confetti.style.borderRadius = '50%';
         } else { // 三角形
             confetti.style.width = '0';
             confetti.style.height = '0';
             confetti.style.backgroundColor = 'transparent';
             confetti.style.borderLeft = `${size/2}px solid transparent`;
             confetti.style.borderRight = `${size/2}px solid transparent`;
             confetti.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
         }
         
         // 设置随机位置和动画
         confetti.style.left = `${Math.random() * 100}vw`;
         confetti.style.top = `-50px`;
         const duration = Math.random() * 3 + 2;
         confetti.style.animation = `fall ${duration}s linear forwards`;
         confetti.style.animationDelay = `${Math.random() * 0.5}s`;
         
         // 直接设置动画关键帧属性以确保兼容性
         confetti.style.webkitAnimation = `fall ${duration}s linear forwards`;
         confetti.style.webkitAnimationDelay = `${Math.random() * 0.5}s`;
         
         container.appendChild(confetti);
         
         // 动画结束后移除
         setTimeout(() => {
             if (confetti.parentNode) {
                 confetti.parentNode.removeChild(confetti);
             }
         }, duration * 1000);
     }
 }
 
 // 播放庆祝音效
 function playCelebrationSound() {
     // 检查浏览器是否支持Audio对象
     if ('Audio' in window) {
         try {
             // 这里可以添加一个简单的音效
             // 由于我们不能直接加载外部音频文件，所以这里只是一个示例
             // 在实际应用中，可以取消注释下面的代码并添加音频文件
             
             /*
             const audio = new Audio('celebration.mp3');
             audio.volume = 0.3;
             audio.play().catch(e => {
                 console.log('无法播放音频:', e);
             });
             */
             
             // 创建一个简单的音效（使用Web Audio API）
             const audioContext = new (window.AudioContext || window.webkitAudioContext)();
             const oscillator = audioContext.createOscillator();
             const gainNode = audioContext.createGain();
             
             oscillator.connect(gainNode);
             gainNode.connect(audioContext.destination);
             
             oscillator.type = 'sine';
             oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
             oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.2); // A5
             
             gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
             gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
             
             oscillator.start();
             oscillator.stop(audioContext.currentTime + 0.5);
             
             // 添加一些额外的音符
             setTimeout(() => {
                 const osc2 = audioContext.createOscillator();
                 const gain2 = audioContext.createGain();
                 
                 osc2.connect(gain2);
                 gain2.connect(audioContext.destination);
                 
                 osc2.type = 'sine';
                 osc2.frequency.setValueAtTime(698.46, audioContext.currentTime); // F5
                 osc2.frequency.exponentialRampToValueAtTime(1046.50, audioContext.currentTime + 0.2); // C6
                 
                 gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
                 gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                 
                 osc2.start();
                 osc2.stop(audioContext.currentTime + 0.5);
             }, 150);
             
         } catch (e) {
             console.log('无法创建音效:', e);
         }
     }
 }