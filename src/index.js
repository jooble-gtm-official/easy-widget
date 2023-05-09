import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import JayJayBanner from './teleporthq/components/jay-jay-banner'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route component={JayJayBanner} exact path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
