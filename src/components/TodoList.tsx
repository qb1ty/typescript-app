import React from "react"
import TodoItem from "./TodoItem"
import { ITodo } from "../types/data"

interface TodoListProps {
    todos: ITodo[]
    checkTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
    return (
        <ul className="flex flex-col items-center justify-center mt-5 w-full">
            <TodoItem todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        </ul>
    )
}

export default TodoList