import Vue from 'vue'
import Router from 'vue-router'
import Rresource from 'vue-resource'
import Hello from 'components/Hello'
import sendmessage from 'components/sendmessage'
import data from 'components/data'

Vue.use(Router)
Vue.use(Rresource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sendmessage',
      name:'sendmessage',
      component: sendmessage
    },
    {
      path: '/data',
      name:'data',
      component: data
    }
  ]
})
