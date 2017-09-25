import React from 'react';
import Todo from './Todo';
import styles from './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.action.get();
  }

  render() {
    return (
      <ul className={`${styles['mdc-list']} ${styles['mdc-list--avatar-list']}`}>
        {this.props.todos.payload.map((todo, i) => <Todo key={i} {...todo} id={i} action={this.props.action} />)}
      </ul>
    );
  }
}

export default TodoList;
