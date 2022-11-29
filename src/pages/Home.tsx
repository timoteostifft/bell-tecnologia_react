import { useContext, useState } from "react"
import { UsersContext } from "../contexts/UsersContext"

import User from "../components/User"
import Pagination from "../components/Pagination"

function Home() {
  const { users } = useContext(UsersContext)

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ usersPerPage, setUsersPerPage ] = useState(10)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
 
  function handlePaginate(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

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
        {currentUsers.map((user) => (
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

      <Pagination 
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={handlePaginate}
      />
    </>
  )
}

export default Home
