import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => <Todo key={i} {...todo} id={i} action={props.action} />)}
    </ul>
  );
};

export default TodoList;
