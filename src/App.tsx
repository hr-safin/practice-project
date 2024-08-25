import AddToDo from "./Components/AddToDo"
import NavBar from "./Components/NavBar"
import Todos from "./Components/Todos"

const App = () => {
  return (
    <main>
      <h2>Todo React + Typescript</h2>
      <NavBar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
