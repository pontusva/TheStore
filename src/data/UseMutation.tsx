import { useAuth } from '@clerk/clerk-react'
import mutation from 'swr'

export const UseMutation = async (query: string) => {
  if (!query) {
    throw Error('No query provided to `useQuery`')
  }

  const { getToken } = useAuth()

  const fetcher = async () => {
    const token = await getToken({ template: 'grafbase' })
    const results = await fetch(
      'http://127.0.0.1:4000/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ query })
      }
    ).then((res) => res.json())
    return results
  }
  return mutation(query, fetcher)
}
