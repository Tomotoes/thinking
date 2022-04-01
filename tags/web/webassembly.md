# Webassembly

1.  javascript为什么不像java一样直接事先编译成字节码然后跑在v8上？ - windliang的回答 - 知乎 [https://www.zhihu.com/question/429597199/answer/1575867910](https://www.zhihu.com/question/429597199/answer/1575867910)

    它不是一种语言，而是规定了一种虚拟指令集，可以作为各个语言的编译目标，然后通过wasm的虚拟机运行到浏览器还有其他各个平台中。 对于前端领域，当前Webassembly在某些场景下可以有效提高前端项目的性能，并且可以将C/C++领域的一些优秀的库通过编译直接运行到浏览器中。如果前端遇到了性能的问题，不妨可以考虑下WebAssmbly的方案。

    ![image-20201207225633527](../../.gitbook/assets/image-20201207225633527.png)
2.  从 JS 引擎谈到 WebAssembly

    [https://mp.weixin.qq.com/s/p2a8P6\_Ww8UAWOZqbgyAsg](https://mp.weixin.qq.com/s/p2a8P6\_Ww8UAWOZqbgyAsg)

    文章写得不错，建议阅读.

    感觉这东西最大帮助就是扩展 web 生态，比如游戏迁移，调用opengl这些库啊.

    我一直觉得大部分场景下，web应用的性能瓶颈是单线程所致。
