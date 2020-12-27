# Network

1. Q: HTTP状态码204代表着什么？ A: HTTP 204 No Content 成功状态响应码，表示该请求已经成功了

   Q: 使用场景, 什么时候出现? A:

   1. 在 PUT 请求中进行资源更新，但是不需要改变当前展示给用户的页面，那么返回 204 No Content。如果创建了资源，则返回 201 Created 。如果应将页面更改为新更新的页面，则应改用 200 。
   2. 跨域的非简单请求中的预检请求返回成功的状态码 有时就是204

2. CDN工作原理及其在淘宝图片业务中的应用

   [https://www.tuicool.com/wx/faq2Uvm](https://www.tuicool.com/wx/faq2Uvm)

   没想到图片业务能如此复杂，需要动态生成，控制缓存..

