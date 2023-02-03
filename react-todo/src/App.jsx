import './App.css'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState } from 'react'

function App() { 
    const [todoinput, setTodoinput] = useState("");
    const [todos, setTodos] = useState([]);

  function addTodo() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value : todoinput,
      status: false,
    }

    if(todoinput !== "")
      setTodos(oldTodos => [...oldTodos, item]);
    setTodoinput("");

  }

  function deleteTodo(id) {
    const newList = todos.filter(todo => todo.id !== id);
    setTodos(newList);
  }

  function toggleTodo(id) {
    const todoIndex = todos.findIndex( todo => todo.id == id);
    const tmpTodo = [...todos];
    tmpTodo[todoIndex].status ? tmpTodo[todoIndex].status = false : tmpTodo[todoIndex].status = true;
    setTodos(tmpTodo);
  }

  return(
    <Card style={{ width: '500px' , backgroundColor: 'rgba(252, 1, 51, 0)'}}>
      <Card.Body>
        <Card.Title>To Do List</Card.Title>
          <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Add To do"
            value={todoinput}
            onChange={e => setTodoinput(e.target.value)}
          />
          <Button variant="primary" id="button-addon2" onClick={() => addTodo()}>
            Add To do
          </Button>
        </InputGroup>
        <hr/>
        <ListGroup className="list-group-flush">
        {todos.map(todo => {
            return (
              <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-start">
                <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.value}</span>
                {' '}
                <div>
                <Button variant="danger"  size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                {' '}
                <Button
                  variant= {todo.status ? "secondary" : "success"}
                  size="sm"
                  onClick={() => toggleTodo(todo.id)}
                >{ todo.status ? "Undo" : "Done"}</Button>
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default App