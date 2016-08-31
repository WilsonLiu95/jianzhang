# account note 手账本
## 背景
一直以来，都困惑于没有特别喜爱的记账软件，在Appstore里下载了几十款，换来换取，却总有这样或那样的不足。
最喜爱的可以说是轻账本，可惜其同步功能太差，并且总是丢失全部数据，一而再再而三，导致我对他的抛弃，而其他记账
应用操作流程太长，或者结构不清晰，或者太冗余，都不是我想要的记账应用。从寒假时，就有此意，自己来构建一个简单易用的
记账软件，可是这一年一直在忙于自我技术的沉淀与不断的学习，留给自己的项目时间不多，同时，技术也不够。现在，技术方面，
对于前端与后台都有了一定的积累，对于coding也慢慢驾轻就熟。正值学了Vue.js而无处使的时间，正好利用Vue来构建一个自己
喜爱的记账应用。

## 需求
1. 极致顺畅的记账体验，尽可能满足快的需求(不要过多的开场动画)
2. 清晰的时间脉络，按日期显示当天所有收入与支出之差，即净支出
3. 不臃肿，极致简单。只包含记账的功能，只包含收与支出，不提供任何银行卡等账户的概念
4. 图标显示功能，并且记录可以上传，与线上同步。

## 技术栈
### 前端
框架主要采用Vue.js辅助以vue-router,vue-resources,Vuex等插件，构建采用Vue-cli，使用了webpack与babel。采用sass编写
样式，同时利用饿了么的mint-u这套组件库。

### 后端
采用node.js的express框架，接口采用Restful的理念。数据库初定mysql。采用sequelize这个ORM工具操作mysql。



## 流程规划
1. 搭建前端后台基础架构
2. 设计产品原型
3. 设计数据库与接口
4. 前端页面(先采用mock数据进行调试)
5. 后台接口
6. 联调测试
7. 探索利用cordova构建IOS与Android版本。
8. 三个版本同时上线，进行推广


## 时间线
立项:2015-08-31
