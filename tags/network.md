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

6. 多线程下载大文件速度更快的原因，到底是什么？

   [https://mp.weixin.qq.com/s/7xQfO663MrnTHYDeFXUZSQ](https://mp.weixin.qq.com/s/7xQfO663MrnTHYDeFXUZSQ)

   多线程下载单个文件并不一定优于单线程下载单个文件。

   任何一台机器都有一个实时网络最大可用带宽。

   而机器实时抢占带宽是永远小于实时网络最大可用带宽\(TCP 重传机制\)。

   而之所以广义上，多线程下载优于单线程下载，就是因为单线程触发重传时 小于多线程平均重传的下载速率。

   假如机器使用的不是传统流量调度算法 而是BRP算法，那么多线程下载的优势 就体现不出来了。

   A: 百度网盘\[破涕为笑\]神一样的限速

   B: 哈哈哈，百度网盘： 别和我提多线程，brp 不好使

   C: 我刚在掘金看到一个百度云网盘多线程下载的 还没实验呢🌚

   Java实现大文件多线程下载，提速30倍！想学？我教你啊 [https://juejin.cn/post/6908867438624899079](https://juejin.cn/post/6908867438624899079)

   B: 这个可行，多线程下载 就适合单点限速。

7. 好文分享:

   为什么 TCP 会被 UDP 取代

   [https://mp.weixin.qq.com/s/BGWkvLl0AAx9slI1lSZMgw](https://mp.weixin.qq.com/s/BGWkvLl0AAx9slI1lSZMgw)

8. 优化 HTTPS 的一些策略：
   1. session 复用，将非对称加密的结果保存到 session 中，下一次连接直接复用
   2. TLS 1.3 ，一次 RTT 即可握手成功
   3. TCP fast open, 将 三次握手 优化成 二次 + 凭证 认证
   4. HSTS：强制使用 HTTPS 访问，减少一次 302
9. 分享篇文章：

   DNS的历史和原理   
   [https://yangwang.hk/?p=852](https://yangwang.hk/?p=852)

   摘要：在1973年，IETF（国际互联网工程任务组）发布了RFC 606，RFC 608等几个文档，决定由斯坦福研究院网络信息中心（NIC）作为hosts文件的官方来源，互联网上的所有主机均从该中心下载hosts文件使用。这套方案从1973到1983运作了差不多十年时间。相比于70年代，十年后的主机数量已经庞大得让这套系统得缺陷也被暴露出来：由于主机的增加，hosts文件像滚雪球一般变得越来越大。更糟糕的是主机名到IP地址的映射关系不是固定的，换人话说，那就是一台主机的IP地址可能随时间发生变化。主机数量越多，文件的变化率也就越大。以至于到后期每天都要从NIC重新下载最新的hosts文件。

10. HTTP2.0 的多路复用 与 浏览器网络连接限制 针对 Web 应用优化的建议：

    1. 如果服务端配置了 HTTP 2.0 ，那么建议域名收敛，可以最大程度上 多个请求复用同一个链接，可以消除重复连接带来的消耗。
    2. 如果服务端没有配置 HTTP2.0，并且请求数量很多，建议域名分散，最大程度上 不阻塞 请求统一域名下的资源。

    我总结的这个主题，有同学想讨论下吗。   
    域名收敛 与 域名分散 居然出现在了同一个场景。  
    好吧，其实我对浏览器限制同一域名最大请求限制数 这个规则挺好奇的。   
    其实这点与 tcp 拥塞避免 规则 可以联系到一起。  
     一句话概括：为了正义.  
    可以看下这个回答 浏览器允许的并发请求资源数是什么意思？ - bombless的回答 - 知乎 [https://www.zhihu.com/question/20474326/answer/15691654](https://www.zhihu.com/question/20474326/answer/15691654)

11. 很好奇 TLS1.3 改进了什么算法，一次 RTT 即可握手成功。TLS 详解握手流程 [https://juejin.cn/post/6895624327896432654](https://juejin.cn/post/6895624327896432654)

    摘要：TLS 三个版本的握手方式，你都了解吗？

    介绍了 RSA、DH、TLS1.3 握手流程，只是宏观层面...  
    The Transport Layer Security \(TLS\) Protocol Version 1.3   
    [https://tools.ietf.org/html/rfc8446](https://tools.ietf.org/html/rfc8446)

    找到了 TLS1.3 的 rfc，算了还是宏观了解下吧。

12. Question：抓包工具是 如何拦截记录 HTTPS 请求的呢？

    抓包工具实际上是作为 客户端与服务端的中间人。   
    客户端以为是与服务端通信，实则是与抓包工具。 服务端以为是与客户端通信，实则是与抓包工具。

    服务端与抓包工具的通信 就是正常的通信。   
    而客户端与抓包工具的通信 是在 用户已经在系统安装了抓包工具根证书的前提下的。

    当客户端与抓包工具通信时，验证抓包工具的证书，会以已经安装好的根证书去验证。自己验证自己是一定会通过的。   
    所以说，当抓包工具不使用时，尽快把它的根证书下掉，万一黑化 很可怕的。

13. 写一篇最好懂的HTTPS讲解  [https://juejin.cn/post/6925296374628122632](https://juejin.cn/post/6925296374628122632)  分享篇科普文，文中有一处错误，通过数据解密成功失败去认证权威性 显然是不对的，而是在使用公钥解密后拿到数据摘要，客户端本地在使用hash生成一份数据摘要，只有这两份摘要相同才认证成功。

