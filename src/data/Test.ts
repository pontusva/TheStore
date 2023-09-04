import { useQuery } from './UseQuery'

const YOUR_GRAPHQL_QUERY = `
	query {
		__schema {
			types {
				name
			}
		}
	}
`

export const SchemaPage = () => {
  const { data, error } = useQuery(YOUR_GRAPHQL_QUERY)

  return {
    data,
    error
  }
}
