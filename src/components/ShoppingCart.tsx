import { useBearStore } from '../store'

type Props = {
  shoppingItem?: number[]
  shoppingNumber?: number
  children?: React.ReactNode
  isChild?: boolean
  itemIndicator?: boolean
}

const ShoppingCart = ({
  children,
  shoppingItem,
  itemIndicator,
  isChild
}: Props) => {
  const bears = useBearStore((state) => state.bears)
  console.log(shoppingItem)
  return (
    <div>
      {itemIndicator && <p>{bears} items</p>}
      {isChild && children}
    </div>
  )
}

export default ShoppingCart
