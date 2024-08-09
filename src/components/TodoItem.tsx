import React from "react";
import { ITodo } from "../types/data";

interface TodoItemProps {
    todos: ITodo[]
    checkTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todos, checkTodo, deleteTodo }) => {
    return (
        <>
            {todos.map((todo) => {
                return (
                    <li className="relative flex items-center justify-between border border-slate-200 rounded-none py-1 px-3 mt-2 w-[25%] -ml-10" key={todo.id}>
                        <p className={!todo.complete ? "text-lg truncate" : "text-lg line-through truncate"}>{todo.title}</p>
                        <button onClick={() => checkTodo(todo.id)} type="button" className={ todo.complete ? "bg-green-500 cursor-pointer p-[8.6px] absolute -right-[38px]" : "bg-yellow-300 cursor-pointer p-[8.6px] absolute -right-[38px]"}>
                            <img src="/check.svg" alt="check" className="w-5"/>
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} type="button" className="bg-red-500 cursor-pointer p-[8.6px] absolute -right-[75px]">
                            <img src="/close.svg" alt="check" className="w-5"/>
                        </button>
                    </li>
                )
            })}
        </>
    )
}

export default TodoItem