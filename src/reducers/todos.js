import initialState from "../store/InitialState";

export default function todos(state = initialState.todos, action) {

 if(action.type === 'TODO_ADDED') {
  return state.concat(action.payload);
 }

 else if(action.type === 'TODO_DELETED') {
  return state.filter((todo) => todo.id !== action.payload )
 }

 return state;
}
