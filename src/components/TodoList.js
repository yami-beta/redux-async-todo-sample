import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.action.get();
  }

  render() {
    return (
      <ul>
        {this.props.todos.payload.map((todo, i) => <Todo key={i} {...todo} id={i} action={this.props.action} />)}
      </ul>
    );
  }
}

export default TodoList;
