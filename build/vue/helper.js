import { getBigVersion, getLocationHref, getTimestamp, variableTypeDetection } from '../utils'
import { ERRORTYPES, BREADCRUMBTYPES } from '../shared'
import { breadcrumb, transportData } from '../core'
export function handleVueError(err, vm, info, level, breadcrumbLevel, Vue) {
  const version = Vue === null || Vue === void 0 ? void 0 : Vue.version
  let data = {
    type: ERRORTYPES.VUE_ERROR,
    message: `${err.message}(${info})`,
    level,
    url: getLocationHref(),
    name: err.name,
    stack: err.stack || [],
    time: getTimestamp()
  }
  if (variableTypeDetection.isString(version)) {
    console.log('getBigVersion', getBigVersion(version))
    switch (getBigVersion(version)) {
      case 2:
        data = Object.assign(Object.assign({}, data), vue2VmHandler(vm))
        break
      case 3:
        data = Object.assign(Object.assign({}, data), vue3VmHandler(vm))
        break
      default:
        return
        break
    }
  }
  breadcrumb.push({
    type: BREADCRUMBTYPES.VUE,
    category: breadcrumb.getCategory(BREADCRUMBTYPES.VUE),
    data,
    level: breadcrumbLevel
  })
  transportData.send(data)
}
function vue2VmHandler(vm) {
  let componentName = ''
  if (vm.$root === vm) {
    componentName = 'root'
  } else {
    const name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name
    componentName =
      (name ? 'component <' + name + '>' : 'anonymous component') +
      (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '')
  }
  return {
    componentName,
    propsData: vm.$options && vm.$options.propsData
  }
}
function vue3VmHandler(vm) {
  let componentName = ''
  if (vm.$root === vm) {
    componentName = 'root'
  } else {
    console.log(vm.$options)
    const name = vm.$options && vm.$options.name
    componentName = name ? 'component <' + name + '>' : 'anonymous component'
  }
  return {
    componentName,
    propsData: vm.$props
  }
}
