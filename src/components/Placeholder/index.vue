<template>
  <figure :class="[height, 'skeleton']">{{stuff}}</figure>
</template>
<script>
// <img alt="photo" src="@/assets/img/jackson-david-buSt22V0JzU-unsplash.jpg" class=""> 
// 1. make this into it's component
// 2. animate the bar 
export default {
	props:{
		height: {
			type: String,
			default: 'medium'
		},
		// img:{
		// 	re
		// }
	},
	setup(props){

	},
	data(){
		return{
			stuff: null
		}
	}
}
</script>
<style scoped>
@import '../../assets/global.css';
@import './index.css';
</style>