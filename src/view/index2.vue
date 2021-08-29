<template>
	<div class="content">
		<Header />
		<div class="main-container">
			这是第二页
		</div>
		<Footer />

	</div>
</template>

<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import Swipper from './imgswipper.vue'
import CardList from './card1.vue'
import ellipseList from './card2.vue'
import blockList from './card3.vue'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
	  name: 'app',
	  components: {
	    Header,
    Footer,
    Swipper,
    CardList,
    ellipseList,
    blockList
	  }
}
</script>

<style scoped>
	.content{
		width: 100vw;
		height: auto;
		overflow-y: auto;
	}
	.main-container{
		width: 100%;
		height: auto;

		/* height: 10rem; */
	}
</style>
