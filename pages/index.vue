<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        demo
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  mounted() {
		this.testFun();
	},
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

