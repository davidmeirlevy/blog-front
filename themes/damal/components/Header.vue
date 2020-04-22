<template>
	<header>
		<div class="top-header">
			<Logo :name="config.name"/>
			<SearchForm class="search-form"/>
		</div>
		<MainMenu/>
	</header>
</template>
<script>
  import Logo from './Logo'
  import SearchForm from './SearchForm'
  import MainMenu from './MainMenu'

  export default {
  	props: {
  		config: Object,
    },
    components: {
      Logo,
      SearchForm,
      MainMenu,
    }
  }
</script>
<style scoped lang="scss">
	header {
		display: flex;
		flex-direction: column;
	}

	.top-header {
		display: flex;
		align-items: center;
	}

	.top-header .search-form {
		flex: 1;
	}

	@media all and (max-width: 720px) {
		header {
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
		.top-header {
			width: 100%;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
</style>
