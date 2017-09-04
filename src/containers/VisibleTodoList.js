import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProp = ({ todos }) => {
  return { todos };
};

const mapDispatchToProp = (dispatch) => {
  return {};
};

const VisibleTodoList = connect(mapStateToProp, mapDispatchToProp)(TodoList);
export default VisibleTodoList;
