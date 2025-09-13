

function addLoadEvent(func) {
     var oldonload = window.onload;
     if (typeof window.onload != 'function') {
         window.onload = func;
     } else {
         window.onload = function() {
             oldonload();
             func();
         }
     }
 }


 addLoadEvent(function() {
     console.log('tag cloud plugin rock and roll!');
     try {
        var wid = document.body.clientWidth
        var textHeight = wid / 18
        if(textHeight>40){
           textHeight = 40
        }
        var wid2 = parseInt(document.body.clientWidth * 0.45)
        if(wid2<320){
            wid2 = 320
         }
         document.getElementById("resCanvas").width=wid2;
         document.getElementById("resCanvas").height=wid2;

         // 美化标签云配置
         TagCanvas.textFont = 'PingHei, PingFang SC, Helvetica Neue, Microsoft YaHei';
         TagCanvas.textColour = '#2c3e50'; // 更深的文字颜色，提高对比度
         TagCanvas.textHeight = textHeight;
         TagCanvas.outlineColour = '#4786D6'; // 更鲜明的轮廓颜色
         TagCanvas.outlineMethod = 'block'; // 使用块状轮廓增强可读性
         TagCanvas.outlineThickness = 1; // 增加轮廓厚度
         TagCanvas.maxSpeed = 0.07; // 降低旋转速度使效果更优雅
         TagCanvas.freezeActive = true;
         TagCanvas.minBrightness = 0.3; // 提高最小亮度增强可读性
         TagCanvas.depth = 0.9; // 增加深度感
         TagCanvas.pulsateTo = 0.8; // 增强脉动效果
         TagCanvas.initial = [0.1,-0.1];
         TagCanvas.decel = 0.95; // 更平滑的减速
         TagCanvas.reverse = true;
         TagCanvas.hideTags = false;
         TagCanvas.shadow = '#000'; // 黑色阴影增强可读性
         TagCanvas.shadowBlur = 2; // 适当的阴影模糊
         TagCanvas.weight = true; // 根据标签权重调整大小
         TagCanvas.imageScale = null;
         TagCanvas.fadeIn = 1500; // 更平滑的淡入效果
         TagCanvas.clickToFront = 800; // 更优雅的点击效果
         TagCanvas.lock = false;
         TagCanvas.Start('resCanvas');
         TagCanvas.tc['resCanvas'].Wheel(true)
     } catch(e) {
         console.log(e);
         document.getElementById('myCanvasContainer').style.display = 'none';
     }
 });


