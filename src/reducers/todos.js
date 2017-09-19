const initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'todo/get': {
      if (action.meta.status === 'start') { return state; }
      if (action.error) { return state; }
      return action.payload;
      break;
    }
    case 'todo/add': {
      const todo = Object.assign({ complete: false, text: '' }, action.payload);
      return [ ...state, todo ];
      break;
    }
    case 'todo/delete': {
      const { id } = action.payload;
      if (id < 0 || id >= state.length) {
        return state;
      }

      return state.slice(0, id).concat(state.slice(id + 1));
      break;
    }
    case 'todo/update': {
      const { id } = action.payload;
      if (id < 0 || id >= state.length) {
        return state;
      }

      const todo = Object.assign({}, state[id], action.payload);
      return [
        ...state.slice(0, id),
        todo,
        ...state.slice(id + 1)
      ];
      break;
    }
    default: {
      return state;
    }
  }
};

export default todos;
