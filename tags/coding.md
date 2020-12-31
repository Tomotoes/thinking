# Coding

1. 最难调试修复的 bug 是怎样的？ - doodlewind的回答 - 知乎 [https://www.zhihu.com/question/21991014/answer/1513267624](https://www.zhihu.com/question/21991014/answer/1513267624)
2. 好文分享:

   clean-code-typescript [https://github.com/labs42io/clean-code-typescript](https://github.com/labs42io/clean-code-typescript)

   教你如何写干净的代码, 文章中的思想,技巧 总结得还是很全面的. 另: 学习不要被编程语言限制, 要有个做科学家的心.

3. ![image-20201122150510146](../.gitbook/assets/image-20201122150510146%20%283%29%20%281%29.png)
4. 函数式编程是否适用于超大型项目？ - 灵剑的回答 - 知乎 [https://www.zhihu.com/question/340251796/answer/791560176](https://www.zhihu.com/question/340251796/answer/791560176)
5. 快餐文分享：

   每个开发者都应该知道的 SOLID 原则

   [https://mp.weixin.qq.com/s?\_\_biz=MjM5MTA1MjAxMQ==&mid=2651241242&idx=1&sn=e51b1519bf59ad6793567f5d81b915f7](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651241242&idx=1&sn=e51b1519bf59ad6793567f5d81b915f7)

   1. 单一职责原则
   2. 开闭原则
   3. 里氏替换原则
   4. 接口隔离原则
   5. 依赖倒置原则

6. 编程究竟难在哪？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/311432227/answer/681616817](https://www.zhihu.com/question/311432227/answer/681616817)
7. 函数式编程（Functional Programming）相比面向对象编程（Object-oriented Programming）有哪些优缺点？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/19732025/answer/530161703](https://www.zhihu.com/question/19732025/answer/530161703)
8. 怎么深刻理解面向切面编程？ - invalid s的回答 - 知乎 [https://www.zhihu.com/question/61441658/answer/1603120111](https://www.zhihu.com/question/61441658/answer/1603120111)
9. 分享一个代码优化技巧：

   如何将优化双分支的代码？ ![image-20201203162454394](../.gitbook/assets/image-20201203162454394%20%282%29%20%282%29.png)

   `condition ? A : B` 在大多数弱类型语言中可转换为 `[A, B][condition]`

   ```text
   // 后来又 get 了一种
   switch (true) {
     case this.status === 0 && data.type === 1:
     case (this.status === 2 || this.status === 3) && data.status === 2:
       this.nextBtnIsOk = true
       break;
   ​
     default:
       break;
   }
   ​
   if (
     (this.status === 0 && data.type === 1) ||
     ((this.status === 2 || this.status === 3) && data.status === 2)
   ) {
     this.nextBtnIsOk = true;
   }
   ```

10. 程序员基础掌握得好学新东西真的就快么？ - invalid s的回答 - 知乎 [https://www.zhihu.com/question/332732069/answer/737894772](https://www.zhihu.com/question/332732069/answer/737894772)
11. [漫画 \| 程序员必须要小心的7个潜规则](https://mp.weixin.qq.com/s/ubzCmQTL7wt9GEoSqueicw)
