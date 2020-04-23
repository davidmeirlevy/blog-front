<template>
	<nuxt-link to="/"><img class="logo" src="/damal.svg" :alt="name"></nuxt-link>
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

	.logo {
		width: 150px;
	}

	@media all and (max-width: 720px) {
		a {
			text-align: center;
			flex: 1;
			padding: 5px 0;
		}

		.logo {
			max-width: 100%;
			max-height: 100px;
		}
	}
</style>
