<template>
	<div
		class="myButton font_sm"
		@click="onSubmit()"
		:class="primary ? 'bg_color color_w' : 'bg_color_w color_p border_p'"
    :style="{'backgroundImage': 'url(' + bgurl + ')',backgroundSize:'contain'}"
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
		},
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
	font-size: 0.4rem;
	line-height: 1.5rem;
  font-weight: 500;
  float: right;
  color: #101feb;
  font-family: "microsoft yahei";
  margin-left: 0.5rem;
}
.readOnly {
	pointer-events: none;
}
</style>
