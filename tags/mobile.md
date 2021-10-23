---
description: 移动端（暂时没时间继续维护）
---

# Mobile

1.  快餐文分享： \
    Android Developer Roadmap \
    [https://roadmap.sh/android](https://roadmap.sh/android)

    摘要：The intent of this guide is to give you an idea about the Android development landscape and to help guide your learning if you are confused.

    文章介绍了原生Android开发时需要学习的技术栈，不涉及混和开发。
2. linux和Android的关系 - windliang的文章 - 知乎 \
   [https://zhuanlan.zhihu.com/p/66605252](https://zhuanlan.zhihu.com/p/66605252)
3. 在国内做独立开发者，没有公司实体寸步难行。
   1. 安卓 APP 商店上不了, 小米 华为 魅族 是允许个人的 ，opp vivo 不允许
   2. 经营性 APP 带后台需要域名备案，网安备案
   3. 支付还需要 ICP 证，其他网文、视频都需要单独办证
   4. 软著是强制的
   5. 提供服务不能接入支付宝、微信官方支付渠道（接第三方渠道收费高、还担心跑路）
   6. 唯一没支付障碍的是 iOS 渠道，支付用 IAP , 苹果商店要收 30% 手续费
4.  A: 现在国内Android开发主流语言是kotlin了嘛

    B: 双混合

    A: 这样不太好吧 像是团队之间互不妥协的结果..

    B: 不过kotlin快成主流了，好多都转了

    A: 嗯呐，好事…

    B: 不过感觉kotlin还是需要时间 毕竟android framework是java开发的 处在这个很尴尬的地步

    A: 是不是，kt 除了 语法层面，没什么提升呢？

    B: 我感觉，比java用起来方便简洁，好像别的没感觉哈哈 就凭它基于jvm

    A: 生态兼容吗..

    B: 兼容的一批 %100共通，可以相互调用

    A: 哇，可以的 底层都是class字节码吧

    如果从底层打通，编译时 混在一起，那就剩下语言隔离了

    B: 是啊，最后编译源文件都是.class

    编译时可以混在一起使用啊.

    都编译成class文件嘛，天然的兼容性，就是项目里可以有java类也可以有.kt类

    定义的类都能互相调用

    还不摆脱不了jvm，要是能摆脱jvm 就是android主流语言了哈哈哈

    A: 哇，这么爽

    C: 字节安卓新项目都是kt了 很香 反观iOS

    A: 之前看过 kotlin 通过内部dsl 写gui 那酸爽

    B: Anko？哈哈哈 kt史上最强框架名不虚传

    A: 算得上让我惊讶系列的技术了

    B: 但是我感觉还是习惯了xml铺布局，写代码生成布局还得写代码哈哈哈
