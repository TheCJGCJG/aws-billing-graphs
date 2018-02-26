import * as billing from '../api/billing'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import history from './history'

export default applyMiddleware(
  history,
  thunk.withExtraArgument({
    billing
  })
)
