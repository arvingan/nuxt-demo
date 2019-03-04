<template>
	<div class="header-box">
		<div>header</div>
		<div>{{$store.state.counter}}</div>
		<div><button @click="addcounter">+</button><button @click="delcounter">-</button></div>
		<div>
			<!--无参数-->
			<nuxt-link :to="{path:'/'}">index</nuxt-link>
			<!--普通home-->
			<nuxt-link :to="{path:'/pc/home'}">home</nuxt-link>
			<!--内部传参的home，刷新消失-->
			<nuxt-link :to="{name:'pc-home',params:{homeid:1234321}}">homeid</nuxt-link>
			<!--默认id，动态路由传参-->
			<nuxt-link :to="{name:'pc-user-id',params:{id:1}}">userid</nuxt-link>
			<!--默认id2，动态路由传参-->
			<nuxt-link :to="{path:'/pc/user/12345'}">userid12345</nuxt-link>
			<!--username，动态路由传参-->
			<nuxt-link :to="{name:'pc-name-username',params:{username:'admin'}}">username</nuxt-link>
			<!--全部通过?传参-->
			<nuxt-link :to="{path:'/pc/list/home',query:{page:1,limit:10}}">list</nuxt-link>
		</div>
		
		
	</div>
	
</template>

<script>
	export default {
		methods: {
			addcounter(){
				this.$store.state.counter++;
			},
			delcounter(){
				this.$store.state.counter--;
			},
		},
	}
</script>

<style>
	.header-box{
		text-align: center;
	}
</style>