import { Link } from 'react-router-dom'

type NavigationProps = {
  menu: string[]
}
const DesktopNavigation = ({ menu }: NavigationProps) => {
  return (
    <ul className="flex justify-center">
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <Link to={index === 0 ? '/' : item}>
              {item}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DesktopNavigation
