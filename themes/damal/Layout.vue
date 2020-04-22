<template>
	<div class="app">
		<Header/>
		<nuxt/>
		<Footer/>
		<div id="fb-root"></div>
	</div>
</template>
<script>
  import Footer from './components/Footer'
  import Header from './components/Header'
  import useConfiguration from '../../compositions/app-configuration'

  export default {
    components: {
      Header,
      Footer
    },
    setup () {
      return {
        config: useConfiguration()
      }
    },
    head () {
      return {
        htmlAttrs: {
          lang: this.config.language,
          dir: this.config.direction
        },
        titleTemplate: `%s | ${this.config.titleSuffix}`,
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pontano+Sans&display=swap' }
        ]
      }
    }
  }
</script>
<style lang="scss">
	@import "colors";

	html {
		font-family: 'Pontano Sans', sans-serif;
		font-size: 16px;
	}

	html[dir="rtl"] {
		text-align: right;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: $mainColor;
	}

	a:hover {
		text-decoration: underline;
	}

	@media all and (min-width: 500px) {
		.app {
			margin: 0 auto;
			width: 100%;
		}
	}

	@media all and (min-width: 1200px) {
		.app {
			margin: 0 auto;
			width: 95%;
		}
	}

	.row {
		display: flex;

		> * {
			flex: 1;
		}
	}
</style>
