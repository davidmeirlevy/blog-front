import Vue from 'vue'
import { computed } from '@vue/composition-api'

const configuration = Vue.observable({
  loaded: false,
  name: '',
  logoUrl: '',
  description: '',
  keywords: '',
  slogan: '',
  language: 'en',
  direction: 'ltr',
  titleSuffix: ''
})

export function fetchConfiguration ($axios) {
  if (configuration.loaded) {
    return Promise.resolve()
  }
  return $axios.$get(`api/configurations/app-configuration`)
    .then(({ metadata }) => {
      Object.assign(configuration, metadata)
      configuration.titleSuffix = `${configuration.name} - ${configuration.slogan}`
    })
    .catch(() => null)
    .finally(() => configuration.loaded = true)
}

export function useConfiguration () {
  return computed(() => configuration)
}
