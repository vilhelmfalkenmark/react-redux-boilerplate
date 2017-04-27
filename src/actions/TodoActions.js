import axios from 'axios';

export function addTodo(todoObject) { // <-- Non ASYNC ACTION
 return {type: 'TODO_ADDED', payload: todoObject }
}

export function deleteTodo(todoID) { // <-- Non ASYNC ACTION
 return {type: 'TODO_DELETED', payload: todoID }
}

export function asyncAction() { // <-- ASYNC PROMISED BASED API ACTION. I <3 axios
  return function(dispatch) {
    axios.get("http://localhost:5000/api/images")
    .then((response) => {
      dispatch({type: "IMAGES_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "IMAGES_NOT_FETCHED", payload: err})
    })
  }
}
