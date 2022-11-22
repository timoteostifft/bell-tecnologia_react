import { createContext, useState, useEffect, useCallback } from "react"
import { api } from "../lib/axios"

export interface IUser {
  id: {
    value: string
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
  }
}

interface UsersContextType {
  users: IUser[]
}

interface ProviderProps {
  children: React.ReactNode
}

export const UsersContext = createContext({} as UsersContextType)

export function UsersProvider({ children }: ProviderProps) {
  const [ users, setUsers ] = useState<IUser[]>([])

  const fetchUsers = useCallback(async () => {
    const response = await api.get('/?results=100')
    setUsers(response.data.results)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UsersContext.Provider value={{users}}>
      {children}
    </UsersContext.Provider>
  )
}