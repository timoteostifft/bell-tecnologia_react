import { Outlet } from "react-router-dom"

function defaultLayout (){
  return (
    <div className="box-border h-screen flex flex-col mx-auto my-0 px-5 max-w-6xl w-full">
      <Outlet />
    </div>
  )
}

export default defaultLayout