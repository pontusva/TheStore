import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import {
  SignUp,
  SignIn,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import HomePage from "./pages/home/HomePage.tsx";
import ShopPage from "./pages/shop/ShopPage.tsx";
import SpecificCategory from "./pages/shop/shopComponents/SpecificCategory.tsx";
import CartPage from "./pages/cart/CartPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: (
          <SignedIn>
            <ShopPage />
          </SignedIn>
        ),
      },
      {
        path: "/shop/:category",
        element: <SpecificCategory />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signed-out",
        element: (
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        ),
      },
    ],
  },
]);
