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

    this.done({ type, payload: resJson });
  }

  async delete(id) {
    const deleteUrl = `${url}/todos/${id}`;
    const type = 'todo/delete';

    this.start({ type });
    const res = await fetch(deleteUrl, {
      method: 'DELETE',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const resJson = await res.json();

    if (!res.ok) {
      return this.failed({ type, payload: resJson });
    }

    this.done({ type, payload: resJson });
  }

  async toggleComplete(todo) {
    const putUrl = `${url}/todos/${todo.id}`;
    const type = 'todo/update';

    this.start({ type });
    const res = await fetch(putUrl, {
      method: 'PUT',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.assign({}, todo, { complete: !todo.complete })),
    });

    const resJson = await res.json();

    if (!res.ok) {
      return this.failed({ type, payload: resJson });
    }

    this.done({ type, payload: resJson });
  }
}
