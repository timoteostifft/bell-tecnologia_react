interface Props {
  usersPerPage: number
  totalUsers: number
  paginate: (number: number) => void
}

function Pagination({ usersPerPage, totalUsers, paginate }: Props) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="mt-3 mb-4">
      <ul className="flex flex-row justify-between max-w-md mx-auto">
        {pageNumbers.map(number => (
          <li key={number}>
            <button 
              className="bg-white_100 w-8 h-8 rounded-full text-center shadow-2xl font-poppins text-title"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination