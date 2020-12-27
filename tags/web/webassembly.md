# Webassembly

1. javascript为什么不像java一样直接事先编译成字节码然后跑在v8上？ - windliang的回答 - 知乎 [https://www.zhihu.com/question/429597199/answer/1575867910](https://www.zhihu.com/question/429597199/answer/1575867910)

   它不是一种语言，而是规定了一种虚拟指令集，可以作为各个语言的编译目标，然后通过wasm的虚拟机运行到浏览器还有其他各个平台中。 对于前端领域，当前Webassembly在某些场景下可以有效提高前端项目的性能，并且可以将C/C++领域的一些优秀的库通过编译直接运行到浏览器中。如果前端遇到了性能的问题，不妨可以考虑下WebAssmbly的方案。

   ![image-20201207225633527](../../.gitbook/assets/image-20201207225633527%20%282%29.png)

