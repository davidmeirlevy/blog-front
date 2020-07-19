import { getCurrentInstance } from '@vue/composition-api'

export function getPostLinkParams (post) {
  return {
    name: 'category-post',
    params: {
      post: post.path, category: post.category.path || post.category
    },
  }
}

export function usePostNavigation () {
  const { $router } = getCurrentInstance()
  return (post) => $router.push(getPostLinkParams(post))
}
