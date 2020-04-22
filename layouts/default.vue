<template>
	<Layout/>
</template>
<script>
  import Layout from '~/.current_theme/Layout'
  import useConfiguration from '../compositions/app-configuration'

  export default {
    components: {
      Layout
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
        meta: [
          {hid: 'description', name: 'description', content: this.config.titleSuffix}
        ]
      }
    }
  }
</script>

