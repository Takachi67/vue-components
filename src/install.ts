// @ts-ignore
import HelloWorld from './components/HelloWorld'

const HelloWorldPlugin = {
    // @ts-ignore
    install(Vue, options = {}) {
        Vue.component('HelloWorld', HelloWorld)
    }
}

export default HelloWorldPlugin
export { HelloWorld }

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
    // @ts-ignore
    window.Vue.use(ComponentLibrary)
}