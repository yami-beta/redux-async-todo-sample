import React from 'react';
import VisibleTodoList from './VisibleTodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux Async Todo Sample</h1>
        <VisibleTodoList />
      </div>
    );
  }
}
