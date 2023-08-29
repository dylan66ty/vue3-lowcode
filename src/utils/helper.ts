export const linkTo = (url: string, target = '_blank') => {
  const node = document.createElement('a')
  node.href = url
  node.target = target
  node.click()
  node.remove()
}

export const storage: {
  getItem: (key: string) => any
  setItem: (key: string, value: any) => void
  removeItem: (key: string) => void
} = {
  getItem: (key: string) => {
    const val = localStorage.getItem(key)
    try {
      return JSON.parse(val as string)
    } catch (error) {
      return val
    }
  },
  setItem: (key: string, value: any) => {
    if (typeof value !== null && typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key)
  }
}

export const findLastIndex = <T>(
  arr: T[],
  callback: (item?: T, index?: number, origin?: T[]) => boolean
): number => {
  let index = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback(arr[i], i, arr)) {
      index = i
      break
    }
  }
  return index
}

export const parseQuery = (url: string) => {
  const RE = /([^&?=]+)=([^&?=]*)/g
  const ret: Record<string, string> = {}
  url.replace(RE, (_all: any, key: any, value: any) => {
    ret[key] = decodeURIComponent(value)
    return ''
  })
  return ret
}

export const params2query = (params: Record<string, string | number>) => {
  return Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')
}

export const getProp = (target: any, path: any, defVal?: any) => {
  let result
  try {
    path = path.replace(/\[(\w+)\]/g, '.$1')
    result = path
      .split('.')
      .filter((f: string) => f !== '')
      .reduce((a: any, v: string) => {
        return a[v]
      }, target)
    if (result === undefined) {
      result = defVal
    }
  } catch (e) {
    result = defVal
  }
  return result
}

export const composeAsync = (...fns: Function[]) =>
  fns.reduce(
    (a, v) =>
      async (...args: any[]) =>
        a(await v(...args))
  )

export const pipeAsync = (...fns: Function[]) =>
  fns.reduceRight(
    (a, v) =>
      async (...args: any[]) =>
        a(await v(...args))
  )
