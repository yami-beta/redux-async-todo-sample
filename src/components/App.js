import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['app']}>
        <h1>Redux Async Todo Sample</h1>
        <div className="app-inner">
          <AddTodo className="add-todo" />
          <VisibleTodoList className="visible-todo-list" />
        </div>
      </div>
    );
  }
}
