export function requestTodoList(text) {
  return {
    type: 'REQUEST',
    payload: {
    	text
    }
  }
}
