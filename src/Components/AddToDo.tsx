import { FormEvent, useState } from "react"
import { useTodos } from "../store/Todo"


const AddToDo = () => {

    const [todo, setTodo] = useState("")
    const {handleTodo} = useTodos()

    const handleFormSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleTodo(todo)
        setTodo("")
    }
  return (
    <div className=" mx-w-2xl mx-auto">
    <form   onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className="text-white text-md bg-blue-600 rounded-md px-6 py-2 ml-6" type="submit">Add</button>
    </form>
    </div>
  )
}

export default AddToDo
