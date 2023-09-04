import MobileNavigation from './mobileNavigation/MobileNavigation'
import DesktopNavigation from './desktopNavigation/DesktopNavigation'
import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'

const Navigation = () => {
  const { isLoaded, isSignedIn } = useUser()
  const menu = ['Home', 'Shop', 'History']

  if (!isLoaded || !isSignedIn) {
    menu.push('Register', 'Login')
  }
  // used this article https://www.datainfinities.com/45/get-window-width-and-height-in-react
  // to get the window width and height
  const [screenSize, setScreenSize] = useState(
    getCurrentDimension()
  )

  const desktopNavigationBreakPoint =
    screenSize.width <= 768

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension)

    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [screenSize])

  return desktopNavigationBreakPoint ? (
    <div>
      <MobileNavigation menu={menu} />
    </div>
  ) : (
    <DesktopNavigation menu={menu} />
  )
}

export default Navigation
