import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Components
import App from 'circles/App.js'
// Store
import store from './store/store'

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
