import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Opinioes from '@/components/Opinioes'
import Travado from '@/components/Travado'
import telaProfessor from '@/components/telaProfessor'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'Opinioes',
      component: Opinioes
    },
    {
	  path:'/telaProfessor',
	  name:'telaProfessor',
	  component: telaProfessor
    }
  ]
})
