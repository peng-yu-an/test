<template>
	<div class="header">

		  <img @click="goHome" src="../../assets/logo1.png" />
		  <MyTitle :titText="tit"> </MyTitle>
			<MyButton :btnText="btn"></MyButton>
	</div>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant'
import MyTitle from '@/components/common/mytitle.vue'
import MyButton from '@/components/common/mybutton.vue'
import $ from 'jquery';
import Mybutton from '@/components/common/mybutton.vue'


Vue.use(Col)
Vue.use(Row)
export default {
	  name: 'titlebar',
		 components: {
			MyTitle,
			Mybutton
	  },
	  data () {
	    return {
				tit:"笔记",
				btn:"登录"
	    }
	  },
	  methods: {
			goHome(){
				this.$router.push('/homepage');
			},
	    save () {
	      this.$refs.child1Container.getReObjectPage()
	    },
	    parentEvennt (data) {
	      this.$refs.child1Container.getReObjectPage(data.stage, data.name)
	    }
	  }
}
</script>

<style scoped >
	.header{
		height: 1.5rem;
		background: white;
		width: 100vw;
		margin:0;
		overflow: hidden;
	}
	.project_logo{
		float: left;
		margin-left: 1.5rem;
	}
	.divid_line{
		font-size: 0.4rem;
		    line-height: 1.5rem;
			font-weight: 600;
			float: left;
			margin-left: 0.1.5rem;
	}
	img{
		width: 1rem;
		height: 1rem;
		float: left;
		line-height: 1.5rem;
		margin-left: 0.3rem;
		margin-top: 0.25rem;
	}
	.small-title{
		font-size: 0.4rem;
		    line-height: 1.5rem;
			font-weight: 500;
			float: left;
			color: #999999;
			font-family: "microsoft yahei";
			margin-left: 0.1.5rem;
	}
</style>
