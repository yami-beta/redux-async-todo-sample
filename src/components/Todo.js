import React from 'react';

const Todo = (props) => {
  const onChange = (event) => {
    const { id, text, complete } = props;
    props.action.toggleComplete({
      id,
      text,
      complete,
    });
  };

  return (
    <li>
      <input id={`todo-${props.id}`} type="checkbox" checked={props.complete} onChange={onChange} />
      <label htmlFor={`todo-${props.id}`}>{props.text}</label>
    </li>
  );
};

export default Todo;
