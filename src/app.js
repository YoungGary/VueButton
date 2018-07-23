/**
 * Created by lim on 2018/7/17.
 */



import  Vue from 'vue'
import  button from './button'
import icon from './iconj'

Vue.component('g-button',button)
Vue.component('g-icon',icon)
new Vue({
    el:'#app',
    data:{
        loading:false
    }
})


