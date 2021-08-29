<template>
	<div
		class="mytitle">
		<slot></slot>
		{{ titText }}
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'mytitle',
	props: {
		primary: {
			type: Boolean,
			default: true
		},
		titText: {
			type: String,
			default: ''
		},
		readOnly: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.mytitle {
	font-size: 0.4rem;
	line-height: 1.5rem;
	font-weight: 900;
	float:;
	font-family: "microsoft yahei";
	margin-left: 3rem;
	text-align: center;
}
</style>
