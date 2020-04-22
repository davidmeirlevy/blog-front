<template>
	<nuxt-link to="/">{{name}}</nuxt-link>
</template>
<script>
	export default {
		props: {
			name: String
		}
	}
</script>
<style scoped>
	a {
		display: block;
		padding: 10px 0;
	}

	@media all and (max-width: 720px) {
		a {
			text-align: center;
			flex: 1;
			padding: 5px 0;
		}
	}
</style>
