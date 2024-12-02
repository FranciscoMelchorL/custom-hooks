import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [ todos ])
    

    const handleNewTodo = ( todo ) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo,
        });
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggloTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => ( !todo.done ) ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggloTodo,
    }
    
}
