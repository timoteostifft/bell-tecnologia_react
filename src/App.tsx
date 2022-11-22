import { BrowserRouter } from 'react-router-dom'
import { UsersProvider } from './contexts/UsersContext'
import Router from './Router'

import './styles/tailwind.css'

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </UsersProvider>

  )
}

export default App
