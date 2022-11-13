---
cover: ../../.gitbook/assets/🪶 (1).jpeg
coverY: -846.439648281375
layout: editorial
---

# 😇 思考的价值周刊 第 1 期

### 介绍

我们每天都会接收到过载的信息，然而明月与砾同囊，其中的优质信息往往会被淹没，因此需要一个信息过滤服务来提升接收的信息质量。

思考的价值由此而来，分享内容的不限，偏向于 计算机技术 与 科技人文的方向。

内容存档可见：[https://thinking.tomotoes.com/](https://thinking.tomotoes.com/)

本篇属于思考的价值 第一期周刊，记录 22/(10/31 - 11/06 )期间 值得分享的内容，每周不定期更新。

### 封面

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143638071.\(null\))

一只绿鹭在捕食。11-06 00:10 北京什刹海

### 话题

国内发展较大的 laas 都是由大厂垄断的，大家有没有想过 为什么？

* 对于小厂 或者 初创来说，做的事情一般都是 paas or saas，这些层面的应用 能更具备故事性，实用性，并且 laas 服务的进入门槛是比较高的。
* 对于大厂来说，存在对机器的需求，能够承担起运作机器，建设中心的成本。

所以造成的现象就是 越底层越偏基础设施 越能看见大型组织。

### 文章

#### [What’s Up With WebAssembly: Compute’s Next Paradigm Shift](https://sapphireventures.com/blog/whats-up-with-webassembly-computes-next-paradigm-shift/)

一篇介绍 WASM 发展趋势的文章。作者将其看中下一代的云计算基石，从多个方面梳理了 WASM 的优势与应用场景。

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143638387.\(null\))

最开始 WASM 只是运行在 browser，用来扩展 Web 的生态，而现在 WASM 运行到了各种环境，能够承载的场景越来越广。

在看文章时，脑子中不停的闪回一句话：“这就是 \[中枢层] 的能力”。

WASM 就是一种抹平了不同 CPU 架构的机器码，它可由任意的编程语言编译而来，又可运行在各种 system 中，这是它与生俱来的优势。

亮点被放大，场景被挖掘，也是很自然的事情。

中枢层，在计算机科学中无处不在，你想到哪些中枢层呢？

比如 V8 字节码，上层是 JS 的广泛生态，下层是编译后在不同平台的指令集。又比如 JSX，上层是各种物料生态，下层是 DOM、Native、Terminal。又比如 JVM，上层是 Java，Scala，Kotlin，下层是 VM 编译的机器指令等。

PS：中枢层更广为人知的表现是 沙漏模型

延伸阅读：

