# Java

1. java 1.8 的 nio 在windows、linux、macosx、solaris上的实现分别用的是select、epoll、kqueue、poll。
2. Spring是否代表着目前Java技术的顶峰，未来的Java将如何发展？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/387902282/answer/1198090641](https://www.zhihu.com/question/387902282/answer/1198090641)
3. 为什么 Java 坚持多线程不选择协程？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/332042250/answer/734115120](https://www.zhihu.com/question/332042250/answer/734115120)
4. 为什么只有Java多线程有可见性问题？ - 大宽宽的回答 - 知乎 [https://www.zhihu.com/question/330803860/answer/724901797](https://www.zhihu.com/question/330803860/answer/724901797)
5. 快餐文分享:

   New language features since Java 8 to 15

   [https://advancedweb.hu/new-language-features-since-java-8-to-15/](https://advancedweb.hu/new-language-features-since-java-8-to-15/)

   文章介绍了 Java 8 - 15 版本以来的新特性，并附有代码。

6. 项目分享:

   hutool [https://github.com/looly/hutool](https://github.com/looly/hutool)

   摘要: Hutool是一个小而全的Java工具类库，通过静态方法封装，降低相关API的学习成本，提高工作效率，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。

   之前看过此库的源码, 质量还行, 完全可以用作学习.

7. [https://www.instagram.com/p/CIc2oBhAQBP/?igshid=1m9xm8cg43zy](https://www.instagram.com/p/CIc2oBhAQBP/?igshid=1m9xm8cg43zy)

   主题: 为什么 Java 不是纯 OOP 语言。

   我发现不管是哪种编程范式宗教，只要带上 纯 这个形容词，最后全沦为 white elephant..

8. [https://juejin.cn/post/6903678103483072520](https://juejin.cn/post/6903678103483072520)

   本文介绍了 Java 中常见的语法糖，以及糖衣背后的样子。

9. ![image-20201212211905498](../../.gitbook/assets/image-20201212211905498%20%281%29%20%281%29.png)

   A: 分享下 Java8 Functional Interface 的设计

   B: 这就是java8的特性吗

   A: Java 8 最牛批的设计 就是 Functional Interface 了.. 借助它这个概念, 实现 lambda 语法, stream, 函数引用 .. 并且还没有违背 Java 的 OOP 设计原则...

   C: 本质还是个interface嘛 像kotlin那样有函数类型就好了

   A: Java8 内置了 多种 函数接口类型, 平常用 足够了 可惜 Java 只有类是第一成员...

   如果没有 这种设计 , 也不会有设计模式, 依赖注入各种营销术语..

   C: 哈哈哈 确实

10. 快餐文分享:

    多线程那些事，硬核有趣

    [https://mp.weixin.qq.com/s?\_\_biz=MzUxODAzNDg4NQ==&mid=2247487160&idx=2&sn=b3f86df179f5ba65e61fbdf2700a3e23](https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247487160&idx=2&sn=b3f86df179f5ba65e61fbdf2700a3e23)

    摘要: 用户级线程做不到并发只能并行, 但是，**内核级线程是可以利用多核CPU的，即可以并行**！

    本文通过 聊天的方式 将多个知识点一一道来, 文中干货较多 既涉及到 操作系统的线程模型, 也与 JVM 应用层相呼应, 推荐阅读.
