import { Data } from './SpecificCategory'
import { UseMutationMutation } from '@/data/Test'
import { UseMutation } from '@/data/UseMutation'

interface Action {
  product: Data
  type: string
}

function cartReducer(state: Data[], action: Action) {
  switch (action.type) {
    case 'add': {
      const mutation = `
      mutation OrderItemCreate {
        orderItemCreate(input: {${action.product.title}, ${action.product.price}, ${action.product.id}}}) {
          orderItem {
            title
            price
            id
          }
        }
      }
    `
      UseMutation(mutation)
      return [...state, action.product]
    }
    case 'remove': {
      const productIndex = state.findIndex(
        (item: Data) => item.title === action.product.title
      )
      if (productIndex < 0) {
        return state
      }
      const update = [...state]
      update.splice(productIndex, 1)
      return update
    }
    default: {
      return state
    }
  }
}
export default cartReducer
