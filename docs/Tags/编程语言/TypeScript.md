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
   
6. 快餐文分享:

   TypeScript 高级技巧

   https://juejin.cn/post/6844903863791648782

   文中的 demo 都挺有趣的。
   
7. 日常分享 TS 代码片段:

   ```ts
   type Whitespace = ' ' | '\n' | '\r' | '\t'
   
   type TrimStart<S extends string, P extends string = Whitespace> =
     S extends `${P}${infer R}` ? TrimStart<R, P> : S
   ```

8. 分享一道面试题：

   ```ts
   interface Logger {
     time: number;
     asyncLog:(msg: string) => Promise<string>;
     syncLog:(msg: string) => number;
   }
   
   type Translate<T> = /** 你需要实现的部分 **/;
   
   // 要求 Translate
   //  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
   //  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)
   
   // 实现效果如下:
   type T0 = Translate<Logger>;
   
   // 等价于
   type T0 = {
       // 其它属性被丢弃
       asyncLog: (arg: string) => string; 
       // return 类型被调整为跟 arg 保持一致
       syncLog: (arg: string) => string; 
       // return 类型被调整为跟 arg 保持一致
   }
   
   const result: T0 = {
       asyncLog(msg: string) { return msg }
   };
   ```

   1. 先实现一个类型可以提取出指定类型，用来筛选出所有为函数类型的属性

   ```ts
   type FilterTypes<T, U> = {
       [Key in keyof T]: T[Key] extends U ? Key : never
   };
   
   // 看看阶段性成果
   type T = FilterTypes<Logger, Function>;
   // type T = {
   //     time: never;
   //     syncLog: "syncLog";
   //     asyncLog: "asyncLog";
   // }
   ```

   2. 在 1 的基础上剔除 `never`，取出所有 key

   ```ts
   type FilterKeys<T, U> = FilterTypes<T, U>[keyof T];
   
   // 看看阶段性成果
   type T = FilterKeys<Logger, Function>;
   // type T = "syncLog" | "asyncLog"
   ```

   3. 在 2 的基础上我们可以使用 `Pick` 提取出子类型

   ```ts
   type SubType<T, U> = Pick<T, FilterKeys<T, U>>;
   
   // 看看阶段性成果，此时我们已经成功提取出了所有类型为函数的属性，满足要求
   type T = SubType<Logger, Function>;
   // type T = {
   //     syncLog: (msg: string) => number;
   //     asyncLog: (msg: string) => Promise<string>;
   // }
   ```

   4. 在 3 的基础上我们再使用 `infer` 将函数的返回类型改为形参类型

   ```ts
   // 将参数类型作为返回类型
   type ArgAsReturn<T> = {
       [K in keyof T]: T[K] extends ((arg: infer U) => any) ? ((arg: U) => U): never;
   }
   
   // 我们最终得到了 Translate
   type Translate = ArgAsReturn<SubType<Logger, Function>>;
   
   // 看看最后效果，满足要求
   type T = Translate<Logger>;
   
   // type T0 = {
   //     asyncLog: (arg: string) => string;
   //     syncLog: (arg: string) => string;
   // }
   ```

   文中部分示例来自[TypeScript 官网 - 高级类型](https://www.typescriptlang.org/docs/handbook/advanced-types.html)，面试题灵感来自[中国 LeetCode](https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md?rgh-link-date=2020-04-13T15%3A04%3A56Z)，原题太绕且有 Redux 倾向，因此做了简单改造，基本思路一致甚至更全面。