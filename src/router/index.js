import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import CnodeIndex from '@/view/cnode/index'
import CnodeTopic from '@/view/cnode/topic'
import CnodeList from '@/view/cnode/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cnode',
      component: CnodeIndex
    },
    {
      path: '/cnode/topic',
      component: CnodeTopic
    },
    {
      path: '/cnode/list',
      component: CnodeList
    }
  ]
})
