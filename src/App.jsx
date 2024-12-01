import { useState, useEffect} from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  

  const [todos, setTodos] = useState([]);

  useEffect(() => { 
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos); 
    } 
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    
  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      // Method 1: todo is the task 
      // return [...prevTodos, {id: Date.now(), todo: todo, completed: false}];

      //Method 2: todo is an object
      return [ ...prevTodos, { id: Date.now(), ...todo }]
      // return [{ id: Date.now(), ...todo }, ...prevTodos]
    })
  }

  const updateTodo = (id, todo) => {
    // Method 1: todo is the newtask 
    setTodos((prevTodos)=>{
      return prevTodos.map(item=>{
        if(item.id === id){
          return {...item, todo: todo}
        }
        else{
          return item;
        }
      })
    })

    //Method 2: todo is an object
    // setTodos((prevTodos) => {
    //   return prevTodos.map(item => {
    //     if (item.id === id) {
    //       return todo
    //     }
    //     else {
    //       return item;
    //     }
    //   })
    // })
  }

  const deleteTodo = (id) => {
    console.log(id)
    setTodos((prevTodos) => (
      prevTodos.filter((todo) => todo.id != id)
    ))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos)=>{
      return prevTodos.map(item=>{
        if(item.id === id){
          return {...item, completed: !item.completed}
        }
        else{
          return item;
        }
      })
    })

  }

  


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">

            {/* Todo form goes here */}
            <TodoForm/>

          </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItem here */}
            {todos.map((item)=> <TodoItem key={item.id} todo={item}/> )}
     
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
