# Index

1. 会不会出现不同编程语言的使用者对同一个的概念理解不一致的现象？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/366449539/answer/981637860](https://www.zhihu.com/question/366449539/answer/981637860)
2. LLVM IR指令集能否实现所有高级语言？ - 向往真善美吧的回答 - 知乎 [https://www.zhihu.com/question/432890562/answer/1605900370](https://www.zhihu.com/question/432890562/answer/1605900370)
3. 计算机科学的先驱 Alan Perlis 给低层语言（low-level languages）下的定义是：

   > “A programming language is low level when its programs require attention to the irrelevant.” \[5\]

   如果用一门语言编写的程序**需要处理不相关的东西**，那这就是一门低层语言。

4. 为什么编译器过度优化导致线程安全问题？ - invalid s的回答 - 知乎 [https://www.zhihu.com/question/388121842/answer/1195382979](https://www.zhihu.com/question/388121842/answer/1195382979)
5. 高级语言有中断这个概念吗? - invalid s的回答 - 知乎 [https://www.zhihu.com/question/341367635/answer/817583000](https://www.zhihu.com/question/341367635/answer/817583000)
6. [https://juejin.cn/post/6903456514355232776](https://juejin.cn/post/6903456514355232776)

   [http://www.yinwang.org/blog-cn/2017/05/23/kotlin](http://www.yinwang.org/blog-cn/2017/05/23/kotlin)

   A: 分享两篇关于 Checked Exception 机制的文章，我个人赞同垠神的观点，异常检查没有银弹可言。但也正如掘金郭霖前辈所说 绝大多数的方法其实都是没有抛出异常的。

   业界的其他语言 不管是 Go 还是 Rust，错误处理都一直被人诟病，这也代表了开发的复杂性，有的时候 不能不正视 逻辑下隐含的异常，而各种 try catch , 多返回值，Optional 等各种设计方案 就是为了处理这种脏活出现的。

   的确没有 CE 是方便了开发者，但稳定性，维护性 很难得到保证。

   另，Rust 的错误处理方案 如果你熟悉函数式的话，其实是一套理论..

   相比之下 JS 就像个小孩子... 还是傻了吧唧的那种（缺乏类型系统）..

   B: rust的错误处理我觉得还挺优雅的 比go高到不知道哪里去了

   B: ce设计初衷没问题 强迫程序员处理错误 但是程序员都比较懒

   A: 懒惰才是第一生产力

7. 好文分享:

   编程语言学习心得 （完全版） -- 不要害怕遗忘和混淆

   [https://mp.weixin.qq.com/s?\_\_biz=MzI2MjQ3Njk2MQ==&mid=2247483875&idx=1&sn=4b693ca650cc952fae47fcad7280d612](https://mp.weixin.qq.com/s?__biz=MzI2MjQ3Njk2MQ==&mid=2247483875&idx=1&sn=4b693ca650cc952fae47fcad7280d612)

   摘要: 很多工程师往往把学习语言的重点放在了学习不同语言的语法上，而忽略了语言背后的思想及适合的应用场景。

   其实对于编程语言的学习，意义最大，收获最大的就是对于编程思想的学习。正如著名的计算机学者，首位图灵奖获得者，Alan Perlis说的那样如果一个编程语言不能够影响你的编程思维，这个语言便不值得学习。

8. “A language that doesn’t effect the way you think about programming, is not worth knowing.” - Alan Perlis 正确有效的学习编程语言对于我们编程思维的提高有着很重要的影响，即使是去学习的一些暂时 还用不到的编程语言。
9. 快餐文分享:

   漫画 \| Java小子和C老头儿的硬盘夜话

   [https://mp.weixin.qq.com/s?\_\_biz=MzAxOTc0NzExNg==&mid=2665523198&idx=1&sn=206c2ed4035207aaae049aeab8dd83a0](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665523198&idx=1&sn=206c2ed4035207aaae049aeab8dd83a0)

   A: 多线程学了三套 Windows的方法到Linux下，还得自己研究怎么实现

   B: mingw
