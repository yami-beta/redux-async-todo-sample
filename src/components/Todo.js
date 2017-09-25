import React from 'react';
import styles from './Todo.css';

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
    <li className={`${styles['mdc-list-item']} ${styles['mdc-form-field']}`}>
      <div className={styles['mdc-checkbox']}>
        <input id={`todo-${props.id}`} className={`${styles['mdc-list-item__start-detail']} ${styles['mdc-checkbox__native-control']}`} type="checkbox" checked={props.complete} onChange={onChange} />
        <div className={`${styles['mdc-checkbox__background']}`}>
          <svg className={styles['mdc-checkbox__checkmark']}
            viewBox="0 0 24 24">
            <path className={styles['mdc-checkbox__checkmark__path']}
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div className={styles['mdc-checkbox__mixedmark']}></div>
        </div>
      </div>
      <label htmlFor={`todo-${props.id}`}>
        {props.text}
      </label>
      <button className={`${styles['mdc-list-item__end-detail']} ${styles['mdc-button']}`} onClick={onClick}>Delete</button>
    </li>
  );
};

export default Todo;
