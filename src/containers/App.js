import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux Async Todo Sample</h1>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
