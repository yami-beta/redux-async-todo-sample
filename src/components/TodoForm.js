import React from 'react';
import styles from './TodoForm.css';

const TodoForm = ({ action }) => {
  let input;
  const addTodo = (event) => {
    action.add({
      text: input.value,
      complete: false,
    });
    input.value = '';
  };

  return (
    <div className={`${styles['todo-form']}`}>
      <div className={styles['mdc-textfield']}>
        <input type="text" className={`${styles['mdc-textfield__input']}`}
          ref={(node) => { input = node; }}
          placeholder="New Todo" />
      </div>
      <button className={`${styles['mdc-button']} ${styles['mdc-button--raised']}`} onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
