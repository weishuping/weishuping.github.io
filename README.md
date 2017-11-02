impress 参数：
{data-x：幻灯片的X坐标

data-y：幻灯片的Y坐标

data-scale：幻灯片显示的缩放比例

data-rotate：幻灯片旋转的度数

data-rotate-x：为3D使用，这个度数设置它相对X轴旋转多少度。

data-rotate-y：为3D使用，这个度数设置它相对Y轴旋转多少度。

data-rotate-z：为3D使用，这个度数设置它性对Z轴旋转多少度。}
一时兴起想做一个个人主页，一方面主要是方便找工作，另一个是锻炼一下 自己学的知识，很肤浅，但是能达到基本使用效果。
想做一个酷炫的个人主页，所以我选择了可以用HTML写PPT的impress.js，在别人的github上下了下来使用。
如果只写HTML,我又觉得太简单；简历中有许多东西是重复的，可以使用Vue写个模板，或者读取数据；
但是在写Vue的时候，发现模板字符串只能用''来拼写，我就想用ES6来写，所以又想方设法的安装babel，webpack
安装 webpack 
安装 babel 全局安装不上
npm install babel-cli -g
npm install babel-core --save-dev
安装babel-loader
npm install babel-loader --save-dev
安装转码规则
npm install babel-preset-es2015 --save-dev
    配置webpack.config.js
安装Less-loader
npm install less-loader --save-dev
但是有错误，所以安装less npm install less --save-dev
还是有错误，找不到 style-loader,所以安装 npm install --save-dev style-loader css-loader

加载速度太慢了，不用从网页加载的。但是vue-loader 是针对 .vue 不知道管不管js里面的
安装vue-loader 
安装vue
但是有错误
``` 
 You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
 ```
查了一下 在webpack.config.js 配置 resolve 别名 ,然后在my.js中引入 import Vue from 'vue';

因为首先加入的impress样式影响第一张图片加载会抖动，所以我决定在此之前 再添一页。想要一个带心得图片，ps上文字嘛 哈哈 