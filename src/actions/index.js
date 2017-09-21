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

  async add(todo) {
    const postUrl = `${url}/todos`;
    const type = 'todo/add';

    this.start({ type });
    const res = await fetch(postUrl, {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    });

    const resJson = await res.json();

    if (!res.ok) {
      return this.failed({ type, payload: resJson });
    }

    console.log(resJson);
    this.done({ type, payload: resJson });
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
