import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

function defaultLayout (){
  return (
    <div className="h-max w-full bg-background">
      <Header />
      <div className="flex flex-col max-w-5xl mx-auto mt-16 px-5">
        <Outlet />
      </div>
    </div>
  )
}

export default defaultLayout