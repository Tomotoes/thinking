# Database

1. 再见，MySQL !

   [https://mp.weixin.qq.com/s?\_\_biz=MzAxOTc0NzExNg==&mid=2665523082&idx=1&sn=49765d7975ad8a2543c9a1140db34b79](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665523082&idx=1&sn=49765d7975ad8a2543c9a1140db34b79)

2. MongoDB 等 NoSQL 与关系型数据库相比，有什么优缺点及适用场景？ - 周思远的回答 - 知乎 [https://www.zhihu.com/question/20059632/answer/14981332](https://www.zhihu.com/question/20059632/answer/14981332)
3. 之前在图书馆看过一本 7天7数据库的书，里面介绍了多种主流的数据库类型: 按照存储类型分类

   1. 关系型数据库
   2. 非关系型数据库

      基于文档

      基于键值对

   3. 新关系型数据库
   4. 列存储型数据库
   5. 图存储型数据库
   6. 时间序列数据库

   业界代表:

   1. 关系型数据库: Oracle MySQL PostgreSQL MariaDB SQLServer
   2. 文档数据库: MongoDB
   3. 键值对数据库: Redis,  Memcache
   4. 新关系型数据库 主要用于分布式: TiDB OceanBase  Ectd
   5. 列存储型数据库: HBase 
   6. 图存储型数据库: Neo4j
   7. 时序数据库: InfluxDB

   其他的区别:

   1. 开源/商用
   2. 存储模型
   3. 单机/分布式
   4. 数据库引擎
   5. 底层数据结构
   6. 搜索引擎
   7. 索引的支持
   8. 事务的支持
   9. ACID 的实现性
   10. 是否云产品
   11. ...

4. sql 在我看来最大的优点 就是 语法层面上 设计 偏自然语言，就比如 select name from student。
5. 应用分享： sql-trainer [https://app.bytescout.com/sql-trainer/index.html](https://app.bytescout.com/sql-trainer/index.html)

   通过在线关卡的方式 一步一步引导你 如何写出基本的 SQL 语句。 可以花几分钟刷一下，很好玩~

6. 在你的认知中 数据库索引 是什么？ 数据结构。
7. 分享一个简单的数据库\(基于文件系统\):

   Kn-DB [https://github.com/Knove/knDB/blob/master/README.CN.md](https://github.com/Knove/knDB/blob/master/README.CN.md)

   源码很简单, 正是应了那句话 最早的数据库 就是文件系统.. 这个库做到事情就是 对文件包了一层 IO 接口..

