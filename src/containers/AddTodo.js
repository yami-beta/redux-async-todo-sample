import React from 'react';
import { connect } from 'react-redux';
import { TodoAction } from '../actions';
import TodoForm from '../components/TodoForm';

const mapStateToProp = () => {
  return {};
};

const mapDispatchToProp = (dispatch) => {
  return {
    action: new TodoAction(dispatch),
  };
};

const AddTodo = connect(mapStateToProp, mapDispatchToProp)(TodoForm);
export default AddTodo;
