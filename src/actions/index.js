export class TodoAction {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  add(todo) {
    this.dispatch({
      type: 'todo/add',
      payload: todo,
    });
  }

  delete(id) {
    this.dispatch({
      type: 'todo/delete',
      payload: { id },
    });
  }
}
