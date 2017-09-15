import React from 'react';
import { connect } from 'react-redux';
import { TodoAction } from '../actions';

const mapStateToProp = () => {
  return {};
};

const mapDispatchToProp = (dispatch) => {
  return {
    action: new TodoAction(dispatch),
  };
};

const CreateTodoForm = ({ action }) => {
  let input;
  const addTodo = (event) => {
    action.add({
      text: input.value,
    });
    input.value = '';
  };

  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};
const AddTodo = connect(mapStateToProp, mapDispatchToProp)(CreateTodoForm);
export default AddTodo;
