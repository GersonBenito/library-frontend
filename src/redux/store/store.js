import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { setBookReducer } from '../reducers/book-reducer';
import { setUserReducer } from '../reducers/user-reducer';

const reducers = combineReducers({
    user: setUserReducer,
    book: setBookReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore( 
    reducers,
    composeEnhancers( applyMiddleware( thunk ) )
);