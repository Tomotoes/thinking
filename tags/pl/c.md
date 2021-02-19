# C

1. 分享篇老文   
   Tutorial - Write a Shell in C   
   [https://brennan.io/2015/01/16/write-a-shell-in-c/](https://brennan.io/2015/01/16/write-a-shell-in-c/)

   之前使用 Golang 写过 一个简易的 Shell，原理很简单。

   文中介绍了下：Let’s look at a shell from the top down. A shell does three main things in its lifetime.

   Initialize: In this step, a typical shell would read and execute its configuration files. These change aspects of the shell’s behavior. Interpret: Next, the shell reads commands from stdin \(which could be interactive, or a file\) and executes them. Terminate: After its commands are executed, the shell executes any shutdown commands, frees up any memory, and terminates.

