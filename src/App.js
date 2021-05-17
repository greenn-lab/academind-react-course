import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react" />
      <Todo text="Hello" />
      <Todo text={'Hi'} />
    </div>
  )
}

export default App
