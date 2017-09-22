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

  const onClick = (event) => {
    event.preventDefault();
    const { id } = props;
    props.action.delete(id);
  };

  return (
    <li className="todolist__item">
      <input id={`todo-${props.id}`} type="checkbox" checked={props.complete} onChange={onChange} />
      <label htmlFor={`todo-${props.id}`}>
        {props.text}
        <button className="todo__delete" onClick={onClick}>x</button>
      </label>
    </li>
  );
};

export default Todo;
