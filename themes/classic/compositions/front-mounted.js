import { onMounted, ref } from '@vue/composition-api'

export function isFrontMounted () {
  const mounted = ref(false)
  onMounted(() => {
    mounted.value = true
  })

  return mounted;
}
