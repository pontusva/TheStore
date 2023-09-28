import { UseQuery } from './UseQuery'
import { UseMutation } from './UseMutation'

export const SchemaPage = () => {
  const YOUR_GRAPHQL_QUERY = `
    query Test {
      test(by: {id: "test_01H9XX4JVYAKMXC93J7HNTAMPH"}) {
        id
        title
      }
    }
`
  const { data, error } = UseQuery(YOUR_GRAPHQL_QUERY)

  return {
    lol: data,
    error
  }
}

export const UseMutationMutation = (cart) => {
  const { title, price, id } = cart
  const mutation = `
  mutation OrderItemCreate {
    orderItemCreate(input: {${title}, ${price}, ${id}}}) {
      orderItem {
        title
        price
        id
      }
    }
  }
`
  return UseMutation(mutation)
}
