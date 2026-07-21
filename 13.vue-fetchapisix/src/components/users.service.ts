import { api } from "../api/utility";
import { ref } from 'vue'
import type { UserResponseDTO } from "./user.requestresponse";


export const users = ref<UserResponseDTO[]>([])

export async function fetchUsers(): Promise<UserResponseDTO[]> {
  return await api('/users')

}

