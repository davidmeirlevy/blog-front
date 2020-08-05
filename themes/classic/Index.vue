<template>
	<div>
		<Loader v-if="!posts"/>
		<template v-else-if="!posts.length">No posts yet.</template>
		<template v-else-if="posts.length">
			<PostsList :posts="posts"/>
			<TagsBox :tags="tags"/>
		</template>
	</div>
</template>
<script>
  import PostsList from './components/PostsList'
  import TagsBox from './components/TagsBox'
  import { useConfiguration } from '../../compositions/app-configuration'
  import Loader from './components/Loader'

  export default {
    props: {
      posts: Array,
      tags: Array
    },
    components: { Loader, TagsBox, PostsList },
    setup () {
      return {
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
