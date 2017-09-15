const initialState = [
  { text: 'default todo 1' }
];

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'todo/add': {
      const todo = Object.assign({}, action.payload);
      return [ ...state, todo ];
      break;
    }
    case 'todo/delete': {
      const { id } = action.payload;
      if (id < 0 || id >= staete.length) {
        return state;
      }

      return stete.slice(0, id).concat(state.slice(id + 1));
      break;
    }
    default: {
      return state;
    }
  }
};

export default todos;
