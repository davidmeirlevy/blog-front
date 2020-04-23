import Vue from 'vue'
import { onServerPrefetch, getCurrentInstance } from '@vue/composition-api'

const configuration = Vue.observable({
  loaded: false,
  name: '',
  description: '',
  language: 'en',
  direction: 'ltr',
  titleSuffix: ''
})

let promise

function getConfiguration ($axios) {
  if (promise || configuration.loaded) {
    return promise || Promise.resolve(configuration)
  }
  promise = $axios
    .$get(`api/configurations/app-configuration`)
    .then(config => {
      Object.assign(configuration, config.metadata)
      configuration.titleSuffix = `${configuration.name} - ${configuration.description}`
    })
    .catch(() => null)
    .finally(() => configuration.loaded = true)
  return promise
}

export default function useConfiguration () {
  const { $axios } = getCurrentInstance()

  const promise = getConfiguration($axios)

  onServerPrefetch(() => promise)

  return configuration
}
