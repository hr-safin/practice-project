import AddToDo from "./Components/AddToDo"
import NavBar from "./Components/NavBar"
import Todos from "./Components/Todos"

const App = () => {
  return (
    <main className=" max-w-2xl mx-auto h-[80vh] flex flex-col py-20">
      <h2 className="text-center text-3xl font-bold pb-16">Todo React + Typescript</h2>
      <NavBar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
