export default class ActionDispatcher {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  start(action) {
    const { type, meta, payload } = action;
    this.dispatch({
      type,
      meta: Object.assign({}, { status: 'start' }, meta),
      payload,
    });
  }

  done(action) {
    const { type, meta, payload } = action;
    this.dispatch({
      type: action.type,
      meta: Object.assign({}, { status: 'done' }, meta),
      payload: action.payload,
    });
  }

  failed(action) {
    const { type, meta, payload } = action;
    this.dispatch({
      type,
      meta: Object.assign({}, { status: 'failed' }, meta),
      error: true,
      payload,
    });
  }
}
