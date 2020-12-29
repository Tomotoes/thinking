# Kotlin

1. 在开发中使用Kotlin有什么奇巧淫技？ - 药罐子千里冰封的回答 - 知乎 [https://www.zhihu.com/question/61758585/answer/190783842](https://www.zhihu.com/question/61758585/answer/190783842)
2. ![image-20201224234712461](../../.gitbook/assets/image-20201224234712461%20%282%29%20%282%29.png)

   Kotlin 1.4 新推出了一个关键字 tailrec , 可以使用它 去主动编译优化 尾调用的函数. [https://twitter.com/kotlin/status/1341749661175066624?s=20](https://twitter.com/kotlin/status/1341749661175066624?s=20)

   先不提尾调用是什么, 就说说 都 2020 年了, 现代的编译器还做不到 主动优化尾调用嘛.. \(V8 做到了,但因为一些问题 不敢主动开启\)

   这个关键字很破环我对 Kotlin 的印象..

   它就和 C++ 中的 inline, volatile 代表的性质一样... 这些关键字的出现 是为了弥补 底层设计的缺陷... 之所以 C++ 的定位是偏底层语言, 就因为 它的语法特性 就离不开操作系统那些概念..

   而一个优秀 现代的编程语言 是不应该为用户增加此心智负担的.

   A: kotlin也有inline 还有refied这种类型擦除后再生 给Java擦屁股

