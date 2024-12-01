### addTodo(todo) 
- It adds the new todo item taken from the TodoForm input element to the 'todos' array.

```
# Method 1:
- addTodo function receives a task 'todo'
```

```
# Method 2:
- addTodo function receives an object 'todo'
```

### toggleComplete(id)
- It takes an id and simply toggles the value of 'completed' property of the object which matches the id.
- (Added Functionality) If the tidi item is editable, make it toggle it to make it non-editable

### updateTodo( id, todo)
- It takes the id of the todo and the value with which the todo is to be updated

```
# Method 1:
- updateTodo function receives a task 'todo'
```

```
# Method 2:
- updateTodo function receives an object 'todo'
```

### deleteTodo(id)
- It takes in id and deletes the todo object that matches with the id