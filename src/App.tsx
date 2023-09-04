import { Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Navigation from './components/Navigation'

function App() {
  if (
    !import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY
  ) {
    throw new Error('Missing Publishable Key')
  }
  const clerkPubKey = import.meta.env
    .VITE_REACT_APP_CLERK_PUBLISHABLE_KEY

  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <div className="bg-[#FAF9F9] h-screen">
          <Navigation />
          <Outlet />
        </div>
      </ClerkProvider>
    </>
  )
}

export default App
