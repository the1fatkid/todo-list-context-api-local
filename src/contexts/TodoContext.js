import { createContext, useContext } from "react";

export const TodoContext= createContext({
    //adding parameters here in the function definitions is optional (it works the same)
    todos: [{
        id: 1,
        todo: "test todo",
        completed: false
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (todo, id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider= TodoContext.Provider;

//Custom Hook
export function useTodo(){
    return useContext(TodoContext);
}