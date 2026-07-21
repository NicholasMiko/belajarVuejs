import { api } from "../api/utility";

export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  },
  phone: number
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export async function fetchUsers(): Promise<UserResponse[]> {
  //const z: String = 'xxxx'

  return await api('/users')
}