import React from "react"

interface TodoFormProps {
    value: string
    setValue: (value: string) => void
    addTodo: () => void
}

const TodoForm: React.FC<TodoFormProps> = ({value, setValue, addTodo}) => {
    return (
        <div className="flex justify-between items-center gap-4">
          <input className="h-10 px-3 border border-slate-200 rounded-none outline-none focus:border-slate-400" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="p-2 px-4 bg-slate-200 outline-none" onClick={addTodo}>Добавить</button>
        </div>
    )
}

export default TodoForm