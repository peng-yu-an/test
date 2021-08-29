<template>
	<div class="content">
		<van-swipe class="my-swipe"   indicator-color="white" >
		  <van-swipe-item v-for="(image, index) in images" :key="index" >
			  <img :src="image" />
		  </van-swipe-item>
		 <!-- <van-swipe-item>2</van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		  <van-swipe-item>4</van-swipe-item> -->
		</van-swipe>
	</div>

</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
	  data () {
	    return {
	      images: [
	        'https://seopic.699pic.com/photo/40166/4294.jpg_wh1200.jpg',
	        'https://seopic.699pic.com/photo/40186/4433.jpg_wh1200.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3218153526,1041247649&fm=26&gp=0.jpg'
	      ]
	    }
	  }
}
</script>

<style scoped>
	.content{
		width: 100%;
		margin: auto;

	}
	.my-swipe .van-swipe-item {
    width: 10rem !important;
    color: #fff;
    /* margin: auto; */
    border-radius: 0.2rem;
    overflow: hidden;
    text-align: center;

	  }
.van-swipe__track{
	margin-left: -9rem !important;
}
	  img{
		  text-align: center;
		  width: 95%;
		  height: 3rem;
		  margin: auto;
	  }
</style>
