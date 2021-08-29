<template>
		<van-tabbar class="foot-tabbar"  v-model="active" active-color="#e0620d" inactive-color="#707070" fixed route>
		  <van-tabbar-item  name="t1" to="/">
		    <span>我要贷款</span>
		    <template #icon="props">

		      <img :src="props.active ? icon.tab1a : icon.tab1" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item  name="t2" to="/index2">
		  <span>招商合作</span>
		  <template #icon="props">

		    <img :src="props.active ? icon.tab2a : icon.tab2" />
		  </template>
		  </van-tabbar-item>
		  <van-tabbar-item name="t3" to="/index3">
		  <span>个人中心</span>
		  <template #icon="props">

		    <img :src="props.active ? icon.tab3a : icon.tab3" />
		  </template>
		  </van-tabbar-item>
		</van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
	  data () {
	    return {
	      active: 't1',
	      icon: {
	        tab1a: require('../../assets/tab1a.png'),
	        tab1: require('../../assets/tab1.png'),
        tab2a: require('../../assets/tab2a.png'),
        tab2: require('../../assets/tab2.png'),
        tab3a: require('../../assets/tab3a.png'),
        tab3: require('../../assets/tab3.png')
	      }
	    }
	  }
}
</script>

<style scoped>
	.foot-tabbar{
		width: 100%;
		height: 1.2rem;
		    border-top: 2px solid #ecebeb !important;
	}
	img{
		width: 0.5rem;
		height: 0.5rem;
	}
	.van-tabbar-item {
		 font-size:0.3rem !important;
	}

</style>
