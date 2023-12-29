import './App.css'
import Header from './Header'
import Hijo from './Hijo'

function App() {

  return (
    <>
      <Header>
        <Hijo autor="Juan"/>
      </Header>
      <h1>Hello 🌎 of React</h1>
      <div className="card">
        Here begins our adventure in React 😎😁
      </div>
    </>
  )
}

export default App
