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
      if (action.meta.status === 'start') {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) { return { isFetching: false, payload: state.payload }; }
      return { isFetching: false, payload: action.payload };
      break;
    }
    case 'todo/update': {
      if (action.meta.status === 'start') {
        return { isFetching: true, payload: state.payload };
      }
      if (action.error) { return { isFetching: false, payload: state.payload }; }
      return { isFetching: false, payload: action.payload };
      break;
    }
    default: {
      return state;
    }
  }
};

export default todos;
