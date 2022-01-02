锚点 url/#/id

前端路由：hash值#/id 和组件之间的映射关系

ssr服务端渲染

vue-router

https://router.vuejs.org/zh/

% curl -O https://unpkg.com/vue-router@3.5.3/dist/vue-router.js

router:router



注册组件方式1: Vue.component("index",{
                template:`
                <p>router</>
                `
            })

方式2:
new Vue{
  components:{
      {
       template:`
                <p>router</>
                `
      }
  }
}

方式3:
配置到vue-routers 路由里面

file:///Users/xiazemin/vue_learn/vue/exp8/index.html#/home


导航链接
router-link 
to
  const router = new VueRouter({
routers: {
{   path:"/",
    redirect:"/index"}
},
lintActiveClass:"xxx"
  })
 

 嵌套路由：
 children


 声明式导航 route-link
 编程式导航  router.$push(/path,oncomplete,onabort)


 动态路由
 path：/product/:id

 获取动态路由参数
 component={
     template:`{{$route.params.id}}`

 }
