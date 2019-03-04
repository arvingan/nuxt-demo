<template>
	<section class="container">
		<div>
			<app-logo></app-logo>
			<div>{{info.demo}}</div>
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

		},
		created() {

		},
		async asyncData() {
//			const cookieValObject = { param1: 'value1', param2: 'value2' }
// 
//			// server
//			app.$cookies.set('cookie-name', 'cookie-value', {
//			  path: '/',
//			  maxAge: 60 * 60 * 24 * 7
//			});
//			const cookieRes = app.$cookies.get('cookie-name');
//			return {
//				cookieRes: cookieRes
//			}
//			this.axiosFun('bins/haz1y', 'get').then(res => {
//					console.log(res);
//					this.data = res;
//				}), err => {
//					console.log(err);
//				}
			let {
				data
			} = await axios.get('http://api.myjson.com/bins/haz1y')
			return {
				info: data
			}
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