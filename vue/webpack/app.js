import Vue from 'vue'
import Hello from './helloworld.vue'

const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>h(Hello)
}).$mount(root)