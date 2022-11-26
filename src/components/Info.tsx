import { User } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { UsersContext } from '../contexts/UsersContext'

import { NavLink } from 'react-router-dom';

interface Props {
  id: string
}

function Info({ id }: Props) {

  const { updateSelectedUserId } = useContext(UsersContext)

  function handleUpdateSelectedUserId() {
    updateSelectedUserId(id)
  }

  return (
    <button 
      className="my-0 ml-auto border-blue_400 flex items-center content-center" 
      title='Go to Profile'
      onClick={() => handleUpdateSelectedUserId()}  
    >
      <NavLink to={'/profile'}>
        <User size={22} weight="regular" color="#4772d7" className='p-1.5 box-content'/>
      </NavLink>
    </button>
  )
}

export default Info