[The Internet Was Designed With a Narrow Waist](https://www.oilshell.org/blog/2022/02/diagrams.html)

#### [How Workers works](https://developers.cloudflare.com/workers/learning/how-workers-works/) [Introducing workerd: the Open Source Workers runtime](https://blog.cloudflare.com/workerd-open-source-workers-runtime/)

两篇来自 CF 关于 Worker 的文章。

为什么 wasm、v8 越来越多在云厂商中使用，因为 这些 runtime 有天然的优势：占用资源更细粒，可 share 的程度更广。

#### [穿透 Web3](https://mp.weixin.qq.com/s/pacNtxhtAByaGgLUr-BNGQ)

一篇介绍 Web3 的好文。

文中有一点概念介绍非常通用：NFT 的价值。

* **NFT** **的核心不是技术，而是共识**。
* **只要共识不破，那有钱人总会去找有共识的资产**。

如何针对一个事物达成共识，可以提供愿景，可以夸大故事，可以找人背书，也可以利用人的各种心理。不管如何，只要一个事物开始逐渐有人认可，那么它就已经被赋予了价值。

#### [Shell Script Best Practices](https://sharats.me/posts/shell-script-best-practices/)

一篇介绍 Shell 最佳实践的文章。

Shell 这种晦涩难懂，毫无语义美的 语言，最佳实践应该是尽量少写，用 py、js 代替。

比如 google 开源的 zx 库，非常好用。

#### [Tauri：下一代桌面应用开发框架？](https://mp.weixin.qq.com/s/G4K3nIB1SsYDsOxMv7CyFg)

一篇介绍桌面端开发的好文。

前文介绍了 桌面端开发的历史 与 业界内知名的解决方案，后文着重介绍了 Tauri 这一款框架。 如果应用不涉及过多的 native 依赖，使用 Tauri 开发应用还是很香的，但如果存在很强的依赖，就比想开发一款截图应用，那还是老老实实 写 native 吧。

#### [Four Eras of JavaScript Frameworks](https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks)

文章介绍了 JS 框架的 4 个代表性的时代，从我个人的视角做下解读：

* 无框架的 库流行时代

JS 开始是运行在浏览器上的玩具语言，只能操作 DOM，资本为了制造技术壁垒，使得前端技术无标准可言，浏览器之间的不兼容性很明显。

该时代的 JS 生态主要以 jQuery、Mootools 等库为主，以兼容浏览器，便捷操作 DOM 节点。

* 框架兴起的时代

随着 Gmail、Google Docs 的兴趣，越来越多的人关注到了 Ajax 可通信的机制，虽然当时还没有 模块化，但前端页面丰富化 已逐渐成为潮流。

该时代的框架代表有：Backbone.js、Angular 1、Ember.js 等，这些框架都算是 视图层框架，为 MV\* 服务。

* 框架井喷的时代

随着 Node 、CJS 的创建，让前端发展进入了一个新的时代，服务端开发、cli 应用、项目工程化 开始出现萌芽，并逐渐发展壮大。

该时代的框架代表有：React.js、Vue.js、Svelte 等，单页应用、组件分层、前后端分离成为前端开发的趋势。

* 框架全栈的时代

随着 Node 生态、边缘云计算的发展、SPA 终端渲染不可避免带来的问题，越来越多的框架 选择了将渲染放到了服务端。

该时代的框架代表有：Next.js、Nuxt.js、Remix 等，虽然这些框架会造成了 hybrid 问题，但相对来说 首屏性能提升明显。

Question：下一代前端框架（非跨端）的趋势是？

我个人认为，框架多核 可能是一个趋势。（多核框架与多核库 差别在于侵入的深度，重点在多核）

随着 WebWorker 兼容性、终端算力的不断提高，使用其做渲染层的苗头有所显现。

我看到的一些信息：

[Expanding Single Page Apps into multiple Browser Windows](https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59)

[Introducing Partytown ](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)

先根据场景论证 多核框架的优势。

* 复杂场景（重特效、重计算）

各个 Worker 根据场景职责各司其职，Master 尽可能闲置 以满足交互体验。

如前不久 阿 B 发生的用户体验事情，在用户终端执行视频解码，如果使用多核框架则可将该计算运行到 WebWorker。

如搭建平台，画布渲染就可单独划分为个 Worker。

* 简单场景

简单场景下也可将页面中 尽可能的非重要资源放到 Worker 中执行，设想一下 没有 JS 的页面对性能的收益 是很明显的。

并且多核框架存在天然的优势，涉及到 worker 就可做 计算资源调度。

设想一下 用户终端是一个进程，终端上每个 worker 是一个线程，进程之间可通过 ws、WebRTC 通信，线程之间通过 postMessage 通信。

假如有个挖矿的页面逻辑，如果想利益最大化，那么就可根据 ua 拿到每个终端的算力，并在上层实现一个针对算力的类似 gmp 调度也是完全有可能的。

延伸阅读：

[https://www.smashingmagazine.com/2021/06/web-workers-2021/](https://www.smashingmagazine.com/2021/06/web-workers-2021/)

[https://eevans.co/blog/wraft/](https://eevans.co/blog/wraft/) [https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)

#### [Faster hardware is a bad first solution to slow software](https://pythonspeed.com/articles/fixing-performance-with-hardware/)

一篇关于性能解决方案的讨论文。

作者想表达的观点一句话概括：当应用缓慢时，不要为了成本去增加硬件性能（工程师的薪资大于硬件的薪资），而是先审查代码。后文是一些支撑点。

#### [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)

新的 CSS 颜色规范来了：oklch。该格式能表达的色彩空间更丰富\~

#### [Generative art Open Graph preview images](https://matthewstrom.com/writing/generative-art-og-images/?ref=sidebar)

一篇介绍 生成图实践的好文。

作者先是介绍了 生成图的原理，由无数个向量组成图案。然后又介绍了他的最佳实践，为每张图生成独一无二的封面图。

惊呼于作者的耐心，原理与实践结合，呈现了一个极致的解决方案。

#### [Fancy Image Decorations: Outlines and Complex Animations](https://css-tricks.com/fancy-image-decorations-outlines-and-complex-animations/)

一篇 关于 css 动效的文章，介绍了如何使用 outline 实现复杂的交互动效，你学会了吗？

#### [Deep-copying in JavaScript](https://surma.dev/things/deep-copy/index.html)

一篇介绍 深拷贝的文章。居然可以利用 BOM 上的原生能力来达到拷贝对象的目的。

如 message channel、history api、notification api...

延伸阅读：

[Deep-copying in JavaScript using structuredClone](https://web.dev/structured-clone/)

#### [Real-time Web应用开发新体验](https://mp.weixin.qq.com/s/Fph-Bn9edLn0fqBMlWaUsg)

一篇介绍 实时场景下 的架构设计文章，Elixir 大法好。

延伸阅读：

[https://www.zhihu.com/question/341832872](https://www.zhihu.com/question/341832872)

#### [Phylum Discovers Dozens More PyPI Packages Attempting to Deliver W4SP Stealer in Ongoing Supply-Chain Attack](https://blog.phylum.io/phylum-discovers-dozens-more-pypi-packages-attempting-to-deliver-w4sp-stealer-in-ongoing-supply-chain-attack)

一篇介绍 python 供应链攻击的文章。

整体攻击的方式 很类似于 js 生态：钓鱼包名 + 安装钩子时注入。

企业内部一定要管控好 语言包的生态，比如 内部建镜像站，内部包限制包名规范等。

#### [Why do JavaScript frameworks have such short lives?](https://www.quora.com/Why-do-JavaScript-frameworks-have-such-short-lives)

并不是框架短命，而是历史正在向前发展，还未处于稳定。

#### [曾经 Mesos 背后的公司，如今在干嘛?](https://2d2d.io/s1/mesos/)

> 我们之前曾多次提到历史上竞争激烈的容器编排之战 (The Container Orchestration Wars)，而 Kubernetes 最有力的竞争者 Mesos 以及其背后的公司当时也算是风光无限，不仅是资本的宠儿，也是被众人看好的明日之星。好景不长，短短三年便改天换地，胜者 Kubernetes 自不必说，Docker 虽败，但开发者依然离不开他。Fleet 背后的 CoreOS，Cattle 背后的 Rancher 也都一直不断创新，备受瞩目。唯独 Mesos 似乎很惨，是早已沉寂，被人淡忘？还是已低调转型，等待厚积薄发？也不知道还有多少人会关心：之前 Mesos 背后的公司是谁？如今尚且安好？

Mesos 如今已经不在了，文章有梳理创始人的复盘，总结为两点：没有经验 试错成本高 与 未经营健康的社区关系。

第一点是实打实的技术积累，输给 google 很正常；第二点在我看来算是个历史包袱。

语言的选择 对开源项目来说是非常重要的一点，它代表的不仅是项目的解决方案，更重要的是项目选择的社区，选择的生态。

这点 TiKV 做了很好的例子：[https://www.pingcap.com/blog/why-choose-rust-to-develop-tikv/](https://www.pingcap.com/blog/why-choose-rust-to-develop-tikv/)

#### [5 Best Node.js Logging Libraries](https://www.highlight.io/blog/nodejs-logging-libraries)

文章介绍了 NodeJS 生态 5 个知名的 logger 库。

个人看法 logger 后面的趋势是与 可观测性应用的结合。

#### [Why we need CSS Speech](https://tink.uk/why-we-need-css-speech/)

> CSS Speech is a set of CSS properties intended to let authors design the aural presentation of content

无障碍场景下，页面只能做到单纯文本播放，CSS Speech 提案能增强这方面的能力。

#### [WebKit Features in Safari 16.1](https://webkit.org/blog/13399/webkit-features-in-safari-16-1/)

Safari 16.1 新特性：Container Queries, Subgrid, Web Inspector Extensions, Flexbox Inspector, Offset Path, Overscroll Behavior, Shared Workers, Shadow Realms, `resolution` media query, `:has(:target)`, `text-align-last`, `animation-composition`, discrete animation, accessibility improvements for `display: contents`, improved VoiceOver performance, additional Apple Pay support, new Web Extension APIs, Manifest version 3 support, and much more. Safari 16.1 brings all of these features to iPadOS 16 and macOS Ventura.

#### [CSS Animated Grid Layouts](https://web.dev/css-animated-grid-layouts/)

Css grid 排版动画介绍。

#### [WebRTC Signaling Servers: Everything You Need to Know](https://antmedia.io/webrtc-signaling-servers-everything-you-need-to-know/)

一篇介绍 webrtc 信令服务器的通信机制文章，可忽视后面的广告。

#### [棱镜通讯 No.87 Robert Metcalfe](https://wangyurui.com/posts/leng-jing-tong-xun-no-87-robert-metcalfe-cc15ac84)

棱镜人物系列 - 罗伯特·梅特卡夫（Robert Metcalfe）

文章摘抄：

> 信息资源的奇特性不仅在于可以被无损耗的消费，如一部古书从古至今都在“被消费”，但不可能“被消费掉”，而且信息的消费过程很可能同时就是信息的生产过程，它所包含的知识或感受在消费者那里催生出更多的知识或感受，消费它的人越多，它所包含的资源总量就越大。
>
> 互联网的威力不仅在于它能使信息的消费者数量增加到最大限度（全人类），更在于它是一种传播与反馈同时进行的交互性媒介（这是它与报纸、收音机和电视机最不一样的地方）。
>
> 所以梅特卡夫断定，随着上网人数的增长，网上资源将呈几何级数增长。

#### [Easter eggs in Go source code](https://dev.to/ymotongpoo/easter-eggs-in-go-source-code-2l02)

一篇有趣的文章，介绍 time.minWall 为什么设置成了 1885 的原因。

#### [Chromium 渲染流水线——字节码到像素的一生](https://zhuanlan.zhihu.com/p/574069391)

一篇介绍 浏览器渲染引擎 的文章，类似于 `Life of a Pixel` 学习笔记。

#### [Why We're Breaking Up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b)

EMotion 作者批判 CSS In JS 的文章。文章举了一些 较 solid 的点，如：css-in-js 增加 runtime 开销（compile time 可优化）、增加 包体积、影响 render 性能等。

我个人是不喜欢这种风格的，之前也在很多项目中深度使用过。

糟糕的感受有两点：

1. 避免不了写 css，使用组件时 如想自定义，则需要写 css 了，这样一来就会十分割裂。
2. 缺失了 css 相关的插件能力，很多 css 插件都失效了。

#### [Newsletter 的平台化之路 -#20](https://geekplux.com/newsletters/20)

一篇介绍 newsletter 的好文。

作者深度探讨了 创造者、消费者、平台之间的三者关系，平台赋予的能力，与作者在平台的难度。

而 Newsletter 正是典型去平台化的产物，古典互联网的代表。

什么时候需要平台化呢？

往往是双端之间联系不会紧密的场景，需要平台来背书，来控制正常运作。

内容创作算是这种场景吗？显然不完全算。

#### [ZIG, THE SMALL LANGUAGE](https://zserge.com/posts/zig-the-small-language/)

一篇介绍 zig 特性与应用场景的文章。

延伸阅读：[https://ziglearn.org/](https://ziglearn.org/)

#### [中国VC流派的前浪、后浪和破浪](https://mp.weixin.qq.com/s/lOiLmIJNku3YtKMVhLaiDQ)

一篇介绍国内 VC 史的好文。

作者梳理了 国内 VC 的发展史 与 现在市场上的 各种流派，整体非常有味道。

#### [modern-guide-to-packaging-js-library](https://github.com/frehner/modern-guide-to-packaging-js-library)

打包 JS 库 的 最佳实践梳理。

#### [Programming Portals](https://maggieappleton.com/programming-portals)

一篇探讨 gui 与 cli 之间的历史，结合发展的文章。

什么场景下适合 gui、什么场景下 又适合 cli、什么场景下适合 gui with programming portal，这些都需要根据场景来中取舍。

#### [0x00C - eBPF 🐝](https://unzip.dev/0x00c-ebpf/)

一篇介绍 eBPF 的文章。

eBPF 适用场景：

* Observability, profiling, and tracing - _monitor_ _OS_ _events._
* Security tools.
* Networking tools - _fast packet processing._
  * _Create new custom network parsers?_
* Debugging tools.

#### [Open a project in VS Code in a flash 📂⚡](https://www.roboleary.net/tools/2022/07/18/open-a-project-in-vscode-in-a-flash.html)

如何快速在 vscode 快速打开项目，作者给出了一些解决方案。

#### [Visual Studio Code is designed to fracture](https://ghuntley.com/fracture/)

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143638727.\(null\))

文章介绍了，微软利用 VSCode 围绕开发者建立的帝国 以及 作者对其的抨击。

一句话概括：微软利用自身优势在破坏生态。

#### [NFTs, explained by a software developer](https://itnext.io/nfts-explained-by-a-software-developer-6f0c13c52dfc)

> An NFT is a transaction recorded on a blockchain that attests the ownership of a unique object, linked via metadata to some assets, usually images or video.

一句话概括：NFT 是某些信息的标识，该标识 认可机制是智能合约。

文章简单介绍了如何创建自己的 NFT。

#### [Don't specialize, hybridize](https://stephanango.com/hybridize)

一篇阐述发展方向的文章。

作者建议应成为 T 型 或者 U 型人才，两个领域融合，能够碰撞出来的想法会很多。

#### [Fallacies of Distributed Systems](https://architecturenotes.co/fallacies-of-distributed-systems/)

> Fallacies of distributed systems are a set of assertions made by L Peter Deutsch and others at Sun Microsystems describing false assumptions that programmers new to distributed applications invariably make.

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143639328.\(null\))

文章介绍了分布式系统的 7 个谬论。

#### [Redis Explained - An in-depth tutorial](https://architecturenotes.co/redis/)

> A deep technical dive into all things Redis. Covering various Redis topologies, data persistence and process forking.

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143640334.\(null\))

文章介绍了 Redis 相关的各种概念，整体简单易懂，非常值得一看。

其中 Redis 集群章节，机器之间通过 `gossiping` 来确保集群健康，听起来很印象。

#### [12 Factor App Revisited](https://architecturenotes.co/12-factor-app-revisited/)

> The Twelve-Factor App methodology is a methodology for building software-as-a-service applications by Adam Wiggins. We cover how they have since evolved, and what we can learn from them today and how they changed the status quo of yesteryear.

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143641038.\(null\))

建立应用的 12 个关键因素，从工程化 到架构设计再到上线部署，感兴趣的同学可以刷下。

#### [Things You Should Know About Databases](https://architecturenotes.co/things-you-should-know-about-databases/)

> This is the first post in a series called Things You Should Know. Think of it as a primer to set you from base principles on various topics. For example, today, we are discussing databases!

![img](https://bytedance.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2JhZjQ2MGY5NjYxZjdhM2QwODJiZDJiOGNlODdkMTRfMzdXSGFwUE5XVTVLVHRDNk5xS0NRVU1pczdjMGJDV3VfVG9rZW46Ym94Y24yM2E0VGNUcFc0Zk1FWFZnaDNvdjFmXzE2NjgzMjEzODg6MTY2ODMyNDk4OF9WNA)

一篇介绍 数据库 索引 与 事务的好文，整体脉络清楚，深入检出，值得一看。

### 项目

#### [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture)

一种 swift 版的 redux 状态管理库。

针对终端应用，状态管理的思想 确实是通用的。

目前，业界状态管理的流派基本分为三种：单向数据流 、代理响应式 与原子状态。

这三种各有各的优劣势，我个人偏好代理响应式，如 valtio、mobx

#### [tigerbeetle](https://github.com/tigerbeetledb/tigerbeetle)

一个由 Zig 编写的分布式金融领域的高性能数据库。 作者的文章介绍了，该数据库通过使用静态分配内存（zig 语言的特性）达成的高性能优势。

[https://tigerbeetle.com/blog/a-database-without-dynamic-memory/](https://tigerbeetle.com/blog/a-database-without-dynamic-memory/)

#### [Typefully](https://typefully.com/)

一款 有助于更好在 twitter 发文的应用，该应用非常受市场欢迎..

有需求的地方就会有市场。当你发现市场空白时，很有可能之前已经被很多人尝试无数遍了，却都最终失败了。

#### [Chisel Now](https://chiselstrike.com/now)

只需定义一个 Model，即可获得一个可 CRUD 持久化的数据源， 创意让人眼前一亮。

事实证明，code deriven 真的会提升开发者的体验。

#### [Documatic](https://www.documatic.com/)

> Documatic is a search engine for your codebase; Ask documatic a question and find relevant code snippets and insights in seconds.

一个 Program language processing 方面的产品，目前来看算是一个全新的赛道？

#### [blueboat](https://blueboat.io/)

> All-in-one serverless JavaScript runtime

serverless 的最大痛点，就是 cold start 时间，v8 worker 从很大程度上缓解了这些问题。

#### [Knip](https://github.com/webpro/knip)

> Find unused files, dependencies and exports in your JS/TS project

编译期 tree-shaking 方案\~

#### [Lightning CSS](https://lightningcss.dev/)

> An extremely fast CSS parser, transformer, bundler, and minifier written in Rust.

#### [boxed](http://swan-io.github.io/boxed)

> Boxed provides functional utility types and functions, while focusing on ease-of-use.

Sum type 的魅力。

#### [tweets](https://github.com/diracdeltas/tweets)

如何将 github 在模拟 twitter ，该项目给出了答案。

#### NoCode 相关

最近关注了一位十分高产的小姐姐 [https://github.com/alyssaxuu](https://github.com/alyssaxuu)

no-code 方向有很深的造诣，分享几个高质量的库：

* [GitHub - alyssaxuu/flowy: The minimal javascript library to create flowcharts ✨](https://github.com/alyssaxuu/flowy)

一个单体 40kb 的 JS 文件，实现了一个流程图引擎。

* [https://github.com/alyssaxuu/screenity](https://github.com/alyssaxuu/screenity)

一个屏幕录制、标注 Chrome 插件，也是没有用任何框架。

* [https://github.com/alyssaxuu/motionity/](https://github.com/alyssaxuu/motionity/)

一个图像编辑器，也是仅使用 web 的基础技术。

### 言论

#### 梅特卡夫定律

一个网络的价值等于该网络内的节点数的平方，而且该网络的价值与联网的用户数的平方成正比。该定律指出，一个网络的用户数目越多，那么整个网络和该网络内的每台计算机的价值也就越大。

#### 互联网的经济学是无限供给的经济学。

### 多媒体

#### [与 LemonHX 畅聊新一代编程语言 Zig](https://www.xiaoyuzhoufm.com/episode/6354d176a69ab164b125203b?s=eyJ1IjogIjYzNjBhYjc5ZWRjZTY3MTA0YWE2NTgzMSJ9)

> 本期嘉宾是张润哲（柠檬，LemonHX），另一位 Rust 的干饭人，零零后，后浪程序员。
>
> 今天的话题是 [Zig](https://ziglang.org/) ⚡，一门新时代的系统语言。不得不承认，C/C++ 的“替代者”隔三差五就能上 hacker news 榜首，Go/Rust/D/Carbon 等等不一而足，在这之中，Zig 是怎样一种存在？它的特点是什么？它是 Rust 的竞争对手嘛？

从播客中了解到，Zig 虽然目前还比较小众，但上升潜力很大，急需运营好一个健康的社区，与制定相关的发展规范。

#### [语言如何塑造我们的思维方式](https://www.bilibili.com/video/BV1SJ411x77q/?vd\_source=28321308a211180f11e1dcec72a05e25)

语言的本质是 空气的震动，语言 与 震动频率 就像是 编程语言 与 机器码的关系。

举个例子：两个人在交流，A 与 B。

A 说 你吃了么？该信息传输的形式是从 A 的 嘴发出，让周围的空气震动，传到 B 的耳朵。

B 会解析该震动频率，再翻译为想法。

视频重点介绍了语言对思维的影响，非常值得一看。

#### V8 冷知识

JSON.parse 创建对象的速度 大于 原生创建的速度..

![img](https://raw.githubusercontent.com/Tomotoes/image/master/img\(null\)-20221113143643374.\(null\))

### 生活

> 虽然是第一期周刊，而这 part 确实在第二周写的，第一周实在很忙，抽不出时间。

本周生活中最大的事情就是 重启 思考的价值了。

思考的价值停更可见：[https://thinking.tomotoes.com/archives/2022/5-10](https://thinking.tomotoes.com/archives/2022/5-10)

另外 周四过了个生日，我都忘记了，Leann 居然还记得，还给我准备了惊喜，非常开心\~

希望我的生日愿望能够早日实现！
