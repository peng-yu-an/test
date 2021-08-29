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
	font-size: 0.4rem;
	line-height: 1.5rem;
	font-weight: 900;
	float: left;
	font-family: "microsoft yahei";
	margin-left: 1.5rem;
	text-align: ;
}
</style>
