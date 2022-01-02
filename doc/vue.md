https://cn.vuejs.org/v2/guide/

https://www.bilibili.com/video/BV1cr4y1C71f?p=5



<div id="app">
  {{ message }}
</div>
var app = new Vue({  //view model
  el: '#app',  //view
  data: {   //model
    message: 'Hello Vue!'
  },
  methods:{

  },
  computed:{ //计算属性，不能修改，依赖的属性改了才能修改，不能用v-model绑定
    reverseMsg(){
      return ""
    }
  },
  watch{//监听属性
     msg:function(newvalue,oldvalue){ //对象的时候，是监听的地址，属性变了，没法感知

     }
     car:{
       deep:true, //监听属性变化
       immediate:true,
       handler:function(new,old){

       }
     }
  },
  filters:{
//局部过滤器
  },
  template:"<p></P>" //outerHtml $0
})
vm.$destroy

8个体钩子函数
beforeCreate //数据初始化之前
created  //这里发送ajax请求，越早 越好
beforeMount //视图渲染之前
mounted //执行dom操作
beforeUpdate //数据改变，dom更新之前
updated
beforeDestroy //销毁之前
detroyed

计算属性，写成函数形式，默认只有getter，也可以加setter，这样就能修改了，需要定义成对象，{get(){} ,set(){}}

localStorage.get set //存浏览器缓存

模板表达式不能用于属性，不能用于<html>和<body>标签
 {{ message }}

修改属性用v-bind，不能用于标签内部
格式v-bind:src="" 可以简写成 :src=""
操作属性的实施，可以是对象{red:true,},数组



v-model="" 用于表单的数据双向数据绑定


双向数据改变：
注册事件 addListenser("input",function(){})
angular定时器定时检查数据有没有改变 
es5 数据劫持：浏览器新方法：Object.defineProperty(对象，属性，对应的修饰对象{get(),set(value)})方法,劫持对象的修改和读取操作

v-on 给对象注册事件
v-on：事件名=函数 简写@事件=函数
methods提供方法

事件函数后面可以括号带参数

默认有参数e
可以用e.preventDefault 或者return false 来阻止默认行为

vue事件可以带修饰符 click.prevent=func()//阻止默认行为
.stop阻止冒泡

按键修饰符 @keyup.13 @keyup.enter

 @keyup.enter.prevent


 自定义按键码
 vue.config.keycode.xxx


 v-text innerText  会转义
 v-html innerHtml 识别标签，不安全

 v-show //样式 display=none
 v-if  //删除了

 v-else
 v-else-if


 v-for
 v-for="cxx in arrayXxx"  {{cxx}}
 v-for="(cxx,index) in arrayXxx"  {{cxx}}
 v-for="(val,key) in mapXxx"  {{cxx}}
 v-for="(val,key,index) in mapXxx"  {{cxx}}

:key="" 属性  就地复用

v-pre 跳过编译
v-once  视图不会再更新

v-cloak 解决闪烁问题 ，编译完毕后属性消失，配合css 属性选择器使用
[v-cloak]{
  display:none
}

使用本地打包的vue.js 不会闪烁





vm.$mount(#elxxx)



Vue.filter("",func(){})
{{ | }}


vue.nextTicks

修改数据是异步加载的

变量不存在报错，对象的属性不存在不报错
动态增加属性，不会不会被vue劫持，不是响应式的，所以最好先声明

Vue.$set
vue.set（对象，属性，值） //动态增加的属性

组件化：样式，js，结构