import { createContext, useState, useEffect, useCallback} from "react"
import { api } from "../lib/axios"

export interface IUser {
  id: {
    value: string
  }
  login: {
    username: string
  }
  picture: {
    thumbnail: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  location: {
    city: string
    country: string
    street: {
      number: number
      name: string
    }
  }
  gender: 'male' | 'female'
  dob: {
    age: number
  },
}

interface UsersContextType {
  users: IUser[]
  selectedUserId: string
  updateSelectedUserId: (id: string) => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const UsersContext = createContext({} as UsersContextType)

export function UsersProvider({ children }: ProviderProps) {
  const [ users, setUsers ] = useState<IUser[]>(() => {
    const storedUsersState = localStorage.getItem('@belltecnologia-users-list')

    if(storedUsersState) {
      return JSON.parse(storedUsersState)
    }

    return []
  })

  const [ selectedUserId, setSelectedUserId ] = useState<string>('')

  function updateSelectedUserId(id: string) {
    setSelectedUserId(id)
  }

  const fetchUsers = useCallback(async () => {
    const response = await api.get('/?results=100')
    setUsers(response.data.results)

    const usersStateJSON = JSON.stringify(response.data.results)
    localStorage.setItem('@belltecnologia-users-list', usersStateJSON)
  }, [])

  useEffect(() => {
    if(users.length < 1) {
      fetchUsers()
    }
  }, [])


  return (
    <UsersContext.Provider value={{ users, selectedUserId, updateSelectedUserId }}>
      {children}
    </UsersContext.Provider>
  )
}