import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import VdemoIndex from '@/view/vdemo/index'
import CnodeIndex from '@/view/cnode/index'
import CnodeTopic from '@/view/cnode/topic'
import CnodeList from '@/view/cnode/list'

import VexamIndex from '@/view/vexam/index'
import VexamCenter from '@/view/vexam/center'
import VexamAct from '@/view/vexam/activity'
import VexamGraduate from '@/view/vexam/graduate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vdemo',
      component: VdemoIndex
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
    },
    {
      path: '/vexam',
      component: VexamIndex
    },
    {
      path: '/vexam/center',
      component: VexamCenter
    },
    {
      path: '/vexam/activity',
      component: VexamAct
    },
    {
      path: '/vexam/graduate',
      component: VexamGraduate
    }
  ]
})
