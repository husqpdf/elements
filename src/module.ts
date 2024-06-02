import {addComponentsDir, createResolver, defineNuxtModule} from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css.push(
      resolve("./runtime/assets/elements.css")
    )

    addComponentsDir({
      path: resolve("./runtime/components")
    })
  },
})
