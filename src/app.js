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

//单元测试 chai
import chai from 'chai'
const expect = chai.expect;
const  constrcuter = Vue.extend(button);
 const vm  = new constrcuter({
     propsData:{
         icon : 'icon-setting'
     }
 });
 vm.$mount('#test');
 let useElement = vm.$el.querySelector('use');
 let href = useElement.getAttribute('xlink:href');
 expect(href).to.eq('#icon-setting');


// chai spies 监听函数的调用
import spies from 'chai-spies'
chai.use(spies)
let spy =chai.spy(function () {
    console.log(222)
});
vm.$on('click',spy)
vm.$el.click()
expect(spy).to.have.been.called();