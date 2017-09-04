import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoAppReducers from './reducers';
import VisibleTodoList from './containers/VisibleTodoList';

let store = createStore(todoAppReducers);

const App = (props) => {
  return (
    <VisibleTodoList />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('wrapper')
);
