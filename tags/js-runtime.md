---
description: Node & Deno
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

