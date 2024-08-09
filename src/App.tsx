import React, { useState, useEffect, useRef } from "react"
import TodoListSecond from "./components/TodoListSecond"
import { ITodo } from "./types/data"

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const addTodo = () => {
    if (value.trim().length > 0) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])

      setValue('')
    }
  }

  const checkTodo = (id: number): void => {
    const editTodo = todos.reduce((acc: any, todo: ITodo) => {
      if (todo.id === id) {
        return [...acc, {
          ...todo,
          complete: !todo.complete
        }]
      }

      return [...acc, todo]
    }, [])

    setTodos(editTodo)
  }

  const deleteTodo = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <div className="flex justify-between items-center gap-4">
        <input ref={inputRef} value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" className="h-10 px-3 border border-slate-200 rounded-none outline-none focus:border-slate-400" />
        <button onClick={addTodo} className="p-2 px-4 bg-slate-200 outline-none">Добавить</button>
      </div>
      <TodoListSecond todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App

// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"

// const App: React.FC = () => {
//   const [value, setValue] = useState('')
//   const [todos, setTodos] = useState<ITodo[]>([])

//   const addTodo = () => {
//     if (value.trim().length > 0) {
//       setTodos([...todos, {
//         id: Date.now(),
//         title: value,
//         complete: false
//       }])

//       setValue('')
//     }
//   }

//   const checkTodo = (id: number) => {
//     const newTodos = todos.reduce((acc: any, t: ITodo) => {
//       if (t.id === id) {
//         return [...acc, {
//           ...t,
//           complete: !t.complete
//         }]
//       }
//       return [...acc, t]
//     }, [])

//     setTodos(newTodos)
//   }

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id))
//   }

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center mt-10 w-full">
//         <TodoForm value={value} setValue={setValue} addTodo={addTodo} />
//         <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
//       </div>
//     </>
//   )
// }

// export default App