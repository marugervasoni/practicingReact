import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import NotFound from './Pages/NotFound'
import {routes} from './routes'
import Pokedex from './Pages/Pokedex'
// import Index from './Components/Index'

function App() {

  return (
    <Routes>
      <Route path={routes.home} element={<Home/>}>
        {/* <Route path={routes.index} element={<Index/>}/> */}
        <Route path={routes.pokedex} element={<Pokedex/>}/>
        <Route path={routes.shop} element={<Shop/>}/>
        <Route path={routes.login} element={<Login/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
