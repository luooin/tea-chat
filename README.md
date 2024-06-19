# tea-chat🎂
基于微信小程序的茶友交流平台


#### 介绍🌞

微信小程序在人们的日常生活中正逐步占据愈发重要的地位，不仅改变了传统的网上消费习惯，也为游戏娱乐等提供了全新的体验方式。为了深入挖掘微信小程序在餐饮行业中，特别是在点餐系统方面的潜在价值和深远意义，本文依托JavaScript、Vue、WXML、WXSS等前沿技术，精心打造了一款基于微信小程序的茶叶购买系统。该系统不仅提供了浏览茶叶产品、下单结算的便捷服务，还融入了分享功能，极大地满足了用户在购物方面的多样化需求。更重要的是，该系统无需下载额外的APP，即点即用，极大地提升了用户的使用便捷性。这一成功实践不仅为未来类似小程序的开发提供了宝贵的参考和启示，同时也具有一定的理论深度和实际应用价值。

**有偿获取完整源码或调试代码+🐧：1902317191**

**CSDN项目合集：http://t.csdnimg.cn/j7xXJ**

#### 软件架构🌞

软件架构说明
![image](https://github.com/luooin/tea-chat/assets/85004172/b79a9124-2dee-40b6-8f97-b4c5181bb309)


#### 安装教程🌞

1. 运行环境准备mysql8+java8

2. 配置maven路径，加载依赖

3. 运行sql文件，确保application.properties的数据库名称和账号密码是数据库所在主机的账号密码

#### 使用说明🌞

1. 登入

   管理员账号：admin	密码：admin
   
   客户账号：kehu	密码：111111

   配送员：peisongyuan 密码：111111
   
2.运行流程

客户端在微信小程序工具启动，或者在微信开发者工具启动后，浏览器通过http://localhost:8088/client/index.html访问。

管理端通过http://localhost:8088/index.html访问。

部署详情可以查看这篇csdn博客：http://t.csdnimg.cn/kpuxS

#### 项目演示🌞

+ 普通用户

小程序的前端界面是专为用户打造的交互场景。当用户成功登录后，他们将直接进入到小程序的主页。在这个界面上，用户将能够浏览到引人注目的宣传广告，方便地使用搜索功能，快速查找所需的商品，并一览商品的详细展示。购物车功能允许用户将心仪的商品加入其中，以备后续购买。此外，用户还可以方便地查看和管理自己的订单状态，随时了解已购买商品的最新进展。在个人详情部分，用户不仅可以对购买的商品进行评价，分享自己的购物体验，还能查看自己是否拥有可用的优惠券，享受更多优惠。购买完成后，订单状态将实时更新，用户可以通过订单状态页面轻松追踪自己的订单详情。除此之外，用户还可以在个人信息页面进行个性化的设置。他们可以修改收货地址，更新个人信息，甚至更改密码，以确保账户的安全与便捷。当然，如果用户需要暂时离开或切换账号，也能在个人信息页面轻松实现退出操作。整个小程序的前端设计旨在为用户提供流畅、便捷的购物体验。

**用户登录页**

![image](https://github.com/luooin/tea-chat/assets/85004172/c77f5629-1de0-4e04-97fd-fe81b1b9dc7c)

**商品信息页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/e575cb07-eb9a-4ad1-b1ed-f540f1353531)


**普通用户首页**

![image](https://github.com/luooin/tea-chat/assets/85004172/2a7994b2-13af-44be-8643-1d36eb04b7e6)

**购物车页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/c17e64f4-87bc-40e3-a8e6-0f70be69a291)

**我的订单页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/2d69e7f0-420b-4a8d-9a1c-b19976915810)

**个人页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/f673f946-07d2-413f-aa4c-f39f6925a65e)


+ 配送员端

在小程序中，除了普通用户使用的前台页面外，还设有一个专为配送员设计的独立界面。当配送员登录小程序时，他们不会看到琳琅满目的商品展示，而是直接进入到一个独特的抢单页面。这个页面专为配送员设计，用于接收和处理新的订单。每当有用户完成商品购买后，新的订单信息会实时出现在配送员的抢单页面上。配送员可以根据自己的情况和需求，自由选择是否接受这些订单。一旦接受订单，配送员就能实时追踪和管理该订单的状态，确保配送流程的顺利进行。与普通用户一样，配送员也能进入个人信息界面，对自己的地址、联系方式等个人信息进行查看和修改，以确保配送信息的准确性和高效性。这种设计为配送员提供了极大的便利，使他们能够更加高效地完成配送任务。

**配送员首页**

![image](https://github.com/luooin/tea-chat/assets/85004172/3a934ae3-31d0-4bac-9f7f-c87d9b681057)

**配送员接单**

![image](https://github.com/luooin/tea-chat/assets/85004172/82c63ad8-1903-4283-98e9-ca3babd5f3bf)

**配送员订单页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/8738b673-aef4-4ba1-86ee-72ef88b76f9d)

**配送员信息页**

![image](https://github.com/luooin/tea-chat/assets/85004172/39893b04-5750-49d6-92db-4e8c07c2886e)



+ 管理员端

管理员在后台管理系统拥有全面的控制权，可以轻松地进行以下操作：首先，他们可以灵活地增加、删除、修改和查询前台展示的商品，确保商品信息的准确性和实时性。其次，为了吸引用户，管理员还能够发布优惠券活动，提供多种促销方式。同时，管理员还能够处理用户发布的评论，保持互动并及时回应用户反馈。此外，管理员还负责所有新闻资讯的发布工作，确保用户能够获取到最新的信息。对于用户在前台已经完成的购买订单，管理员同样可以进行相应的操作，如确认订单、处理退换货等，以保障交易的顺利进行。更为重要的是，后台管理员还能够实时查看整个小程序的营收情况，掌握销售数据和趋势，为商业决策提供有力的数据支持。综上所述，后台管理员的角色至关重要，他们通过精细化的管理，确保了小程序的高效运作和用户体验的持续提升。

**首页**

![image](https://github.com/luooin/tea-chat/assets/85004172/e1b8b503-1726-4b0e-87ef-2ba6b24ff07a)

**茶叶类别管理页面**

![image](https://github.com/luooin/tea-chat/assets/85004172/152bf31c-3bdb-49cd-a770-b9717cb4fde2)

**茶叶管理**

![image](https://github.com/luooin/tea-chat/assets/85004172/ed22c7a8-06c0-459f-acac-1ad1f09e54a4)

**销售统计图表**

![image](https://github.com/luooin/tea-chat/assets/85004172/41de1e85-64b0-4bdf-940a-0c2857f2b7a3)

**资讯管理**

![image](https://github.com/luooin/tea-chat/assets/85004172/6038df1e-343d-4510-9dc8-365cf06a3a4b)

**优惠券管理**

![image](https://github.com/luooin/tea-chat/assets/85004172/d8c4d9b5-c103-4130-a714-74bf54a45c71)




#### 参与贡献🌞

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技🌞

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
