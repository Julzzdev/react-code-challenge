import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './common/containers/App'
import './styles/_main.scss'
import Routes from './routes'
import { Provider } from './common/context/theme'

ReactDOM.render(
  <Provider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)
