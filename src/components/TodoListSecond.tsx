import React from "react";
import { ITodo } from "../types/data";
import TodoItemSecond from "./TodoItemSecond";

interface ITodoListProps {
    todos: ITodo[],
    checkTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoListSecond: React.FC<ITodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
    return (
        <ul className="flex flex-col items-center justify-center mt-5 w-full">
            {todos.map((todo) => {
                return (
                    <TodoItemSecond key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}

export default TodoListSecond