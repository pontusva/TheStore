import { useUser } from '@clerk/clerk-react'
import { SchemaPage } from '../../data/Test'

const HomeNotSignedIn = () => {
  return (
    <div className="flex justify-center px-5">
      Hello, welcome to the store. Please sign in to
      continue.
    </div>
  )
}

const HomePage = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { data } = SchemaPage()
  console.log(data)
  if (!isLoaded || !isSignedIn) {
    return <HomeNotSignedIn />
  }
  return (
    <div className="flex justify-center p-5">
      Hello, {user.firstName || user.username} welcome to
      the store.
    </div>
  )
}

export default HomePage
