---
description: Node & Deno（暂时没时间继续维护）
---

# Node Deno

1. Deno1.6 版本新功能：可将 TS 文件直接编译成 ELF 格式...

   这意味着 Deno 不满足于 只做一个安全的 JS、TS 运行时了...

   可能有同学不太明白这个功能意味着什么，它代表的不只是便捷性，更多的是 Deno 可以让开发者无缝融入 可执行应用的生态中...

   [https://github.com/denoland/deno/issues/986](https://github.com/denoland/deno/issues/986)

   这件事挺可怕的.. 我要去学 Deno 了, 趁 Deno 生态还没起来, 赶紧造几个轮子 蹭蹭~

2. Deno = V8\(JS 引擎\) + Rust\(标准库\) + Tokio\(事件模型\)

   现在有大厂用 Deno 嘛? 感觉国内 还没有第一个吃螃蟹 的人.. Deno 国内的 没有布道者嘛.. 除了 JJC 偶尔发些文章.. 其他一点浪花也没有..

3. ![image-20201212212159747](../.gitbook/assets/image-20201212212159747.png)
4. [Node.js底层知识 - 理解Buffer](https://mp.weixin.qq.com/s/8e2xA4PxckzKpZZnyMbAuA)
5. Question: nodejs 中使用 es module 会编译成什么?

   A: require

   B: 没错 commonjs

   C: node不是可以直接跑esm了吗跑的时候还编译了一层？

   B: 直接跑 esm ? 这个是新版 nodejs 支持了嘛? 我不清楚..

   C: package.json 指定type为module

   B: 我去了解下..

   B: Nodejs 12 支持了 esm 实验特性, 只要 package.json 指定type为module, get

6. 分享篇文章:   
   手撸一个静态文档生成器\[译\]   
   [https://tomotoes.com/blog/build-static-site-generator-nodejs/](https://tomotoes.com/blog/build-static-site-generator-nodejs/)

   如果你还没个人网站的话, 可以参考这篇文章 构建一个简单的生成器.

7. 好文分享：

   Exploring Node.js Internals   
   [https://www.smashingmagazine.com/2020/04/nodejs-internals/](https://www.smashingmagazine.com/2020/04/nodejs-internals/)

   文章介绍了 Nodejs 的内部构造 以及 调用 系统 API 时 底层是如何运行的，并在最后指出了IO操作时，JS 并非是单线程的。

   摘要：we will dig deeper into the Node.js runtime, understanding how it runs JavaScript, seeing whether it actually is single-threaded, and, finally, better understanding the interconnection between its core dependencies, V8 and libuv.

   文中指的 运行在虚拟机的语言 ，可简单列举下：

   1. JVM \(java,scala,kotlin,groovy,Clojure...\)
   2. CLR \(C\#\)
   3. BEAM \(erlang, elixir\)

   我记得很久之前（大家在讨论 arguments 特性时） 我曾提过一点： 学习 JavaScript 最痛苦的地方就是，环境（Nodejs、浏览器）给你的 API，是无法直接查看源码的，它不像其他语言会有自建的 SDK，它的所有 API 都像是个带有规则的黑箱。 如果想查看源码，只能去翻看相应的 v8 构建。   
   其实有的语言，比如 Go，Java 也是对一些 built-in 函数、关键字 有所黑箱，因为有的东西 确实无法自举...   
   实现的层级 不同没办法的。   
   A: Python JS这些脚本语言算是跑在虚拟机上的吗

   JS 不是跑在虚拟机上的，它是一门解释编译语言，有对应的解释器与运行环境就可以了。 Python 也是如此的，是一门解释语言，不需要虚拟机。   
   虚拟机最大的好处 就是可以使用虚拟机上面已有的生态，开发语言时也无需考虑后端（指编程语言）的设计。   
   当然 跨平台 拿到现在就没什么亮点了。

