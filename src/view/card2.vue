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
		       require('../assets/p8.png')
		      ]
		    }
		  }
}
</script>

<style scoped>
	.card-list{
		padding:0.1rem;
		/* margin-top: 0.2rem; */
	}
	.img-box{

		width: 98%;
		height: 2rem;
		padding:0 0.1rem;
	}
   img{
	   border-radius: 2rem;

	   width: 100%;
	   height: 2rem;
   }
</style>
