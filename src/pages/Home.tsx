import { useContext } from "react"
import { UsersContext } from "../contexts/UsersContext"

import User from "../components/User"

function Home() {
  const { users } = useContext(UsersContext)
 
  return (
    <>
      <h3 className="font-poppins text-2xl font-semibold text-title drop-shadow-xl">
        Data from API 📋
      </h3>

      <table className="mt-10 border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left font-poppins text-sm text-strong">
            <th className="pl-2">👤 User</th>
            <th className="hidden md:table-cell">✉️ Email address</th>
            <th className="hidden lg:table-cell">📱 Phone</th>
            <th className="w-full">
              <span className="ml-auto flex felx-row justify-end">
                🌐 Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            (user.id.value && 
              <User
                id={user.id.value}
                picture={user.picture.thumbnail}
                name={user.name.first.concat(' ', user.name.last)}
                email={user.email}
                phone={user.phone}
                city={user.location.city}
                country={user.location.country}
                key={user.id.value}
              />  
            )
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home
