# Go

1. Go 语言：全面分析为什么我们需要泛型

   [https://mp.weixin.qq.com/s?\_\_biz=MzAxMTA4Njc0OQ==&mid=2651443700&idx=1&sn=1b0c8e0eb989bd3eeebefb613925e700](https://mp.weixin.qq.com/s?__biz=MzAxMTA4Njc0OQ==&mid=2651443700&idx=1&sn=1b0c8e0eb989bd3eeebefb613925e700)

2. 快餐文分享:

   Go-通道用例大全

   [https://gfw.go101.org/article/channel-use-cases.html](https://gfw.go101.org/article/channel-use-cases.html)

   摘要: 文章详细地解释了通道类型和通道值，以及各种通道操作的规则细节。本文的目的是展示尽量多的通道用例。但是，我们应该知道通道并不是Go支持的唯一同步技术，并且通道并不是在任何情况下都是最佳的同步技术。

   这篇文章 我之前已经读过很多遍了，每次读完都有不同的感受，通过 channel 去模拟并发原语，并天然在语法层面上支持 coruntine，这就是 Golang 的设计魅力所在。

3. 激荡60年——垃圾回收与Go的选择

   [https://mp.weixin.qq.com/s?\_\_biz=MzAxMTA4Njc0OQ==&mid=2651442959&idx=3&sn=83882fbdc628e48d054c000d499be4f4](https://mp.weixin.qq.com/s?__biz=MzAxMTA4Njc0OQ==&mid=2651442959&idx=3&sn=83882fbdc628e48d054c000d499be4f4)

   与V8垃圾回收有异曲同工之妙。

4. Golang 主题分享:

   Go2 泛型设计草案更新 [https://v2ex.com/t/733860](https://v2ex.com/t/733860) 泛型提案终于迭代了.. 个人感觉这次提案的更新 挺赞的, 符合 Golang 大道至简的观念.

5. [https://www.golangprograms.com/go-language/concurrency.html](https://www.golangprograms.com/go-language/concurrency.html)

   快餐文分享，操作系统中经典案例的Golang实现，Demo 值得阅读。

6. 快餐文分享:  maybedoer: the Maybe Monoid for Go [https://christine.website/blog/maybedoer-2020-05-23](https://christine.website/blog/maybedoer-2020-05-23) 函数式编程中 maybe monod 在 Go 中的实现.
7. 快餐文分享:  Go语言的设计哲学之三：并发  [https://www.imooc.com/read/87/article/2340](https://www.imooc.com/read/87/article/2340) 文中讲了传统语言的并发方案的缺点 如下, 以及 Goruntine 模型的简单介绍. 摘要:  并发单元间通信困难，易错：多个 thread 之间的通信虽然有多种机制可选，但用起来是相当复杂；并且一旦涉及到 shared memory，就会用到各种 lock，死锁便成为家常便饭 对于很多网络服务程序，由于不能大量创建 thread，就要在少量 thread 里做网络多路复用，即：使用 epoll/kqueue/IoCompletionPort 这套机制，即便有 libevent、libev 这样的第三方库帮忙，写起这样的程序也是很不易的，存在大量 callback，给程序员带来不小的心智负担。 nodejs deno 在底层全是用的 epoll/kqueue/IoCompletionPort 这套机制 , 只不过在应用层 nodejs 使用的是 libuv, deno 使用的是 Tokio..

