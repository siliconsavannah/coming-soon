import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/main/App'
import Soon from './components/coming_soon/Soon'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Soon}/>
		</Route>
	</Router>,
  document.getElementById('savannah_root')
);
