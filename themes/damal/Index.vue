<template>
	<div>
		<template v-if="posts && !posts.length">No posts yet.</template>
		<template v-if="posts && posts.length">
			<TopPostsGroup :posts="topPosts"/>
			<TagsBox :tags="tags"/>
			<PostsList :posts="otherPosts"/>
		</template>
		<Loader v-else/>
	</div>
</template>
<script>
  import TopPostsGroup from './components/TopPostsGroup'
  import PostsList from './components/PostsList'
  import TagsBox from './components/TagsBox'
  import { computed } from '@vue/composition-api'
  import useConfiguration from '../../compositions/app-configuration'
  import Loader from './components/Loader'

  export default {
    props: {
      posts: Array,
      tags: Array
    },
    components: { Loader, TagsBox, PostsList, TopPostsGroup },
    setup (props) {
      const topPosts = computed(() => {
        return props.posts ? props.posts.filter((post, index) => index < 5) : []
      })
      const otherPosts = computed(() => {
        const [a, b, c, d, e, ...otherPosts] = props.posts || []
        return otherPosts
      })
      return {
        topPosts,
        otherPosts,
        config: useConfiguration()
      }
    },
    head () {
      return {
        titleTemplate: `${this.config.titleSuffix}`
      }
    }
  }
</script>

<style>

</style>
