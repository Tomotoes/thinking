---
description: 分布式理论（暂时没时间继续维护）
---

# Distributed

1. 好文分享: 深度解析 Raft 分布式一致性协议 [https://juejin.cn/post/6907151199141625870](https://juejin.cn/post/6907151199141625870)

   摘要: 在分布式系统中，为了消除单点提高系统可用性，通常会使用副本来进行容错，但这会带来另一个问题，即如何保证多个副本之间的一致性？

   文章写得很有深度, 目前 Raft 算法是 CAP 理论中 C 一致性 在业界内的最佳实现, 有兴趣的同学可以读一下 前两章与最后一章, 中间实现细节 可以泛读.

2. 快餐文分享:  浅析 Redis 分布式锁解决方案  [https://www.infoq.cn/article/DVAAJ71F4fBQsxmGVdCE](https://www.infoq.cn/article/DVAAJ71F4fBQsxmGVdCE) 在单机中 原子性是锁的保障, 在分布式中 锁的问题又上升了一个层级...
3. 分享篇好文:   
   分布式之系统底层原理   
   [https://cloud.tencent.com/developer/article/1770779](https://cloud.tencent.com/developer/article/1770779)

   这篇文章 在我的阅读列表存了快一个月了.. 读了很多遍, 每次读它 读到一半就云里雾里.. 至今不是很理解 原子提交协议..

   之所以是好文, 文章前面讲的事务 以及 后面并发控制 让我很受教, 并且它出自潘少\(ants的作者\)之手.

