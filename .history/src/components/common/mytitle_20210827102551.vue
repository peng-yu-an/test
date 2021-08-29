<template>
	<div
		class="mytitle font_sm"
		:class="primary ? 'bg_color color_w' : 'bg_color_w color_p border_p'">
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
	margin: 1rem 2.4rem;
	border-radius: 4px;
	line-height: 4.8rem;
	height: 4.8rem;
	text-align: center;
	font-family: Roboto-Medium;
}
.readOnly {
	pointer-events: none;
}
</style>
