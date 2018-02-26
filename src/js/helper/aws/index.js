import { CostExplorer } from 'aws-sdk'

const responseHandler = (resolve, reject) => (error, data) => {
  if (error) {
    console.log(error)
    reject(error)
  } else {
    resolve(data)
  }
}


export const getCostAndUsage = (costExplorer, params) =>
  new Promise((resolve, reject) => {
    console.log('getCostAndUsage')

    costExplorer.delete({
      Key,
      TableName
    }, responseHandler(resolve, reject))
  })
