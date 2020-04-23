<template>
	<Post :post="metadata"/>
</template>
<script>
  import Post from '~/.current_theme/Post'
  import usePostState from '../../compositions/post-state'

  export default {
    components: { Post },
    setup () {
      return usePostState()
    },
    metaInfo () {
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
