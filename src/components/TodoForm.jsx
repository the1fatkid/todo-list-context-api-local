import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [value, setValue] = useState("");

    const {addTodo}= useTodo();

    function handleSubmit(e){
        e.preventDefault();

        if(!value || value==" ") return

        //Add the new todo (object) to the todos => call addTodos function
        const newItem= {
            todo: value,
            completed: false
        }

        // const newItem=value;
        addTodo(newItem);

        setValue(""); 
    }
  
    return (
        <form  className="flex" onSubmit= {handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

