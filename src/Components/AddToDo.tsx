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
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo
