<template>
	<Post :post="post"/>
</template>
<script>
  import Post from '~/.current_theme/Post'
  import { useFetchPost, usePostState } from '../../compositions/post-state'

  export default {
    components: { Post },
    asyncData (context) {
      return useFetchPost(context.store, context.route, context.error)
    },
    setup () {
      return usePostState()
    },
    head () {
      return {
        title: this.post.title + ' - ' + this.post.category.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.short ?
              this.post.short
                .substr(0, 100)
                .replace(/<[^>]*>/g, '') :
              this.post.title
          },
          { hid: 'keywords', name: 'keywords', content: this.post.tags.join(', ') },
        ]
      }
    }
  }
</script>
