import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import Myproducts from './container/productDescription';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Collections from './container/collection';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import productsReducer from "./entities/products/reducer/reducer";
import cartReducer from "./entities/cart/reducer/reducer";
import Cart from './container/cartPage/cart';
const Combined = combineReducers({
  products:productsReducer,
  cart:cartReducer
})

const store = createStore(Combined,applyMiddleware(thunk))

const app = (
  <Provider  store={store}>
  <Router>
      <div>
        <Switch>
          <Route exact path="/products/:id" component={Myproducts} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Collections} />
          <Route exact path="/cart" component={Cart} />
          </Switch>
      </div>
  </Router>
  </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();