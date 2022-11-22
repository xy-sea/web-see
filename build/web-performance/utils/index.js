import { pathToRegexp } from 'path-to-regexp'
export const roundByFour = (num, digits = 4) => {
  try {
    return parseFloat(num.toFixed(digits))
  } catch (err) {
    return num
  }
}
export const convertToMB = (bytes) => {
  if (typeof bytes !== 'number') {
    return null
  }
  return roundByFour(bytes / Math.pow(1024, 2))
}
export const afterLoad = (callback) => {
  if (document.readyState === 'complete') {
    setTimeout(callback)
  } else {
    addEventListener('pageshow', callback)
  }
}
export const beforeUnload = (callback) => {
  window.addEventListener('beforeunload', callback)
}
export const unload = (callback) => {
  window.addEventListener('unload', callback)
}
export const validNumber = (nums) => {
  if (Array.isArray(nums)) {
    return nums.every((n) => n >= 0)
  } else {
    return nums >= 0
  }
}
export const isIncludeArr = (arr1, arr2) => {
  if (!arr1 || arr1.length === 0) {
    return false
  }
  if (!arr2 || arr2.length === 0) {
    return false
  }
  if (arr1.length > arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2 === null || arr2 === void 0 ? void 0 : arr2.includes(arr1[i]))) {
      return false
    }
  }
  return true
}
export const isEqualArr = (arr1, arr2) => {
  if (!arr1 || arr1.length === 0) {
    return false
  }
  if (!arr2 || arr2.length === 0) {
    return false
  }
  if (arr1.length !== arr2.length) {
    return false
  }
  const sortArr1 = arr1.sort()
  const sortArr2 = arr2.sort()
  return sortArr1.join() === sortArr2.join()
}
export const getApiPath = (url) => {
  var _a
  const reg = /(?:http(?:s|):\/\/[^\/\s]+|)([^#?]+).*/
  if (url) {
    return (_a = url.match(reg)) === null || _a === void 0 ? void 0 : _a[1]
  }
  return ''
}
export const isExistPath = (paths, target) => {
  const regArr = paths.map((path) => pathToRegexp(path))
  for (let i = 0; i < regArr.length; i++) {
    if (regArr[i].exec(target)) {
      return true
    }
  }
  return false
}
