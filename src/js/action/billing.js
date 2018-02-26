import * as BILLING_ACTION from '../constant/billing-action'
import { createAction } from 'redux-actions'

const updateBillingState = createAction(BILLING_ACTION.UPDATE_BILLING)

export const getBilling = (arg1, arg2) => async (dispatch, getState, { billing }) => {
  // do something with billing.getBill (see redux/api/billing, this is a reference to that)
  // when you're done you do
  const newBill = 100

  dispatch(updateBillingState(newBill))
}
