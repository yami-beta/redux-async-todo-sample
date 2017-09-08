import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoAppReducers from '../reducers';

let store = createStore(todoAppReducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Redux Async Todo Sample</h1>
          <VisibleTodoList />
        </div>
      </Provider>
    );
  }
}
