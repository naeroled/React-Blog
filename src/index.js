import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interacts with history library
// Route is a component that we can user within any other react component
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';;

import reducers from './reducers';
import PostsIndex from './components/posts_index';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
