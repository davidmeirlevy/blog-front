<template>
	<Post :post="metadata"/>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  import { name, DATA } from '../../store/post/consts'
  import Post from '~/.current_theme/Post'

  const { mapState } = createNamespacedHelpers(name)

  export default {
    middleware: 'load-post',
    computed: mapState({ metadata: DATA.METADATA }),
    components: { Post },
    metaInfo() {
      return {
        title () {
          return this.metadata.title
        },
        meta: [
          { hid: 'description', name: 'description', content: this.metadata.title }
        ]
      }
    }
  }
</script>
