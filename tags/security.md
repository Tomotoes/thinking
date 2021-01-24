---
description: 安全
---

# Security

1. ![image-20201122150524404](../.gitbook/assets/image-20201122150524404%20%282%29%20%282%29.png)

   我写了一段伪代码 关于用户的登录逻辑, 其中有一片段是判断 密码是否一致, 如果一致 则成功登录, 如果不一致则拒绝登录.

   此判断密码一致的代码片段 存在很大的安全问题, 有人知道吗?

   ok, 如果没人想回应, 那我继续说了, 在后端开发中, 这样判断密码一致的逻辑是很容易被黑客攻击的.

   这种攻击叫做 记时攻击, 我举些例子 让大家理解.

   1. 长度不一致

      数据库 用户原密码: 123456789

      hacker 输入的密码: 123456

   当运行到 判断密码一致 的逻辑时, 因为两个密码长度不一致, 直接返回 登录失败响应.

   1. 长度一致

      数据库 用户原密码: 123456789

      hacker 输入的密码: 12abc456

   当运行到 判断密码一致 的逻辑时, 因为两个密码长度相同, 会进入到 for 循环逐个字符 判断, 当遍历到 3 与 a 时 应该相应位置的字符不一样, 返回 登录失败响应.

   这两个例子 被攻击的关键原因 是因为 它们都提前返回了.

   可不要小看 这个 提前返回, 当hacker 使用大量输入 去测试登录接口时, 是完全可以分析到 正确的密码长度, 当然这个过程需要去掉很多网络噪音.

   陈皓叔 有篇文章 很好地讲解了 分时攻击的细节. [https://coolshell.cn/articles/21003.html](https://coolshell.cn/articles/21003.html)

2. ![image-20201201152236021](../.gitbook/assets/image-20201201152236021%20%282%29%20%282%29.png)

   最近 QQ 被人脱库了，找个网站一查，果然自己信息已被暴漏...

3. 好文分享: A Brief Notebook on Cryptography [https://davidlowryduda.com/a-brief-notebook-on-cryptography/](https://davidlowryduda.com/a-brief-notebook-on-cryptography/)

   摘要: Recall the basic setup of cryptography. We have two people, Anabel and Bartolo. Anabel wants to send Bartolo a secure message. What do we mean by “secure?” We mean that even though that dastardly Eve might intercept and read the transmitted message, Eve won’t learn anything about the actual message Anabel wants to send to Bartolo。

   文章讲述了密码学的历史发展, 以及现在常用的RSA非对称加密原理, 并都给出了代码实现, 非常建议阅读.

