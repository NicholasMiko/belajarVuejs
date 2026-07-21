const BASE_URL = 'https://jsonplaceholder.typicode.com'
export async function api(
  endpoint: string,
  body: any,
  signal?: AbortSignal,
) {
  const response = await fetch(
    BASE_URL + endpoint,
    { method: 'GET' }
  )

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`)
  }

  return response.json()
}