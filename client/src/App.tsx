import './App.css'
import ProductsPage from './products/ProductsPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Nav from './components/Nav'
import CartPage from './orders/CartPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Route path="/" exact component={MainPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/cart" component={CartPage} />
      </Router>
    </div>
  )
}

export default App