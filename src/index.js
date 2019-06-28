import AshButton from './components/AshButton.vue'

const install = (Vue) => {
  Vue.component(AshButton.name, AshButton)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  AshButton
}

export default install
