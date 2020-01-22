import React, { useState } from "react"
import Todo from "./Components/Todo"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

function App() {
  const data = []
  let [text, setText] = useState("")
  let [todoList, setTodoList] = useState(data)

  const setInputText = e => {
    e.preventDefault()
    setText(document.querySelector("#create-input").value)
    newTodoListItem()
  }
  const newTodoListItem = () => {
    let newItem = {
      name: text,
      completed: "notCompleted",
      show: "showing"
    }

    setTodoList([...todoList, newItem])
  }

  return (
    <div className="App">
      <Todo
        todoList={todoList}
        onClick={setInputText}
        setTodoList={setTodoList}
      />
    </div>
  )
}

export default App
