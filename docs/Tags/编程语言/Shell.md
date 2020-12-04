1. 书籍分享：

   introduction-to-bash-scripting

   https://github.com/bobbyiliev/introduction-to-bash-scripting

   书中介绍了 Shell 的基本语法特性，并用多个案例带你实战。

   虽然此书一共才122页，但内容很全面，由浅入深。值得阅读。
   
2. 知识分享：

   chmod: 改变文件权限

   文件权限有两种设置方法，一种是数字权限，一种是符号权限。

   Linux 文件的基本权限就有九个，分别是 **user/group/others(拥有者/组/其他)** 三种身份各有自己的 **read/write/execute** 权限。

   1. 符号权限方式：

      `chmod [-R] [u,g,o] [+,-,=] [文件或目录]`

      `-R`: 目录下的所有文件都会变更

      user/group/others(拥有者/组/其他) 分别对应的缩写为 u,g,o

      `+` 代表增加权限，`-` 代表删除权限，`=`代表设置权限

      例：`chmod u=rwx,g=rx,o=r 文件名`

   2. 数字改变权限方式

      各权限的分数对照表

      - r:4
      - w:2
      - x:1

      rwx = 4 + 2 + 1 = 7

      wx = 2 + 1 = 3
      rx = 4 + 1 = 5

      rw = 4 + 2 = 6

      `chmod [-R] xyz 文件或目录`

      `-R`: 目录下的所有文件都会变更

      xyz : 就是刚刚提到的数字类型的权限属性，为 rwx 属性数值的相加。

      例：`chmod 777 .bashrc` => -rwxrwxrwx
      
   3. ![image-20201202194022778](docs/image-20201202194022778.png)
   
      我就简单多了
   
      ![image-20201202194044134](docs/image-20201202194044134.png)
      
   4. 快餐文分享:
   
      Defensive BASH Programming
   
      https://kfirlavi.herokuapp.com/blog/2012/11/14/defensive-bash-programming/
      摘要: Here is my Katas for creating BASH programs that work. Nothing is new here, but from my experience pepole like to abuse BASH, forget computer science and create a [Big ball of mud](http://en.wikipedia.org/wiki/Big_ball_of_mud) from their programs.
      Here I provide methods to defend your programs from braking, and keep the code tidy and clean.
   
      由于 Shell 的糟糕设计, 作者提出了 防御性编程规范...