import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import 'upkit/dist/style.min.css'
import { Provider } from 'react-redux';

import store from './app/store';
import Home from './pages/Home';

import { listen } from './app/listener';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Login from './pages/Login';
import UserAddressAdd from './pages/UserAddressAdd';
import UserAddress from './pages/UserAdddress';
import ManajemenProduk from './pages/ManajemenProduk';
import Checkout from './pages/Checkout';
import Invoice from './pages/Invoice'
import UserAccount from './pages/UserAccount';
import UserOrders from './pages/UserOrders';
import Logout from './pages/Logout';


import { getCart } from './api/cart';
import GuardRoute from './components/GuardRoute';
import GuestOnlyRoute from './components/GuestOnlyRoute';
import GuardAdminRoute from './components/GuardAdminRoute';

function App() {
  React.useEffect(() => {
    listen();
    getCart();
  }, [])
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <GuardRoute path="/logout">
              <Logout />
            </GuardRoute>
            <GuardRoute path="/pesanan">  
                <UserOrders/>
            </GuardRoute>
            <GuardRoute path="/account">       
                <UserAccount />         
            </GuardRoute>
            <GuardRoute path="/invoice/:order_id">
                <Invoice />
            </GuardRoute>
            <GuardRoute path="/checkout">      
                <Checkout />       
            </GuardRoute>
            <GuardRoute path="/alamat-pengiriman/tambah">
              <UserAddressAdd />
            </GuardRoute>
            <GuardRoute path="/alamat-pengiriman">
                <UserAddress />            
            </GuardRoute>
            <GuardAdminRoute path="/manajemen-produk">
                <ManajemenProduk />            
            </GuardAdminRoute>
            <GuestOnlyRoute path="/register">
              <Register />
            </GuestOnlyRoute>
            <GuestOnlyRoute path="/register/berhasil">
              <RegisterSuccess />
            </GuestOnlyRoute>
            <GuestOnlyRoute path="/login" >
              <Login />
            </GuestOnlyRoute>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
