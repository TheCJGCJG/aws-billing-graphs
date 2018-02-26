import '../../css/App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import { getBilling } from '../action/billing'

class App extends React.Component {

  componentWillMount() {
    this.props.getBilling()
  }

  render() {
    const {
      bill
    } = this.props

    return (
      <div className="App">
        <p className="App-intro">
          {bill}
        </p>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    bill: state.billing.bill
  }),
  (dispatch) => ({
    getBilling: bindActionCreators(getBilling, dispatch)
  })
)(App)
