import ls from 'local-storage'

export const getKey = (key) =>
  new Promise((resolve, reject) => {
    resolve(ls.get(key))
  })

export const putKey = (key, value) =>
  new Promise((resolve, reject) => {
    resolve(ls.set(key, value))
  })
