import './App.css'
import Header from './containers/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetails'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={ProductListing} />
					<Route path='/product/:productId' component={ProductDetail} />
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
