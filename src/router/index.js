import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/index.vue'
import HelloWorld2 from '@/view/index2.vue'
import HelloWorld3 from '@/view/index3.vue'
import Login from '@/view/index2.vue'
import HomePage from '@/view/homepage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/index2',
	  name: 'HelloWorld2',
	  component: HelloWorld2
	},
	{
	  path: '/index3',
	  name: 'HelloWorld3',
	  component: HelloWorld3
	},
		{
		path: '/login',
		name: 'Login',
		component: Login
	},

	// 登录成功页面
	{
		path: '/homepage',
		name: 'HomePage',
		component: HomePage
	}
  ]
})
