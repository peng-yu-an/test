<template>
	<div
		class="myButton font_sm"
		@click="onSubmit()"
		:class="primary ? 'bg_color color_w' : 'bg_color_w color_p border_p'"
    :style="{'backgroundImage': 'url(' + bgurl + ')',backgroundSi}"
	>
		<!-- :class="readOnly ? 'readOnly' : ''" // 是否只读 -->
		<slot></slot>
		{{ btnText }}
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'myButton',
	// props: [ 'btnText', 'primary'],
	props: {
		primary: {
			type: Boolean,
			default: true
		},
		btnText: {
			type: String,
			default: ''
		},
    bgurl: {
			type: String,
			default: ''
		},,
		readOnly: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onSubmit() {
			this.$emit('clickBtn');
		}
	}
};
</script>

<style scoped>
.myButton {
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
