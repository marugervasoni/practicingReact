import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Shop from './Pages/Shop'
import NotFound from './Pages/NotFound'
import {routes} from './routes'
import Pokedex from './Pages/Pokedex'
import DefaultLayout from './Components/DefaultLayout'

function App() {

  return (
    <Routes>
      <Route path={routes.home} element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path={routes.pokedex} element={<DefaultLayout><Pokedex /></DefaultLayout>} />
      <Route path={routes.shop} element={<DefaultLayout><Shop /></DefaultLayout>} />
      <Route path={routes.login} element={<DefaultLayout><Login /></DefaultLayout>} />
      <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
    </Routes>
  )
}

export default App
