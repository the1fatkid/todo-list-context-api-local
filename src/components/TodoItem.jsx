import { useState } from "react";
import { useTodo } from "../contexts";

// TodoItem :-  [checkbox -> input element -> edit/save button -> delete button]

function TodoItem({todo}) {
    const {updateTodo, deleteTodo, toggleComplete}= useTodo();

    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  w-full text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >

            {/* CHECKBOX */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                
                onChange={()=>{
                    setIsTodoEditable(false); //extra functionality I added
                    toggleComplete(todo.id);
                }}
            />

            {/* INPUT ELEMENT */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />


            {/* EDIT/SAVE BUTTON 

                - Clicking this button should 
                    1. Flip the 'isTodoEditable' state varibale
                    2. If the todo is editable and we click the button, it should first call the updateTodo function and then flip the 'isTodoEditable' state varibale
            
            */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    // if (todo.completed) return; // disabled attribute takes care of this functionality 

                    if (isTodoEditable) {
                        updateTodo(todoMsg, todo.id);
                    } 
                    setIsTodoEditable((prev) => !prev);
    
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
