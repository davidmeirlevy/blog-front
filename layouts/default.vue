<template>
	<Layout/>
</template>
<script>
  import Layout from '~/.current_theme/Layout'
  import { useConfiguration } from '../compositions/app-configuration'

  export default {
    components: {
      Layout
    },
    middleware: 'layout-data',
    setup () {
      return { config: useConfiguration() }
    },
    head () {
      return {
        htmlAttrs: {
          lang: this.config.language,
          dir: this.config.direction
        },
        titleTemplate: `%s | ${this.config.titleSuffix}`,
        meta: [
          { hid: 'description', name: 'description', content: this.config.description },
          { hid: 'keywords', name: 'keywords', content: this.config.keywords }
        ]
      }
    }
  }
</script>

