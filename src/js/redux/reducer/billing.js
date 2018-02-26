import * as BILLING_ACTION from '../../constant/billing-action'
import { handleActions } from 'redux-actions'

const initialState = {
  bill: 0
}

export default
  handleActions({
    [BILLING_ACTION.UPDATE_BILLING]: (state, action) => ({
      ...state,
      bill: action.payload
    })
  }, initialState)
