import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header () {
  return (
    <header className="h-20 bg-white_100 shadow-xl">
      <div className="h-full max-w-5xl px-5 mx-auto flex flex-row items-center">
        <img src={logo} alt="" className="h-20 w-20"/>
        <span className='font-poppins font-semibold text-title text-3xl'>Users API</span>
        <nav className='ml-6'>
          <NavLink to={'/'}>
            <span className='font-poppins text-title text-lg'>Home</span>
          </NavLink>
          <a href='https://randomuser.me/' className='font-poppins text-title text-lg ml-4'>Docs</a>
        </nav>
      </div>
    </header>
  )
}

export default Header


{/*  */}
        // <span>User List</span>
        // <div className=""></div>