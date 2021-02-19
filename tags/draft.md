---
description: 草稿整理区
---

# Draft

1. 惊艳系列文章分享：

   用「增量」思想提升代码检查和打包构建的效率   
   [https://musicfe.dev/delta-mind/](https://musicfe.dev/delta-mind/)   
   具体原理是使用 git diff 找到需要构建的资源。 文章很久之前读过，当时留下来挺深的印象，惊讶系列的知识实在太难遇到了..

2. 学到一个名词：语法噪音  syntactic noise is syntax within a programming language that makes the programming language more difficult to read and understand for humans. 你有想到哪些语法噪音呢。
3. ![image-20210219225312812](../.gitbook/assets/image-20210219225312812.png)

   设计 内部 DSL ，在我看来就是设计面向开发者的 UI。

   C\# 的 linQ 无疑是实用性与优美性兼得的DSL。

4. 好文分享：

   前端 DSL 实践指南（上）—— 内部 DSL   
   [https://musicfe.dev/dsl/](https://musicfe.dev/dsl/)

   经典老文，建议阅读~

5. 好文分享：

   前端响应式编程与实时计算：从 RxJS 到 Flink   
   [https://mp.weixin.qq.com/s/m5kBSTYg95qHHOaZn1NV0g](https://mp.weixin.qq.com/s/m5kBSTYg95qHHOaZn1NV0g)

   好文很难遇到，且行且珍惜。  
   RxJS 的事件组合机制, 太利于对View 驱动抽象了，惊讶。   
   refresh$ = merge\(clickRefresh$, autoRefresh$, pullRefresh$\)\);

6. 故事分享：

   A short history of ReScript \(BuckleScript\)   
   [https://discuss.ocaml.org/t/a-short-history-of-rescript-bucklescript/7222](https://discuss.ocaml.org/t/a-short-history-of-rescript-bucklescript/7222)

   一个Ocaml狂热爱好者与他的一个想法 到 实践 推出 ReScript 的故事。  
   作者开发了 一个比编译器还复杂的解释器，找到了作者的知乎账号： [https://www.zhihu.com/people/hongbo\_zhang](https://www.zhihu.com/people/hongbo_zhang)

   A: 原来是国人..

   B: 张宏波大神

   A: 之前只是听说过 ocaml，原来这么强大的一门语言。

7. 快餐文分享:

   Web前端剪切板文本分享到文件发送   
   [https://mp.weixin.qq.com/s/TrrxxeGdPsF5wVoGMcuw4w](https://mp.weixin.qq.com/s/TrrxxeGdPsF5wVoGMcuw4w)

   目前 Web 还不支持复制多个文件,文件夹,Gif 动图...   
   里面涉及了 之前我们讨论过的 复制图片的点.

8. 分享篇文章:   
   Build a Regex Engine in Less than 40 Lines of Code   
   [https://nickdrane.com/build-your-own-regex/](https://nickdrane.com/build-your-own-regex/)

   40 行写一个简易的正则引擎~

   文章简单易懂, 推荐阅读.

   [https://github.com/nadrane/build-your-own-regex/blob/master/solution.js](https://github.com/nadrane/build-your-own-regex/blob/master/solution.js)   
   这个正则引擎的实现 读起来有股淳朴的味道..

9. 想讨论下关于 React 状态管理的问题..

   随着项目的迭代, React 的项目慢慢 分成了 状态管理库\(Redux\)中的状态 与 组件内部的状态..

   感觉状态越来越混乱了..

   这应该是一个现代前端项目无法绕过的问题.. 全局中的状态 往往都是 很多组件需共用的状态, 组件内部一般都是 关于该组件的 UI 状态..

   这是我目前的划分, 有什么更好的实践嘛? 总觉得没有统一美..

   业界感觉除了 rxjs 也没有什么其他的实践, mobx 那一套 感觉只是加了成 proxy 的概念

   可以想想.. 感觉这块状态管理有痛点欸..

   想出来你就是下一个 Dan

10. A: 每天调UI库的API，调到不知道该怎么提升...

    B: 可以提升到 如何在繁琐的业务中提升自己的主题。

    加班只是为了自己的今天，提升自己是为了自己的明天，有多少人只有今天没有明天，当你加班缓过神来，一定要努力提升自己。

    具体来说，提升就是学习嘛~ 如何学习呢，这个话题就大了。

    我不想提什么广度，方向，学习资源这些横向的事，想讨论下竖向的事情。 其实这也是老生常谈的话题了，我分享下我的学习方法。

    每天读各种文章，不管是什么方向，什么领域，从这些信息中提取关键信息 反馈到自己的系统，增强与其他知识的联系。 关于如何读书，又是一个很大的话题了。

    我一般都是先简单过一遍，没有兴奋的点就pass，如果有就精度几遍，读的时候一定要思考，提问。 就比如一个应用层的框架，一定要思考到操作系统层面。 呃，以上观点 主观性极强，你可以做个参考..

    A: 我感觉还是主观能动性

    B: 哦，你说这点嘛，我理解。

    A: 我有时候读着读着就发现我需要a知识点，然后读a知识点又发现b知识点不知道，然后去读b...

    B: 哇，我超喜欢这个过程..大把的知识~

    B: 我只是知识的搬运工，自己创造不了新的知识理论.. 太菜了

11. [https://shimo.im/sheets/wV3VVxGO5EsGXX3y/MODOC/](https://shimo.im/sheets/wV3VVxGO5EsGXX3y/MODOC/) 《个人七天沉淀计划模板》

    七天沉淀计划，还有同学要参加吗？ 我具体讲一下：

    ![image-20210219225922240](../.gitbook/assets/image-20210219225922240.png)

    意义我再补充下，关于上面的群体性，大家可能理解的不是很全面，具体指的是，当你进入到一个群体时，你的上进心 就会被潜意识地挖掘。

    每天都是由事情所驱动，不会有所懈怠，尽可能的不浪费时间。

    想参加的同学可以试一下，不需要 7 天全部，也可以单独两三天这样。

12. ![image-20210219225937100](../.gitbook/assets/image-20210219225937100.png)

    对齐工程师可还行

13. [https://www.remotion.dev/](https://www.remotion.dev/)   
    使用 React 创造 视频...

    GUI 表达语法 的扩展程度超出我的想象。

    关于刚刚分享工具详细介绍：   
    A soft introduction to Remotion   
    [https://www.youtube.com/watch?v=szh2Qgo9SVE&ab\_channel=uidotdev](https://www.youtube.com/watch?v=szh2Qgo9SVE&ab_channel=uidotdev)

    This new tool merges the video creation process with software development concepts like source code control. You don’t create videos, you program them.

14. A: 列举一下 目前我了解到的 React render domain：Web、App、PDF、CommandLine、Sketch、Video、PC native software，几乎所有可想象到的终端~

    现在看来 ，React 的架构设计（core 与 render 的分层）真包含着大智慧。

    B: 确实 还有渲染到游戏机液晶屏的 将 React 渲染到嵌入式液晶屏 - doodlewind的文章 - 知乎 [https://zhuanlan.zhihu.com/p/89574235](https://zhuanlan.zhihu.com/p/89574235)

    A: hah 我看过这篇文章，关注作者很久了，是位白学家大佬￼ 他之前写过一篇实现v8引擎￼

    B: 受益匪浅￼

15. A: 为什么python在科学计算这么火呢？是因为研究者喜欢吗？我一直搞不清..

    B: 因为大部分库都是写给py的吧

    C: 动态类型，运算符重载，调c方便

    A: 好吧~\_~ 运算符重载 是挺酷的，但是对工程化的提升不大.. 好吧，灵活性与工程化本来就很难兼得

16. 好文分享:  分布式一致性与共识算法  [https://mp.weixin.qq.com/s/iPynSikOAihYMIcCERtrgg](https://mp.weixin.qq.com/s/iPynSikOAihYMIcCERtrgg)
17. 正在找工作的前端同学可以看看，面试题都很典型。  2021 千字大厂面经 & 个人成长经验分享  [https://juejin.cn/post/6922290178836922381](https://juejin.cn/post/6922290178836922381)
18. 实用函数式编程技巧： Combinator Pattern  [https://juejin.cn/post/6919302763306287117](https://juejin.cn/post/6919302763306287117) 好文分享。 好文不易，受教了。  尤其是讲 rxjs 与 函数组合概念章节 很赞，文中的 demo 将 generator 与 fp tools 结合 给了我另一个视角去思考迭代器。非常建议阅读。
19. 【译】主板芯片组和内存映射  [https://juejin.cn/post/6927099189872721928](https://juejin.cn/post/6927099189872721928)  文章分享，干货不少，示例图有些歧义，现在北桥一般都集成进cpu了。
20. 程序调用 dll 的本质是什么？   
    [https://www.v2ex.com/t/752972](https://www.v2ex.com/t/752972)

    帖子中 有人说 dll 的主要作用有 2 个，一个是代码复用，另外一个是节省内存。 我再补充下，还有混淆加密关键文件的作用。

21. 文章分享：   
    一名近六年工作经验的程序员通过日常开发，沟通，排查和解决问题，来提升开发效率的经验   
    [https://lichuanyang.top/posts/3423/](https://lichuanyang.top/posts/3423/)

    虽然文章不长，但是我觉得在工作中确实会被一些除技术外的事情影响进度，如何提高效率很重要

22. vs stories 插件作者 ben今天推出了 最近研发的vscode clubhouse 插件~ 执行力max..

    [https://youtu.be/hy-EhJ\_tTQo](https://youtu.be/hy-EhJ_tTQo)

    I built an audio social network that's going to be the next billion dollar unicorn. [https://dogehouse.tv](https://dogehouse.tv) [https://github.com/benawad/dogehouse](https://github.com/benawad/dogehouse)

23. hah 它终于来了。

    reactend/reactend-express   
    [https://github.com/reactend/reactend-express](https://github.com/reactend/reactend-express)

    React renderer to build Node.js server 感觉也就是一个玩具，使用 JSX 表达，让我想起了 使用 xml 配置 tomcat .. 实用价值几乎为0..

24. B: 可以衍生谈一谈这点：

    JSX 最初是用来描述 GUI 的，最大的特点是 可以在 GUI 内部包含逻辑，包含状态。

    而编程其实就是在写 UI，这里的 UI 是一个更高层次的，指的不仅是 Web，Command，还有面向开发者的 UI。

    在设计接口，设计API时，从另一个角度来看，我们本质上是在写UI。

    并且 声明式编程范式，也是一种很好的体现。

    JSX 代表的是一种表达方式，一种可以很好切合 声明式范式 需求的语义方案。

    关于声明式编程 其实可以多谈一谈。

    如果用一句话概况声明式编程的话，它最大的特点是: 它的所有语义表达, 只是在声明要做什么，具体怎么做，剩下的它不需要关心，只需要交给编译器。

    函数式编程其实就是声明式编程的一种体现。

    一些业界典型实践有，sql ，graphql，jsx

    A: 与声明式对应的是啥来着 OO？

    B: 不不不，oo 其实算不上是语义范式，是命令式的建模

    我觉得没有对应的，只是思考的层次不同吧。

    C: 声明式对应命令式吧 比如gui开发，声明式比如HTML，命令式比如qt

    B: 命令式 感觉和 声明式的思想一样的，只不过是被声明的对象不同。

    声明式的出发点是开发者，命令式的出发点是 编译器，操作系统，运行时。 照这么说，感觉所有语义范式 应该都是声明式的，只不过是声明粒度不同而已。

    而 oop 与 fp，算不上语义范式，是编程范式。

    oop 对应建模，状态传递，fp 对应 状态映射，其实 oop 与 fp 之间的关系很近的。

    A: 嗯，实际写代码的时候我基本都不 care 声明式还是命令式啥的范式。。按直觉去写了   
    B: hah 我除了遵循 fp 的编程规范外，做到最多的事 就是隔离状态。

25. A: 之前我看 Go web frame 源码时，经常看到使用前缀tree做路由匹配 其实是字典树，也叫字母树的一种应用。

    B: trie树 leetcode上刷到过￼

26. 哇 发现一个老古董~   
    GnoConsortium/gno   
    [https://github.com/GnoConsortium/gno](https://github.com/GnoConsortium/gno)   
    ![image-20210219230945388](../.gitbook/assets/image-20210219230945388.png)

    24 年前... 都比我大了。

27. Q: 给你一个 fetch 函数，fetch =&gt; Promise&lt;Data&gt;. 请你实现 请求 8 秒无结果后，超时报错的机制。

    A: ablortController￼ 加上promise.race￼   
    Q: 回答上了 promise.race 就成功了。

28. 分享篇多年前看过的好文，出自黄峰达老师之手：

    演进：如何用练习快速提升技术

    [https://mp.weixin.qq.com/s?\_\_biz=MjM5Mjg4NDMwMA==&mid=2652975915&idx=1&sn=1d0c3bb0937e3d9cf1f74b1257c7aacc&chksm=bd4ae0088a3d691e44cfaf0a3baae2cbd9b3611996663e4c00df5bbe79974b6ed005857995f4](https://mp.weixin.qq.com/s?__biz=MjM5Mjg4NDMwMA==&mid=2652975915&idx=1&sn=1d0c3bb0937e3d9cf1f74b1257c7aacc&chksm=bd4ae0088a3d691e44cfaf0a3baae2cbd9b3611996663e4c00df5bbe79974b6ed005857995f4)

    对最开始刚学计算机的我，产生了很大的影响，还记得看完后 我练了一周的指法...   
    当时看完真是 收益匪浅，现在看了一遍 没多少感觉了..

29. 分享篇 科普文章：

    原子的故事   
    [https://oldj.net/article/2020/09/20/story-of-the-atom/](https://oldj.net/article/2020/09/20/story-of-the-atom/)

30. 分享篇文章：

    编程语言社会学   
    [https://yuheng.io/articles/proglang-sociology](https://yuheng.io/articles/proglang-sociology)

    作者的一个观点我很赞同：编程语言的语法就是开发者的用户界面。很大程度上，编程语言的风格决定了开发人员的思维风格，编程语言的局限也会成为开发人员的思维局限。

31. mutex 是 mutual exclusion 的简写，翻译一下：互相排斥。
32. 人每天只有八个小时工作时间，谁都一样。其中能高效工作的时间绝对不超过4个小时。 这些工程师编写的代码行数绝对不算多，但从事的项目影响大。 比如 Pike，大部分时间花在了审查其他成员的 Go 代码上。而一个刚入行的 Golang 工程师，每天的任务就是写作 Go 的标准库，今天写 http 明天写 sort，写的比 Pike 多很多。 考核时，高级工程师因为带领着高效团队，每季度 OKRs 上都有诸多亮点；而刚入行的工程师，只能报告一些比较琐碎的成就。 这个观察近乎于常识，然而对于当时的我来说是一个顿悟：做出 MapReduce 框架的和写琐碎 MapReduce 程序的工程师之间的差距并不是他们的工具和编程效率，也往往不是教育背景或者经验，而是他们各自的杠杆：所带领的团队。

    问题是，没有人会给你这个杠杆。

    摘抄自 4G Spaces - 技术管理猪鸡-1 开篇   
    [https://blog.youxu.info/2015/05/17/tech-lead-1/](https://blog.youxu.info/2015/05/17/tech-lead-1/)

33. ![image-20210219231203219](../.gitbook/assets/image-20210219231203219.png)

    自由过了火~

34. Learn fp visually

    [https://david-peter.de/cube-composer/](https://david-peter.de/cube-composer/)

    一个 立方体映射的游戏，玩到 3.1 就玩不动了..

35. 刚刚学到两个快捷键，在 Chrome 下键入：

    1. Command + up arrow：页面滚动至顶部
    2. Command + down arrow: 页面滚动至底部 平时都是用 vimium 的 G 与 gg...

    并且在 Finder 中键入：

    1. Command + up arrow：返回上一目录
    2. Command + down arrow: 返回刚刚的目录 这些快捷键 与 鼠标手势，剪切板手势结合 简直完美~

36. 如何监听 React 应用的性能：
    1. 使用 React 官方提供的 Development tool plugin 中的 Profiler panel，控制台可见
    2. 与上面类似，使用 React 提供的 Profiler 组件，在 onRender props 中可以拿到渲染的信息。
    3. 使用 Chrome Dev Tools 的 performance tab，使用之前需要禁用 React Development tool 插件，不然会影响性能，记录之后 在 timing 中有查阅。
    4. 使用 performance api 拿到信息，不过经常用于埋点。
37. React 组件测试的两种场景：

    1. 组件 snapshot 测试，常见的工具有 jest

    > 将组件渲染出来的元素截取 与预期元素做判断，可以看做一种断言测试。

        2. e2e 测试（end to end），一般使用 headless browser 作为测试工具，常见的工具有 cypress

    > 在“真实”环境下，模拟用户运行应用测试。

    测试的类别：单元测试，集成测试，冒烟测试 等...

    随便提下：AB 测试与灰度发布 其实是一种概念，AB 测试可以看做带有埋点系统的灰度发布。   
    之所以这么划分，在我看来 是因为出发点的不同。  
    AB测试 是从产品，数据角度。 灰度发布 是从运维，开发角度。

38. A: 可以讨论下 测试驱动开发。业界俗称 TDD

    测试驱动开发 我觉得最关键的是 分场景。 需要质量保障，可以按模块分期迭代的场景比较适合。

    因为我从来没写过测试，所以对它的解决的痛点不是很了解。

    B: 先编写测试 测试飘红写业务代码，然后绿了在重构，红绿红绿

    A: 原来这就是 测试驱动开发，还能被绿，开心。

    感觉最好的测试 就是防御性编程了。

    我指的是，开发时遵守规范，如果当复杂性很难控制 或者 数据流模糊不清，就是测试失败了。

    我感觉很多时候，先写测试用例，大概率会重写，因为有的点 只有开发时才会意识到...

    还是看测试粒度吧..   
    B: 我觉得tdd是个好的锻炼思维逻辑还有对后期代码维护调试的方法

    传统的tdd应该就是先写测试，不写业务代码，全权由测试引出需要抽象的那些，看过一些大佬码代码的过程 是啊，正常写代码也是迭代的过程吧，那些点就是重构的阶段了也符合tdd   
    A： 哦，看起来 测试驱动 应该是强调 思维重心，先由 测试引出设计，这个听起来挺厉害的...   
    B: 是啊，而且先写测试也能强迫你出松散耦合的设计￼ 而且测试可以当做文档使用

    A: 了解，测试当文档使用，指的是测试的伪代码吗？还是说 测试有一套 dsl 可以描述信息？ 感觉 tdd 并不适合UI开发。   
    B: 一个测试对应一个功能，一个测试对应一个类 加上测试方法命名规范，基本上就知道这个测试 A: 我刚刚想了下，感觉 tdd 的适用性 与 前端（这里泛指GUI）与后端开发模式的不同存在很大关系。  
    今天早上看了一篇文章，写的很有道理，关于GUI 开发复杂性。

    The complexity that lives in the GUI   
    [https://blog.royalsloth.eu/posts/the-complexity-that-lives-in-the-gui/](https://blog.royalsloth.eu/posts/the-complexity-that-lives-in-the-gui/)   
    文章把主要的痛点 都归结于组件之间的状态管理。 正因为组件（模块，单元，类 一种概念）之间的状态 划分不清，开始设计时 很难把所有的 UI 状态，数据状态都想到位。

39. 分享两篇关于介绍 React-Native 比较简明的文章：
    1. React Native架构一览 [http://www.ayqy.net/blog/react-native-architecture-overview/](http://www.ayqy.net/blog/react-native-architecture-overview/)
    2. React Native架构演进 [http://www.ayqy.net/blog/react-native-new-architecture/](http://www.ayqy.net/blog/react-native-new-architecture/)
40. 分享个好玩的项目：

    GTAmodding/re3   
    [https://github.com/GTAmodding/re3](https://github.com/GTAmodding/re3)

    GTA3 罪恶都市源代码 全局搜了下 nuttertools 居然啥也没找到，这不是真的罪恶都市￼

41. 想讲讲 客户端缓存，也就是只有静态页面，没有服务端的应用 该怎么利用好缓存，让页面加载更快。   
    我在这方面有一些实践，因为我的网站是一直是托管在 github page 和使用 jsdriver cdn 这样的，除了域名 没有买过服务器，所以网络请求的优化也无法涉及，只能从客户端性能这边入手。   
    但是 只讲下 页面缓存，其他优化的点 暂时不涉及。   
    我最开始使用的页面缓存 很蠢，我把关键 css，js 的内容保存到 localStorage 中，然后页面 onload 时，判断是否命中，命中的话读取，反之拉取数据。  
    这是真的，我大二的实践，当时还写了一个简单的版本管理...   
    唯一的性能就是 从磁盘与从网络 读取的速度不同了，但是由于 localStorage 最大 5 mb ，没办法继续。  
    然后我开始想办法 在用户进入我的首页时，就把其他页面的资源加载好，就比如我其中一个实践是：

    在用户进入 tomotoes.com 时，会加载一个display:none 的 blog 页面的 iframe，然后用户大概率会进入到博客，此时 博客的所有资源都是从 内存中加载的，超快。   
    但是很明显，牺牲了首页的性能换来了其他页面的性能提升。   
    然后，我就开始钻研起了 pwa-service-worker 的 缓存机制￼   
    A: 这种像是prefetch啊   
    是的，不过我的优先级很高，hh~ 关于全站上 sw 这事我做了一周多，因为我的网站分为多个子站点，而每个站点的技术栈不同，打包的机制不同，想把所有站点全上 sw 缓存 就必须把所有打包机制全统一化，就比如 主页使用 gulp，博客使用 hexo，关于页 webpack 等等。   
    其实 sw 缓存还有代理的功能~ 配置项很多，玩法就很多

42. ![image-20210219231816728](../.gitbook/assets/image-20210219231816728.png)

    注意，module 文件 A 中 import 的其他文件（B，C） 加载机制是不同的。

    1. A 与 BC 是串行加载，只有 fetch A 之后 才能加载 B C
    2. B 与 C 是可以并行加载

    如果是手动加载 script，默认是 async 的方式   
    [https://javascript.info/script-async-defer](https://javascript.info/script-async-defer)

43. Windows 10X 上手体验   
    [https://sspai.com/post/64991](https://sspai.com/post/64991)

    好家伙，Windows 又新增了一种设计系统.. 之前的 WinXP，Win7 拟物，Win10 Fluent Design 还不嫌乱嘛..

44. Kotlin基金会成立  [https://kotlinlang.org/docs/kotlin-foundation.html](https://kotlinlang.org/docs/kotlin-foundation.html)  这两天 Kotlin, Rust 的基金会都成立了，好耶~
45. 分享一个数据结构的基础知识：
    1. 树是图的联通无环类型
    2. 链表是树的非叶节点只有一个子节点类型
46. 提个观点，平衡二叉树（AVL）树 是二分搜索在存储结构设计上的体现。

    A: 在学红黑树，突然联想到的一个概念..   
    B: 我之前面试的时候，让我手撕红黑树   
    A: 之前X给我讲过 java hashmap 的底层设计。 hashmap 不可避免的问题是 hash 冲突，解决 hash 冲突的两种办法：开放寻址，链式解决。   
    java hashmap 的设计是当相同地址，冲突的元素小于等于 8 时，是链表挂载；当大于 8 时会变成一根红黑树（当然概率很小）。   
    所以说 hashmap 存取 都为 O\(1\) ，在 java 的 hashmap 某些场景中（冲突数大于 8）是不成立的。   
    当然 O\(1\) 本身就是个伪命题，感兴趣可以延伸讨论下 之前我的观点（聊天记录搜索 大 O符号表示法）   
    C: 解决哈希冲突还可以在哈希￼   
    推荐一个红黑树操作的可视化演示网址

    [https://www.cs.usfca.edu/~galles/visualization/RedBlack.html](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)

47. 文章分享：   
    如何基于心智模型打造更棒的用户体验   
    [https://mp.weixin.qq.com/s/6-M3iyHQYHxYUNNWoUAx\_Q](https://mp.weixin.qq.com/s/6-M3iyHQYHxYUNNWoUAx_Q)

    摘要：用户体验设计存在的一个主要原因，就是为了迎合人们的心智模型，从而帮助他们以尽可能最佳的体验去完成任务。

    那么关键的问题来了，如何将心智模型应用于 UI-UX 设计中呢？我们又要如何利用用户体验中的这种心理因素来构建更人性化的产品呢？

48. 分享个很全面的 Vim Cheatsheet：[https://devhints.io/vim](https://devhints.io/vim)
49. 安利下 三款命令行应用：

    1. exa - ls 的替代品，更强大 配置项众多 [https://github.com/ogham/exa](https://github.com/ogham/exa)
    2. cheat - man 的替代品，所有文档由社区维护，也可自定义 [https://github.com/cheat/cheat](https://github.com/cheat/cheat)
    3. broot - file browser 在 Windows 上用了挺久了，非常强大。 [https://github.com/Canop/broot](https://github.com/Canop/broot)

    一些其他的 autojump fzf ni bat git-extra gacp silver-searcher ...

50. 分享个项目：

    50projects50days   
    [https://github.com/bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days)

    使用 CSS HTML JS 构建的 50 个小项目，代码质量可以、项目也都很不错，可以作为练手项目。 比如使用 React Hooks + TS 重写一些例子。 下面是我重写 ToDo App 的一个例子： [https://github.com/Tomotoes/50projects50days-react/blob/master/src/todo-list/index.tsx](https://github.com/Tomotoes/50projects50days-react/blob/master/src/todo-list/index.tsx)

51. ![image-20210219232415472](../.gitbook/assets/image-20210219232415472.png)

    这买了血赚，才 20k

52. 分享篇文章\(官方faq\)：

    Why is esbuild fast?   
    [https://esbuild.github.io/faq/](https://esbuild.github.io/faq/)   
    这篇文章 建议前端同学阅读，里面有涉及 JS 运行时的缺陷。

53. 分享个项目：

    apankrat/nullboard   
    [https://github.com/apankrat/nullboard](https://github.com/apankrat/nullboard)   
    Nullboard is a minimalist kanban board, focused on compactness and readability.

    53kb 的“单页面”看板应用，看了下源码 太强了..  
    该应用使用 jQuery 写的，假如是 React 的 会是什么形式呢？ 首先一定会分隔成多个组件，每个组件有多种状态...   
    这种 jQuery 一把梭 的方式看起来挺酷的.. 所以说 React 的组件化 与 状态驱动 思想 很利于工程化，在大中型项目中会感受到明显收益，而小型项目中引入（主要还是看场景）多少有点过渡设计的味道。   
    好吧，这句话没什么价值。 因为项目大小 与 工程化 没有一个很好的鉴定。

54. A: 感觉技术的发展有点像个圈子 新的东西也很容易找到以前的影子

    是啊，计算机领域多久没更新新的理论了，很多基础概念都是89十年代的那群大佬已经定下的了。   
    就比如 redux 提倡的全局唯一状态不可修改，纯函数，都是来自 fp 的基础理论。   
    今天我了解到了一个概念，编程范式会对GC有明显的影响。   
    我想说的重点不是这句话，而是 我觉得很多基础设施决定了上层的发展，同时也限制了新的创新。   
    举个例子，假如从一开始就不是冯诺依曼体系的计算机，而是细胞自动机或者其他体系，还会有并发原语，数据结构等这些概念的出现嘛。 

55. 今天还和一朋友讨论 css 的设计，不正交性，理论耦合过深。 我相信很多同学从一开始接触前端 都用过dreamweaver，它支持可视化搭建界面，就像 winform,android studio那样，为什么它没有继续流行起来？  我相信在以后\(现在 low code 平台已经成为了大厂绩效的风向标\)，一定会再出现的。



