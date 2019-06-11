const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  hasSuccess: false
};

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, loading: true };
    case 'SUCCESS':
      return { data: action.payload.data, loading: false, error: false, hasSuccess: true };
    case 'FAILURE':
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}
