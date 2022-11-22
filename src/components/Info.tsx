import { User } from 'phosphor-react'

function Info() {
  return (
    <button className="my-0 ml-auto border-blue_400 flex items-center content-center" title='Go to Profile'>
      <User size={22} weight="regular" color="#4772d7" className='p-1.5 box-content'/>
    </button>
  )
}

export default Info