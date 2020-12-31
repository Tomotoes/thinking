# OS

1. [Linux系统调用详解（实现机制分析）](https://mp.weixin.qq.com/s?__biz=MjM5NTEwMTAwNg==&mid=2650234968&idx=2&sn=ac66f50ab865f063b86620c970c029df&chksm=befe60798989e96fb5083482a41c85c248b460fcf0514a4f64bf8099aa6a4537d27caab31676&mpshare=1&scene=1&srcid=11142yPKPW3WuUYBzuK3EokC&sharer_sharetime=1605363487361&sharer_shareid=765a226e8a94a0d2fa33e57e9363afac&key=29a501fbe6d282a45bd111ba4fd954778d62b6559d909de6d8ddffe3b99a817ec3bd844d3ddfeb6a0c9f0df941e9e0ab5c92fc5a0ca1e95c79b8c47b9432d7e537e9827500d98eb0ce7a767187579ab865692be105a2492c53cccd3eedef92c375f62e613c5bc641dd6785b8418b580d95b01794c12abfadc571983b57639ba7&ascene=1&uin=MzA1OTU5NTc0&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxzKkI9tPkDQa0lLx3WZmw0%3D&pass_ticket=SgzS0tNZCexKGAoYVX6Ti8IwGWyAv%2BQfFRa5bUFUlvkEAgmSXJ03rdvqroRZOQYI&wx_header=0)
2. [漫话：如何给女朋友解释什么是Linux的五种IO模型？](https://juejin.cn/post/6844903687626686472)
3. Cache的基本原理 - smcdef的文章 - 知乎 [https://zhuanlan.zhihu.com/p/102293437](https://zhuanlan.zhihu.com/p/102293437)
4. Kernel 内核 在计算机科学中是一个用来管理软件发出的数据I/O（输入与输出）要求的计算机程序，将这些要求转译为数据处理的指令并交由中央处理器（CPU）及计算机中其他电子组件进行处理，是现代操作系统中最基本的部分。

   而Shell 就是内核的"外壳"

   A shell is a program that prints a prompt, reads a line of input from you, and then interprets it as one or more commands to manipulate files or run other programs. Before the invention of the GUI, the shell was the primary user interface of an OS.

5. 用户进程在系统中运行时，大部分时间是处在用户态空间里的，在其需要操作系统帮助完成一些用户态没有特权和能力完成的操作时就需要切换到内核态。那么用户进程如何切换到内核态去使用那些内核资源呢？答案是：1\) 系统调用（trap），2\) 异常（exception）和 3\) 中断（interrupt）。
6. ![image-20201122150247031](../.gitbook/assets/image-20201122150247031.png)
7. M1 暴打 Intel？——x86 与 ARM 的爱恨情仇 [https://blog.liangyueyong.cn/p/b013.html](https://blog.liangyueyong.cn/p/b013.html)

   摘要: 事实上，CPU 做的事情很简单也最核心，简单来说就是接收指令+运算。CPU 和千千万打工人一样，首先要有正常的**工作能力**（即执行能力/运算能力），然后又有足够的**逻辑能力**（能明白做事的顺序），最后还要有一定的**理解能力，能听懂别人的话**（即指令集），才能正常工作。而把这些**集中在一起**就构成了所谓的「**架构」**。你可以将「架构」理解为一套**“工具”、“方法”和“规范”的集合**。

8. 一图看清 Linux 权限说明

   ![img](../.gitbook/assets/file-llls22%20%281%29.jpg)

   在 Linux 中第一个字符代表这个文件是目录、文件或链接文件等等。

   * 当为 **d** 则是目录
   * 当为 **-** 则是文件；
   * 若是 **l** 则表示为链接文档\(link file\)；
   * 若是 **b** 则表示为装置文件里面的可供储存的接口设备\(可随机存取装置\)；
   * 若是 **c** 则表示为装置文件里面的串行端口设备，例如键盘、鼠标\(一次性读取装置\)。

   接下来的字符中，以三个为一组，且均为 **rwx** 的三个参数的组合。其中， **r** 代表可读\(read\)、 **w** 代表可写\(write\)、 **x** 代表可执行\(execute\)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号 **-** 而已。

9. 快餐文分享：

   彻底搞懂 IO 底层原理

   [https://xie.infoq.cn/article/c3a39fa8476144179d53664fc](https://xie.infoq.cn/article/c3a39fa8476144179d53664fc)

   摘要：谈起IO的模型，大多数人脑子里肯定是一坨混乱的概念，“阻塞”、“非阻塞”，“同步”、“异步”有什么区别？很多同学傻傻分不清，有尝试去搜索相关资料去探究真相，结果又被淹没在茫茫的概念之中。

   文章从底层讲解了下从BIO到NIO的一个过程，着重介绍了IO多路复用的几个系统调用select\(\)、poll\(\)、epoll\(\)，分析了下各自的优劣，技术都是持续发展演进的，目前也有很多的痛点。

10. ![image-20201203135444934](../.gitbook/assets/image-20201203135444934.png)
11. 快餐文分享：

    Windows Subsystem for Linux: The lost potential

    摘要：If you have followed Windows 10 at all during the last few years, you know that the **Windows Subsystem for Linux**, or **WSL** for short, is _the_ hot topic among developers. You can finally run your Linux tooling on Windows as a first class citizen, which means you no longer have to learn PowerShell or, god forbid, suffer through the ancient `CMD.EXE` console.

    Windows Linux 子系统（简称 WSL）使得 Windows 可以运行 Linux 程序，但是它有两个版本，并且同时都在开发，简单说，WSL 1 是内核子系统，WSL 2 是 Linux 虚拟机。

    我最近一直使用的是 WSL 2，虽然说 它比 WSL 1 更加稳定了，但是要想在 WSL2 里运行 Windows 的原生程序 还无法做到, 开发环境一直隔离。

12. 分享一本书，读了前两章 干货很多，后面的章节 有兴趣的同学可以实践下.

    [https://weread.qq.com/web/appreader/4a4323f0718ff6824a40316k9bf32f301f9bf31c7ff0a60?wtheme=white&wfrom=app&wvid=244154583&scene=bottomSheetShare](https://weread.qq.com/web/appreader/4a4323f0718ff6824a40316k9bf32f301f9bf31c7ff0a60?wtheme=white&wfrom=app&wvid=244154583&scene=bottomSheetShare)

13. 快餐文分享:

    漫画 \| 从量子力学到抖音

    [https://mp.weixin.qq.com/s?\_\_biz=MzAxOTc0NzExNg==&mid=2665523232&idx=1&sn=4dc7613bb5be208452677485d7e8e7c2](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665523232&idx=1&sn=4dc7613bb5be208452677485d7e8e7c2)

    量子力学 -&gt; 晶体管 -&gt; 逻辑电路 -&gt; 指令集 -&gt; 汇编语言 -&gt; 高级语言 -&gt; 应用程序

14. 快餐文分享:

    多线程那些事，硬核有趣

    [https://mp.weixin.qq.com/s?\_\_biz=MzUxODAzNDg4NQ==&mid=2247487160&idx=2&sn=b3f86df179f5ba65e61fbdf2700a3e23](https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247487160&idx=2&sn=b3f86df179f5ba65e61fbdf2700a3e23)

    摘要: 用户级线程做不到并发只能并行, 但是，**内核级线程是可以利用多核CPU的，即可以并行**！

    本文通过 聊天的方式 将多个知识点一一道来, 文中干货较多 既涉及到 操作系统的线程模型, 也与 JVM 应用层相呼应, 推荐阅读.

15. 快餐文分享：

    终于明白了，一文彻底理解I/O多路复用 [https://mp.weixin.qq.com/s?\_\_biz=MzI0MjEwMDMzNQ==&mid=2652517896&idx=1&sn=0ccd0ddf7e0b75094a6843039948692f](https://mp.weixin.qq.com/s?__biz=MzI0MjEwMDMzNQ==&mid=2652517896&idx=1&sn=0ccd0ddf7e0b75094a6843039948692f)

    文章较简单，没有介绍抽象概念，没了解过 I/O 机制的同学可以读一下。

    A: 昨天还看 bio nio aio 感觉好多文章都无法理解

    B: 是的，Java 的 IO 机制 实质上就是 底层 IO 机制 的封装。

    不过现在 IO 机制的思想，已经很难改变了。

    不管是 windows 的 select ，还是 linux 的 epoll ，还是 mac 的 kqueue 实质上都是一种思想 的不同实现。
