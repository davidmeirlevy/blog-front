import { computed } from '@vue/composition-api'

export function locationHref () {
  return computed(() => location.href)
}
