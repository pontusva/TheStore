import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
            {/* <p>{item.description}</p> */}
            <h1>{item.title}</h1>
            <img
              src={item.image}
              className="w-36 "
              alt=""
            />
          </div>
        )
      })}
    </>
  )
}

export default SpecificCategory
