作用域插槽
<template slot="content" slot-scope="msg"><div>{{msg.data}}</div></template>


<slot name="content" :data="msg"></slot>

https://blog.csdn.net/weixin_43720095/article/details/89614431