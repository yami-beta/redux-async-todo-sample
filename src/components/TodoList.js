import React from 'react';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
    </ul>
  );
}

export default TodoList;
