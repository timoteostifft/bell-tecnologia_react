import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import DefaultLayout from './layouts/DefaultLayout';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
