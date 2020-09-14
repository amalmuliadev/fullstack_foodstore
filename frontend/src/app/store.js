import { combineReducers, createStore, applyMiddleware, compose } from
'redux';
import thunk from 'redux-thunk';

import authReducer from '../features/Auth/reducer';
import productReducer from '../features/Products/reducer'
// import categoryReducer from '../features/Categories/reducer'
import cartReducer from '../features/Cart/reducer'

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
    auth: authReducer,
    products: productReducer,
    // categories: categoryReducer,
    cart: cartReducer,
});

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

// (6) export store
export default store