1. 进来看看，TypeScript居然还能这么玩 - 晓黑板前端技术的文章 - 知乎 https://zhuanlan.zhihu.com/p/296277982

2. 深入理解 Typescript 高级用法
   https://github.com/hannq/ppt-share/blob/master/courseware/ts-advance-usage/README.md

   摘要: 有人说 Typescript = Type + Javascript，那么抛开 Javascript 不谈，这里的 Type 是一门完备的编程语言吗？

   文章用多个案例, 展示了 TS 面向 Type 编程的特性..
   目前 TypeScript 不只是 带有 Type 的 JS 了.. 其类型系统 已经演化得十分强大... 所有编程语言都远不及..

   但是这样这么强大的类型系统, 真的有必要吗? 
   Type 只是一种重要的上下文信息, 在 coding 时, 应该追求简单明了的类型建模, 而不应为了 Type 增加心智负担, 照这样下去, 免不了要 debug Type... 那就多少有点魔幻了..

   现在 TS 的发展已经趋向于是两种语言的融合: 一种是 JavaScript, 另一种是 <加粗>Type<加粗>Script...  

   ![image-20201122151800661](../../Archives/2020/11/docs/image-20201122151800661.png)

3. 好文分享:

   clean-code-typescript
   https://github.com/labs42io/clean-code-typescript

   教你如何写干净的代码, 文章中的思想,技巧 总结得还是很全面的.
   另: 学习不要被编程语言限制, 要有个做科学家的心.
   
4. TypeScript 设计中的最大槽点就是支持鸭子类型。

   ![image-20201124113306313](docs/image-20201124113306313.png)

   每次看到具有该特性的代码, 都令我无法忍受.

   在我看来 这种设计只有坏处:

   1. 上下文更难以分析, 数据会无意间具有另一个身份（Type）
   2. 更难以追踪接口, 只能借助编辑器
   3. 与静态类型的原则相违背

5. 快餐文分享：

   1.2W字 | 了不起的 TypeScript 入门教程

   https://juejin.cn/post/6844904182843965453

   基础的语法，知识点都有提到。

   一份不可多得的 TS 学习指南（1.8W字）
   https://juejin.cn/post/6872111128135073806