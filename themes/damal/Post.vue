<template>
	<div class="post">
		<PostBreadcrumbs :post="post"/>
		<article>
			<h1>{{post.title}}</h1>
			<p>
				<small>{{authors}} | {{post.created | dateTime}}</small>
			</p>
			<section class="post-content"
			         v-for="(content, index) in post.contents"
			         :key="index"
			         v-html="content">
			</section>
		</article>
		<div class="tags-container" v-if="post.tags.length"><div>Related tags:&nbsp;</div><Tags :tags="post.tags"/></div>
		<SharePost :post="post"/>
		<PostComments :post="post"/>
	</div>
</template>

<script>
  import PostBreadcrumbs from './components/PostBreadcrumbs'
  import SharePost from './components/SharePost'
  import Tags from './components/Tags'
  import PostComments from './components/PostComments'
  import { computed } from '@vue/composition-api'

  export default {
    props: {
      post: Object,
    },
    components: { PostComments, Tags, SharePost, PostBreadcrumbs },
    setup(props) {
      return {
        authors: computed(() => props.post.authors ? props.post.authors.map(a => a.name).join(', ') : '')
      }
    },
    head () {
      return {
        title: this.post.title + ' - ' + this.post.category.name,
        meta: [
          { vmid: 'description', name: 'description', content: this.post.title }
        ]
      }
    }
  }
</script>

<style scoped>
	.post {
		padding: 10px;
	}

	.post-content {
		padding: 10px 0;
		line-height: 150%;
	}
	.post-content p {
		padding: 10px 0;
	}

	.tags-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}
</style>
