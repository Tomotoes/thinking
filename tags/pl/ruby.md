# Ruby

1. 快餐文分享:

   Ruby 3.0.0 Released

   [https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/](https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/)

   迭代了近5年的Ruby 3.0 发布了, 主要的提升聚集在三方面: 性能 并发 类型

   Matz\(作者\) 声明 Ruby3 比 Ruby2 快3倍.

   性能方面: 主要引入了 JIT 即时编译技术, 算得上几乎所有现代语言的编译器内置功能了

   并发方面: Ruby 的实现居然是 Erlang 的 Actor-model 方案, 这就有点意思了

   并且对于 block 操作, Ruby 还引入了 Fiber Scheduler 设计..

   哈哈, async await 的思想算是现代语言标配了

   其余信息可以查阅上面链接~

2. 分享个项目：   
   rails/kredis [https://github.com/rails/kredis](https://github.com/rails/kredis)

   基于 Redis 封装的数据模型，可以理解为高度集成的 orm， 支持元编程的语言就是硬气。。

3. 分享篇文章：   
   Ruby 编程语言入门   
   [https://hutusi.com/articles/ruby-quickstart](https://hutusi.com/articles/ruby-quickstart)

   ```text
   一些我欣赏的特性：
   ​
   a = []
   a << 1        # [1]
   a << 2 << 3   # [1, 2, 3]
   ​
   a = [1, 2, 3, 4, 5]
   a[-2]         # 4, 负数下标从最后一个倒数
   ​
   # 获取子数组 切片
   a[1, 2]       # [2, 3] 第一个下标数字表示起始下标，第二个表示子数组长度
   a[1, 0]       # [] 
   a[0...-1]     # [1, 2, 3, 4]
   ​
   3.times { action }
   ​
   a << 1 这种命令式的符号表达 看起来挺好玩的。
   ```



