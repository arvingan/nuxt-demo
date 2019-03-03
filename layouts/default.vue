<template>
	<div>
		<div><app-header /></div>
		<nuxt/>
		<div><app-footer /></div>
	</div>
</template>
<script>
	import AppHeader from '~/components/public/header.vue';
	import AppFooter from '~/components/public/footer.vue';
	export default {
		components: {
			AppHeader,
			AppFooter
		}
	}
</script>
<style>

</style>