<template>
		<div class="card-list">
			<div v-for="(image, index) in images" :key="index" class="img-box">
				<img  :src="image"/>
			</div>

		</div>

</template>

<script>
export default {
		  data () {
		    return {
		      images: [
		        require('../assets/p1.png'),
        require('../assets/p2.png'),
        require('../assets/p3.png'),
        require('../assets/p4.png'),
        require('../assets/p5.png'),
        require('../assets/p6.png')

		      ]
		    }
		  }
}
</script>

<style scoped>

.card-list{
	width: 97%;

	height: auto;
	overflow: hidden;
	padding: 0.2rem;
	}
	.img-box{

		width: 50%;
		height: 2rem;
		float: left;
		margin:0.2rem auto auto 0rem ;

	}
   img{

	   width: 96%;
	   height: 100%;
	   /* margin: auto; */
	   margin-right: 0.2rem;
	   border-radius: 0.1rem;

   }
</style>
