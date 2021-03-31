# 为什么会写这个项目
最近在公司一直在做小程序的项目，在项目中就有一个使用组件构建小程序的功能，就类似以前的建站工具，这个功能是用比较传统的方式写的，使用JQ和JQ-UI的拖拽功能，相信大家也很熟悉这种组合方式，由于最近一直在学习vue，并且vue是数据驱动，就想用vue来写一下这个功能。刚开始的准备写的时候，想在网上找一个类似的demo研究研究，找了一圈发现，基本上什么也找不到太多开源，之前好不容易找到一篇[类似的文章](https://juejin.im/post/5a711724518825733201ebb1)，作者也要做类似的功能，但是没有把代码开源出来，最后只能自己东平西凑的找资料，完成了项目的第一个测试版。
# 项目准备
#### 1、vue-cli
#### 2、vuedraggable
#### 3、sortablejs
#### 4、vuex
#### 5、element-ui
> **vue-cli**是vue官方推荐的脚手架还很适合有vue基础的人使用。
在这个项目中由于用到了拖拽元素就为了方便就使用了**vuedraggable**，**vuedraggable**是基于**sortablejs**的封装所以也要引入。由于组件中会存在大量的数据所以为了数据的统一管理，这里就使用了**vuex**。**element-ui**这个我就不解释了，为了好看点就引入。

# 安装过程
#### 1、安装vue-cli并初始化一个vue项目
 ```
npm install --global vue-cli
vue init webpack vuetest
 ```
#### 2、安装项目所需要的包
 ```
npm install vuedraggable
npm install sortablejs
npm install --save vuex
npm install --save axios
npm install element-ui
 ```
 #### 3、运行项目
```
npm run dev