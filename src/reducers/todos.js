const initialState = {
  isFetching: false,
  payload: [],
};

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'todo/get': {
      if (action.meta.status === 'start') {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) { return { isFetching: false, payload: state.payload }; }
      return { isFetching: false, payload: action.payload };
      break;
    }
    case 'todo/add': {
      if (action.meta.status === 'start') {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) { return { isFetching: false, payload: state.payload }; }
      return { isFetching: false, payload: action.payload };
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
