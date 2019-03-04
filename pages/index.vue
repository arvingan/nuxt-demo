<template>
	<section class="container">
		<div>
			<app-logo></app-logo>
			<div>本地渲染数据：{{info}}</div>
			<div><button @click="addcounter">+</button><button @click="delcounter">-</button></div>
		</div>
	</section>
</template>

<script>
	import AppLogo from '~/components/AppLogo.vue'
	import axios from 'axios'
	export default {
		components: {
			AppLogo
		},
		data() {
			return {
				data: {
					age: '',
					interest: '',
					name: ''
				}
			}
		},
		methods: {
			addcounter(){
				this.$store.state.counter++;
			},
			delcounter(){
				this.$store.state.counter--;
			},
			getAjaxDemo() {
				this.axiosFun('bins/1hhwx2', 'get').then(res => {
					console.log(res);
					this.data = res;
				}), err => {
					console.log(err);
				}
			}
		},
		mounted() {
			this.testFun();
			//this.getAjaxDemo();

		},
		created() {

		},
		async asyncData({app}) {
			
			let {data} = await app.$axios.get('http://api.myjson.com/bins/haz1y');
			console.log('1')
			return {info: data}
		}
	}
</script>

<style>
	.container {
		min-height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>