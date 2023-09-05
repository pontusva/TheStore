import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBearStore } from '../../../store'
import ShoppingCart from '../../../components/ShoppingCart'
import { Button } from '@/components/ui/button'

type Data = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const SpecificCategory = () => {
  const [data, setData] = useState<Data[] | null>(null)
  const [shoppingItem, setShoppingItem] = useState<
    number[]
  >([])

  const increaseBears = useBearStore(
    (state) => state.increase
  )
  const addToCart = (item: number) => {
    setShoppingItem((oldArray) => [...oldArray, item])
  }

  const removeFromCart = (item: number) => {
    return setShoppingItem(
      shoppingItem.filter(
        (items, index) =>
          shoppingItem.indexOf(item) !== index
      )
    )
    // return arr.filter((item,
    //   index) => arr.indexOf(item) === index);
    // setShoppingItem(
    //   shoppingItem?.splice(0, shoppingItem.indexOf(item))
    // )
    // return
  }

  const disabled = (item: number) => {
    return (
      shoppingItem.some((i) => {
        return i !== item
      }) || shoppingItem.length === 0
    )

    // return
  }

  const { category } = useParams()

  useEffect(() => {
    fetch(
      'https://fakestoreapi.com/products/category/' +
        category
    )
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [category])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1 className="text-center">{category}</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <div className="flex">
              <img
                src={item.image}
                className="w-36"
                alt=""
              />
              <div className="flex justify-center w-full items-center">
                <ShoppingCart
                  isChild
                  shoppingNumber={
                    shoppingItem?.length as number
                  }
                  shoppingItem={shoppingItem}>
                  <div className="flex  flex-col">
                    <Button
                      onClick={() => {
                        addToCart(item.id)
                        increaseBears(1)
                      }}>
                      Add to cart
                    </Button>
                    <Button
                      disabled={disabled(item.id)}
                      onClick={() => {
                        removeFromCart(item.id)
                        shoppingItem.find((i) => {
                          return (
                            i === item.id &&
                            increaseBears(-1)
                          )
                        })
                      }}>
                      remove from cart
                    </Button>
                  </div>
                </ShoppingCart>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SpecificCategory
