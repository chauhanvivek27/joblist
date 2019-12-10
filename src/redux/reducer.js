import { ADD_TODO } from './action'

export default function toAddTodo(state, action){
    if(action.type === ADD_TODO){
        return  Object.assign({}, state, {
            isFetching: false
          });
    }
    return state;
}