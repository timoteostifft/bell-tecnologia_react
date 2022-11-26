import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import DefaultLayout from './layouts/DefaultLayout';
import Profile from './pages/Profile';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
  )
}

export default Router
