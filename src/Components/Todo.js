import React, { useState } from "react"

function Todo({ todoList, onClick, setTodoList }) {
  const crossOutToDo = e => {
    let todoItem = e.target.innerText
    todoList.forEach(item => {
      if (item.name === todoItem) {
        if (item.completed === "completed") {
          item.completed = "notCompleted"
        } else if (item.completed === "notCompleted") {
          item.completed = "completed"
        }
        setTodoList([...todoList])
      }
    })
  }

  const hideComplete = e => {
    e.preventDefault()
    todoList.forEach(item => {
      if (item.completed === "completed") {
        item.completed = "notShowing"
        setTodoList([...todoList])
      }
    })
    console.log(todoList)
  }

  const showAll = e => {
    e.preventDefault()
    todoList.forEach(item => {
      if (item.completed === "notShowing") {
        item.completed = "completed"
        setTodoList([...todoList])
      }
    })
  }

  // console.log(todoList, "todolist variable should be an array of objects")
  return (
    <div>
      <h1>To Dos</h1>
      <div className="card">
        <form>
          <div>
            <button
              id="hideComplete"
              type="button"
              className="btn btn-outline-primary"
              onClick={hideComplete}
            >
              Hide Complete
            </button>
            <button
              id="showAll"
              type="button"
              className="btn btn-outline-primary"
              onClick={showAll}
            >
              ShowAll
            </button>{" "}
          </div>
          <div>
            <input id="create-input" type="text" />
            <button
              id="create"
              type="button"
              className="btn btn-outline-primary"
              onClick={onClick}
            >
              Create
            </button>
          </div>
        </form>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li
                key={index}
                className={item.showing}
                id={item.completed}
                onClick={crossOutToDo}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Todo
