import ActionDispatcher from '../ActionDispatcher';

const url = 'http://localhost:8081';

export class TodoAction extends ActionDispatcher {
  async get(id = null) {
    const getUrl = id ? `${url}/todos/${id}` : `${url}/todos`;
    const type = 'todo/get';

    this.start({ type });
    const res = await fetch(getUrl, {
      method: 'GET',
    });

    const resJson = await res.json();

    if (!res.ok) {
      return this.failed({ type, payload: resJson });
    }

    this.done({ type, payload: resJson });
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

  toggleComplete(todo) {
    this.dispatch({
      type: 'todo/update',
      payload: Object.assign({}, todo, { complete: !todo.complete }),
    });
  }
}
