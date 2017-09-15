import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { TodoAction } from '../actions';

const mapStateToProp = ({ todos }) => {
  return { todos };
};

const mapDispatchToProp = (dispatch) => {
  return {
    action: new TodoAction(dispatch),
  };
};

const VisibleTodoList = connect(mapStateToProp, mapDispatchToProp)(TodoList);
export default VisibleTodoList;
