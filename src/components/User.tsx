import Info from "./Info"

interface Props {
  id: string
  picture: string
  name: string
  email: string
  phone: string
  city: string
  country: string
}

function User({ id, picture, name, email, phone, city, country }: Props) {
  return (
    <tr className=" mt-6 text-title  font-poppins rounded-2xl shadow-md">

      <td className="p-4 bg-white_100 rounded-bl-2xl rounded-tl-2xl flex items-center gap-2.5 w-[18rem]">
        <img src={picture} title={name} className="rounded-full shadow-md h-10"/>
        <div className="flex flex-col h-full">
          <span className="leading-5">{name}</span>
          <span className="text-xs text-text">{city}, {country}</span>
        </div>
      </td>

      <td className="bg-white_100 hidden md:table-cell w-[28rem]">
        {email}
      </td>

      <td className="hidden lg:table-cell bg-white_100 w-[30rem]">
        {phone}
      </td>

      <td className="rounded-br-2xl rounded-tr-2xl bg-white_100 p-4 w-full">
        <Info id={id}/>
      </td>

    </tr>
  )
}

export default User