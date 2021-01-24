---
description: 计算机网络
---

# Network

1. Q: HTTP状态码204代表着什么？ A: HTTP 204 No Content 成功状态响应码，表示该请求已经成功了

   Q: 使用场景, 什么时候出现? A:

   1. 在 PUT 请求中进行资源更新，但是不需要改变当前展示给用户的页面，那么返回 204 No Content。如果创建了资源，则返回 201 Created 。如果应将页面更改为新更新的页面，则应改用 200 。
   2. 跨域的非简单请求中的预检请求返回成功的状态码 有时就是204

2. CDN工作原理及其在淘宝图片业务中的应用

   [https://www.tuicool.com/wx/faq2Uvm](https://www.tuicool.com/wx/faq2Uvm)

   没想到图片业务能如此复杂，需要动态生成，控制缓存..

3. 快餐文分享:

   The headers we don't want

   [https://www.fastly.com/blog/headers-we-dont-want](https://www.fastly.com/blog/headers-we-dont-want)

   本文不是 HTTP response header 的最佳实践, 而是介绍了 有哪些 field 实质上是没有必要的.

4. 快餐文分享:   
   Hardening Website Security – Part 1: HTTP Security Headers [https://int64software.com/blog/2018/11/05/hardening-website-security-part-1-http-security-headers/](https://int64software.com/blog/2018/11/05/hardening-website-security-part-1-http-security-headers/)

   文章讲了一些常见的 HTTP 安全头概念, 以及如何设置\(Nginx Apache PHP ASP IIS\)

   1. X-Frame-Options: 有关 iFrame 嵌入的限制选项
   2. X-XSS-Protection: XSS 安全设置
   3. X-Content-Type-Options: 浏览器嗅探文件选项
   4. Strict-Transport-Security: HTTPS 相关
   5. CSP, Content-Security-Policy: 前端必会, 面试也常问 不懂的同学可以去了解下了

5. 分享篇文章:

   被拆分的身份证

   [https://mp.weixin.qq.com/s/XohlUmqYEVXTyxjPsDm3pA](https://mp.weixin.qq.com/s/XohlUmqYEVXTyxjPsDm3pA) 一个网络包从节点A发到节点B，这个过程中 只有目标IP地址是不变的。

