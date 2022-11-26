import { useContext } from "react"
import { UsersContext } from "../contexts/UsersContext"

import { Navigate } from 'react-router-dom'
import { GenderMale, GenderFemale } from "phosphor-react"

function Profile() {
  const { selectedUserId, users } = useContext(UsersContext)

  const user = users.find((user) => {
    if (user.id.value === selectedUserId) {
      return user
    }
  })

  if(!user) {
    Navigate({to: '/'})
    return (
      <></>
    )
  }

  const name = user.name.first.concat(' ', user.name.last)

  const address = user.location.street.number.toString()
    .concat(' ', user.location.street.name)
    .concat(' · ', user.location.city)
    .concat(', ', user.location.country)

  return (
    <div className="h-screen">
      <h3 className="font-poppins text-2xl font-semibold text-title drop-shadow-xl">
        Data from {name} 📋
      </h3>

      <div className="w-full mt-4 flex flex-col">
        <div className="h-40 w-auto mx-auto">
          <div className="flex relative top-10">
            {user.gender == 'male' ? 
                <GenderMale size={24} color="#4772d7" weight="bold" className="bg-white_100 p-1 flex justify-center box-content rounded-full shadow-2xl"/>
                :
                <GenderFemale size={24} color="#EE59C3" weight="bold" className="bg-white_100 p-1 flex justify-center box-content rounded-full shadow-2xl"/>
            }

            <span className="relative top-32 left-10 mx-auto font-poppins box-content p-1.5 bg-white_100 text-sm rounded-lg text-title shadow-2xl">
              <strong className="font-semibold">
                ID:
              </strong> {
              user.id.value}
            </span>
          </div>

          <img src={user.picture.thumbnail} title={name} className="w-full h-full rounded-full shadow-2xl"/>
        </div>

        <div className="flex flex-col mt-10 font-poppins">
          <div>
            <span className="relative top-3 left-4 text-strong font-semibold">
              Username
            </span>
            <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
              {user.login.username}
            </span>
          </div>

          <div>
            <span className="relative top-3 left-4 text-strong font-semibold">
              Email
            </span>
            <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
              {user.email}
            </span>
          </div>

          <div>
            <span className="relative top-3 left-4 text-strong font-semibold">
              Address
            </span>
            <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
              {address}
            </span>
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex-1">
              <span className="relative top-3 left-4 text-strong font-semibold">
                Phone
              </span>
              <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
                {user.phone}
              </span>
            </div>
            <div>
              <span className="relative top-3 left-2 text-strong font-semibold">
                Age
              </span>
              <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
                {user.dob.age}
              </span>
            </div>
          </div>

          <div>
            <span className="relative top-3 left-4 text-strong font-semibold">
              About
            </span>
            <span className="box-content p-4 bg-white_100 flex flex-col text-title rounded-xl shadow-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sed provident, maiores est laudantium id eveniet. Obcaecati perspiciatis quidem at distinctio, error dignissimos magni quasi, repellat fuga ullam maxime corporis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam assumenda voluptas minima hic voluptatibus esse totam distinctio? Dignissimos maiores voluptate explicabo aperiam pariatur aspernatur sunt, suscipit tempore numquam minus.
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile