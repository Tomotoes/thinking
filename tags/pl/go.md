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
8. Go 语言网络轮询器的实现原理

   [https://mp.weixin.qq.com/s/wwyxfWrvNMRhB1fLrZQRww](https://mp.weixin.qq.com/s/wwyxfWrvNMRhB1fLrZQRww)

9. 分享篇文章:

   GO 编程模式：FUNCTIONAL OPTIONS   
   [https://coolshell.cn/articles/21146.html](https://coolshell.cn/articles/21146.html)

   Go 复合结构 初始化的一些实践

   说到 Go, 它设计中有一点, 让我很喜欢

   它不支持 同时"可读可写"

   什么叫 同时"可读可写" ?

   1. i++ , 把 i 加 1, 该表达式会返回 i 未更正的值.
   2. a = 2, 把 a 赋值为 2, 该表达式会返回 2

   这种设计 现在大部分编程语言都有.. 我真的很想吐槽, 这是什么脑残设计..

   c 语言考试, 还就爱考 i++, ++i 这种问题..

   我之所以说这种设计脑残, 就是因为 从语义上来看, 它本应就是一个 只读或者只写的操作.

   把本来很简单的语义搞得异常复杂..

   A: 有点好奇 马老师为什么能在短短一小时里看了那么多篇文章

   B: 你可以看看我发的文章... 真的挺简单的.. 都是已有的概念..

   B: 就比如这篇文章, 我只是想衍生讨论下..

   每次分享这种文章, 也是为了能"下沉市场"...

   B: 我阅读最大的动力, 就是想找到一个让我惊讶 兴奋的知识..

   可是很难遇到.. 我太菜了 就怪我读不懂 paper

10. 调度系统设计精要

    [https://mp.weixin.qq.com/s/R3BZpYJrBPBI0DwbJYB0YA](https://mp.weixin.qq.com/s/R3BZpYJrBPBI0DwbJYB0YA)

    调度系统其实就是调度器（Scheduler），我们在很多系统中都能见到调度器的身影，就像我们在上面说的，不止操作系统中存在调度器，编程语言、容器编排以及很多业务系统中都会存在调度系统或者调度模块。这些调度模块的核心作用就是对有限的资源进行分配以实现最大化资源的利用率或者降低系统的尾延迟，调度系统面对的就是资源的需求和供给不平衡的问题。

    在操作系统的进程调度器中，待调度的任务就是线程，这些任务一般只会处于正在执行或者未执行（等待或者终止）的状态；而用于处理这些任务的 CPU 往往都是不可再分的，同一个 CPU 在同一时间只能执行一个任务，这是物理上的限制。简单总结一下，操作系统调度器的任务和资源有以下特性： 任务 —— Thread 状态简单：只会处于正在执行或者未被执行两种状态； 优先级不同：待执行的任务可能有不同的优先级，在考虑优先级的情况下，需要保证不同任务的公平性； 资源 —— CPU 时间 资源不可再分：同一时间只能运行一个任务；

    除了操作系统和编程语言这种较为底层的调度器之外，容器和计算任务调度在今天也很常见，Kubernetes 作为容器编排系统会负责调取集群中的容器，对它稍有了解的人都知道，Kubernetes 中调度的基本单元是 Pod，这些 Pod 会被调度到节点 Node 上执行： 任务 —— Pod 优先级不同：Pod 的优先级可能不同，高优先级的系统 Pod 可以抢占低优先级 Pod 的资源； 有状态：Pod 可以分为无状态和有状态，有状态的 Pod 需要依赖持久存储卷； 资源 —— Node 类型不同：不同节点上的资源类型不同，包括 CPU、GPU 和内存等，这些资源可以被拆分但是都属于当前节点； 不稳定：节点可能由于突发原因不可用，例如：无网络连接、磁盘损坏等；

