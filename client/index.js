import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

import routes from './routes'

render(
  routes,
  document.getElementById('mount')
)