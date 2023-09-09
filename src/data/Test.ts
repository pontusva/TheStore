import { useQuery } from './UseQuery'
import { Data } from '@/pages/shop/shopComponents/SpecificCategory'
// $cart: [OrderLineCreateInput!]!
// type Order @model {
//   id: IDu
//   title: String
//   price: Int
//   description: String
//   category: String
//   image: String
//   rating: Rating
// }

export const SchemaPage = (cart: Data[]) => {
  const yoo = cart[0]

  const YOUR_GRAPHQL_QUERY = `
    query Test {
      test(by: {id: "test_01H9XX4JVYAKMXC93J7HNTAMPH"}) {
        id
        title
      }
    }
`
  const { data, error } = useQuery(YOUR_GRAPHQL_QUERY)
  console.log(YOUR_GRAPHQL_QUERY)
  return {
    lol: data,
    carte: cart,
    yoo,
    error
  }
}
