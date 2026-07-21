const BASE_URL = ""

export async function api(endpoint: string) {
  const response = await fetch(
    BASE_URL + endpoint
  )
  if (!response.ok) {
    throw new Error('HTTP Error: ${response.status}')
  }
  return response.json()
}