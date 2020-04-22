<template>
	<div class="post">
		<PostBreadcrumbs :post="post"/>
		<article>
			<h1>{{post.title}}</h1>
			<p>
				<small>{{authors}} | {{post.created | dateTime}}</small>
			</p>
			<div v-if="post.thumbnail" class="thumbnail-container"><img :src="post.thumbnail" :alt="post.title"></div>
			<section class="post-content"
			         v-for="(content, index) in post.contents"
			         :key="index"
			         v-html="content">
			</section>
		</article>
		<div class="tags-container" v-if="post.tags.length">
			<div>Related tags:&nbsp;</div>
			<Tags :tags="post.tags"/>
		</div>
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
    setup (props) {
      return {
        authors: computed(() => props.post.authors ? props.post.authors.map(a => a.name).join(', ') : '')
      }
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

<style scoped lang="scss">
	.post {
		padding: 10px;
	}

	.thumbnail-container {
		position: relative;
		height: 0;
		overflow: visible;
		max-width: 100%;
		opacity: 20%;
		z-index: -1;
		text-align: center;

		img {
			max-width: 100%;
			max-height: 400px;
		}
	}

	.post-content {
		padding: 10px 0;
		line-height: 150%;
	}
	.post-content /deep/ p {
		padding: 10px 0;
	}

	.tags-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}
</style>
