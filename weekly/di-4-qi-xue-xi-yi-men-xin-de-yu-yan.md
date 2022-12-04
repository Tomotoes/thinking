---
description: 记录 22/(11/21 - 11/27)期间 值得分享的内容，每周不定期更新。
cover: ../.gitbook/assets/心里的花.jpeg
coverY: -639.450039968026
---

# 🦤 第 4 期 - 学习一门新的语言

### 介绍

我们每天都会接收到过载的信息，然而明月与砾同囊，其中的优质信息往往会被淹没，因此需要一个信息过滤服务来提升接收的信息质量。

思考的价值由此而来，分享内容的不限，偏向于 计算机技术 与 科技人文的方向。

* 内容存档可见：[https://thinking.tomotoes.com/](https://thinking.tomotoes.com/)
* Newsletter 订阅：[https://simon.zhubai.love/](https://simon.zhubai.love/)

### 封面

![img](https://bytedance.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGE5Mzc1ZjhkZTEwYmJmMjVlYmM3NjU2Yjk0MDFiNDVfZzIzRHQzSW9tWEhUMVFOVk9hWFZlSW1vWDdoMVRqSnRfVG9rZW46Ym94Y25idm1UdmRKcHJEdm1CQWxydmI5NllHXzE2NzAxNjQyNTM6MTY3MDE2Nzg1M19WNA)

There's **no cat** in this picture _11-27 西海_

### 话题

本周的话题是探讨学习一门编程语言的重要性。

编程语言是一个老生常谈的话题，经常引起各路人士的讨论（撕逼），如 什么 PHP 天下最好的语言、人生苦短 我用 python、Rustacean or Gopher 布道等。

在这些言论中 体现了一些关键点：某语言的特性、在特定领域的优越性 以及 社区的发展情况，这也说明了，当我们在选择一门语言时，也选择了 它 解决的领域 以及 社区与生态。

现在常说要成为 T 字型 人才，而 多语言的擅长者 是一个很好的案例，如 熟悉 服务端语言 与 终端语言就可做“全栈”应用开发；熟悉 移动端语言 与 前端语言就可做 hybrid 容器设计；熟悉 系统级语言 与 脚本语言就可做一些基础设施；熟悉函数式语言 与 多范式语言就会无形中提升编程能力。

可以见得 每当学习一门语言时，都会在很大程度扩张 我们的知识领域。

所以优秀的工程师应当不设边界，跳出舒适区，多去学习一门语言。

当学习的语言越多，了解到的领域知识、编程范式也会越多，碰撞出来的想法也会越多，这带来的收益是很大的。

本期主题主要来自 个人的学习经历 与 第 2 期分享的一篇文章：[How Trying New Programming Languages Helped Me Grow as a Software Engineer](https://cichocinski.dev/blog/trying-new-programming-languages-helped-grow-software-engineer)。

### 文章

#### [Implementing a Bloom Filter in JavaScript](https://blog.bitsrc.io/advanced-data-structures-algorithms-implementing-a-bloom-filter-in-javascript-703f04e9e2e9)

文章介绍了 布隆过滤器的使用场景，并给出了 JS 版的简单实现，文末给出了 布隆过滤器的最佳配置实践。

bloom filter 定义：False is always false. True is maybe true.

原理就是 空间换时间，既然一维存在冲突，那就使用多维交叉确认的方式，多维交叉确认可以有效地降低因冲突导致的误判。

#### [如何判断一个事有没有搞头？（上）](https://thequibbler.zhubai.love/posts/2206704334434189312)

李奇老师从“前置条件”方面介绍了 一个产品能不能搞。

从我的角度来看，“搞事情”是需要时间窗口的，用 王慧文的话来说，当 发现有空白的市场时，很有可能 已经在错误的地方、错误的时间被人尝试过很多次了。

#### [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

Node.js 官方出品的 安全最佳实践，全文都是满满的干货。

文章梳理了常见的攻击手段 与 防御措施，解读如下：

* Denial of Service of HTTP server

通用攻击手段：DDoS 攻击，解决方案：反向代理，配置限流、超时。

* DNS Rebinding

通用攻击手段：DNS 重绑定攻击，解决方案：禁用 inspector protocol。

* Exposure of Sensitive Information to an Unauthorized Actor

领域导致问题：泄露敏感信息，解决方案：上传时使用配置避免出现该问题。

* HTTP Request Smuggling

通用攻击手段：请求走私攻击，解决方案 用 H2，细节详细可见：[一篇文章带你读懂 HTTP Smuggling 攻击](https://xz.aliyun.com/t/6878)

* Information Exposure through Timing Attacks

通用攻击手段：旁路攻击的一种，时令攻击，解决方案：减少环境信息露出。

* Malicious Third-Party Modules

领域导致的问题：供应链攻击，解决方案：使用 自建 npm 源 + 固定 scope 包。

* Memory Access Violation

领域导致的问题：内存探测攻击，解决方案：不要在 shared runtime 跑。

* Monkey Patching

领域导致的问题：原型链修改攻击，解决方案：使用 --frozen-intrinsics 冻结原型链。

* Prototype Pollution Attacks

领域导致问题：原型链污染攻击，解决方案：不要用原型链的方法。

* Uncontrolled Search Path Element

领域导致问题：包路径权重攻击，解决方案：使用 `-policy-integrity` 明确引入的包。

#### [React Native in 2022 and Beyond](https://semaphoreci.com/blog/react-native)

React Native 官方出品的总结文，介绍了在 2022 的一些成就，其中带来了新的 render fabric 与 全新升级的 bridge 层 - Turbo native modules，[Hermes](https://hermesengine.dev/) 作为默认的 JS engine 也在持续升温。未来 RN 将在 SSR、a11y、动画体验上继续发力。

#### [6000字长文！超全面的互联网IP设计指南](https://www.uisdc.com/ip-design-guide)

IP 作为品牌化的重要手段，本文介绍了其 设计趋势与类型，整体内容很全面。

#### [凤凰架构 - 可观测性](http://icyfenix.cn/distribution/observability/)

![img](https://bytedance.feishu.cn/space/api/box/stream/download/asynccode/?code=MTc2MTdhYTBlODRlZWVkZTA5MDYxZjNkZGUxZTY1OGRfU1E4Um9heDVCcm1CeVlRdkRqRHlWTFdYaVdER01ZR2VfVG9rZW46Ym94Y241b25vSlRsaEF5NTE2amxIcHhibTFjXzE2NzAxNjQyNTM6MTY3MDE2Nzg1M19WNA)

文章介绍了 可观测性的定义，分别是：[事件日志](http://icyfenix.cn/distribution/observability/logging.html)、[链路追踪](http://icyfenix.cn/distribution/observability/tracing.html)和[聚合度量](http://icyfenix.cn/distribution/observability/metrics.html)，并详细概括了业界内相关的一些优秀产品，看起来已是一片红海。

#### [精读《pnpm》](https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/253.%E7%B2%BE%E8%AF%BB%E3%80%8Apnpm%E3%80%8B.md)

一篇介绍 pnpm 原理的文章，通过三层寻址，做到项目程度（第二层寻址）到 机器程度（第三层寻址）的最大复用，真正做到了 Performant NPM。

#### [复杂度是不灭的，只会转移，难道一切都是徒劳的吗？](https://zhuanlan.zhihu.com/p/138145081)

> Complexity has to live somewhere. If you are lucky, it lives in well-defined places.

一篇探讨复杂度的文章，作者从复杂度的邪恶 谈到 如何尽可能“消灭”，读起来还是很有感触。

#### [2021.07.13 我们是这样崩的](https://www.bilibili.com/read/cv17521097)

B 站 去年的事故复盘，全文脉络很清晰，非常标准的复盘文章了，事故原因竟然是 动态语言 的问题（省流：诡计多端的 0）。

### 项目

#### [kitty](https://github.com/kovidgoyal/kitty)

> Cross-platform, fast, feature-rich, GPU based terminal

Kitty 是一个严重被低估的终端工具，基于 GPU 渲染，core 由 C 编写，并提供了 开放的配置、脚本定制能力，使用体验、反应速度都很棒。

我已经使用了近半年，除了无法终端复用（作者觉得 复用是 NT 设计），其他方面满分。

#### [ssr.nvim](https://github.com/cshuaimin/ssr.nvim)

> Treesitter based structural search and replace plugin for Neovim.

一个基于语法结构的 neovim 查找、替换 插件，看起来非常理想化。

VSCode 目前还没有该能力，不过我们可以通过其他方式 做到结构化 替换，如：`editor.action.changeAll` + `vim` 插件。

#### [d2](https://github.com/terrastruct/d2)

> D2 is a modern diagram scripting language that turns text to diagrams.

一个可以生成 UML 图的 DSL，类似的产品还有挺多的，如 PlantUML、mermaid 等。

与之相反的是：draw.io 为首的 drag 类生成图的方式，不过很多模版化的图，用 DSL 生成反而会更高效。

相信未来会有 两种方式结合的形式，以 拖拽为主，但也提供 DSL 的口子。

#### [git-bug](https://github.com/MichaelMure/git-bug)

> Distributed, offline-first bug tracker embedded in git, with bridges

一个内嵌在 Git 中的 Bug 管理工具，提供 TUI 与 WebUI。

可惜 没有发现与 Git 有什么联动，更多的像 依附在 Git 上做卖点。

#### [The typing of the regex](https://thetypingoftheregex.com/)

一个正则的在线游戏，可以锻炼自己的手撸正则能力。

#### [websocketd](https://github.com/joewalnes/websocketd)

> Turn any program that uses STDIN/STDOUT into a WebSocket server. Like inetd, but for WebSockets.

一个可以将终端 IO 与 WebSocket 相连接的工具，感兴趣的同学可以看下源码，整体不是很复杂。

#### [ridermansb](https://github.com/Ridermansb/ridermansb)

> My NPM Card 😉

基于 NPX 能力 做的 个人信息展示，想法还是挺眼前一亮的。

#### [Script Kit](https://www.scriptkit.com/)

> An open-source kit to optimize your developer workflow

一个脚本管理软件，提供一些简洁的系统级 api

#### [Wolfia](https://www.wolfia.com/)

> Share your android app with iOS users and run successful bug bashes

通过一条链接，分享 Android app。

思路是 会在云设备上安装 分享的 app，再通过 web 进行实时交互，很新颖的创意。

### 资源

From MRyan：推荐几个算法可视化的网站，有助于理解算法。

1. [https://www.cs.usfca.edu/\~galles/visualization/Algorithms.html](https://www.cs.usfca.edu/\~galles/visualization/Algorithms.html)
2. [https://visualgo.net/en](https://visualgo.net/en)
3. [https://algorithm-visualizer.org/](https://algorithm-visualizer.org/)

### 生活

居家办公的一周，世界杯终于来了，在经过数个夜晚 终于解放了！（虽然仍 oncall 到半夜

并且 生日愿望也算是实现了，希望 她 越来越顺利吧 :)

在周四 部门周会上 突然收到了 大家准备的惊喜与祝福，真是出乎意料，开心\~

![img](https://bytedance.feishu.cn/space/api/box/stream/download/asynccode/?code=MzQzNjU4ZTAyMGMzZmJlN2RlMWE5YmJkMzQ3OTE0NDVfMFFxWTdaYjRRTVdvM1hjNm5ud3kxSGJqazZWR0pJdFhfVG9rZW46Ym94Y254TGhiQ2E4YTByaFBnNFplNlRaTjhjXzE2NzAxNjQyNTM6MTY3MDE2Nzg1M19WNA)

最近有一些时间了，准备继续 rust 之旅，先这样了，see you next week.

### 历史回顾

* [思考的价值 第 3 期周刊 - 技术与人类的相似性](https://thinking.tomotoes.com/weekly/3)
* [思考的价值 第 2 期周刊 - 鸭子理论与第一性原理](https://thinking.tomotoes.com/weekly/2)
* [思考的价值 第 1 期周刊 - 大厂垄断的 LaaS](https://thinking.tomotoes.com/weekly/1)
