import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SignInButton,
  SignOutButton,
  useUser
} from '@clerk/clerk-react'
import BurgerMenu from '../svgComponents/BurgerMenu'

type NavigationProps = {
  menu: string[]
}

const MobileNavigation = ({ menu }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSignedIn } = useUser()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col transition-all">
      <div className="relative flex items-center justify-end pt-4 pr-6 z-20">
        <h1
          className={
            isMenuOpen
              ? ' mr-auto delay-150 text-[#FAF9F9] pl-6 text-5xl font-light'
              : ' mr-auto  pl-6 text-5xl font-light text-[#1C1C1E]'
          }>
          the store
        </h1>

        <div className="flex flex-col justify-center items-center">
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />
          {isSignedIn ? (
            <SignOutButton />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
      <div className="absolute z-10 w-full">
        <div
          className={
            isMenuOpen
              ? 'h-[350px] duration-500 -translate-y-0 bg-[#1C1C1E]'
              : 'h-[0px] duration-[1500ms] -translate-y-96  bg-white '
          }>
          <ul className="flex flex-col gap-10 items-center h-full pt-28 pb-10 pr-6 justify-center">
            {isMenuOpen &&
              menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() =>
                        setIsMenuOpen(!isMenuOpen)
                      }
                      className="text-[#FAF9F9]"
                      to={index === 0 ? '/' : item}>
                      {item}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
      <div className="flex relative z-10 pr-7 justify-center my-3">
        <div className="border-b-4 w-44 border-amber-400"></div>
      </div>
    </div>
  )
}

export default MobileNavigation
