import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <Link to={`/shop/${item}`}>{item}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ShopPage
