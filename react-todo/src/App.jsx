
import './App.css'
import {useState} from 'react'


function App() {
  // handle Textbox value
  const [input, setInput] = useState("")
  // prepare todos handler array
  const [todos, setTodos] = useState([])

  // handle submit click
  function addTodo() {
    const item = {
      id : Math.floor(Math.random() * 1000),
      value : input,
      status : false,
    }

    setTodos(oldTodos => [...oldTodos, item]) 
    setInput('')
  }

  // handle delete todo
  function deleteTodo(id){
    const newTodoList = todos.filter(todo => todo.id !== id)
    setTodos(newTodoList)
    console.log(newTodoList)
  }

  // handle todo as done
  function doneTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id == id)

    // tmpTodos[todoIndex].status = true
    const tmpTodos = [...todos]
    tmpTodos[todoIndex].status = true
    setTodos(tmpTodos)
    console.log(newTodos)

  }
  return (
    <div className="App">
      <input onChange={e => setInput(e.target.value)} value={input} placeholder='Add todo'/>
      <button onClick={() => addTodo()}>Submit</button>
      <br/>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id} style={{textDecoration: todo.status ? 'line-through' : ''}}>{todo.value}<button onClick ={() => deleteTodo(todo.id)}>❌</button><button onClick={() => doneTodo(todo.id)}>✔️</button></li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
