import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import { Button } from "@/components/ui/button";
import { useItemStore, useTotalCost } from "@/store";
import { useQuery } from "@/data/UseQuery";
import ShoppingCart from "../../../components/ShoppingCart";
import cartReducer from "./CartReducer";

export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const SpecificCategory = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [cart, setCart] = useReducer(cartReducer, []);
  const { increase } = useItemStore();
  const { increaseTotal, decreaseTotal } = useTotalCost();
  const hello = useQuery("null");
  console.log(hello);
  function add(product: Data) {
    const action = { product, type: "add" };
    setCart(action);
  }

  function remove(product: Data) {
    const action = { product, type: "remove" };
    setCart(action);
  }

  function getTotalSelectedAmountPerProduct(cart: Data[], productName: String) {
    return cart.filter((item) => item.title === productName).length;
  }

  function getTotal(cart: Data[]) {
    const totalCoster = cart.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    increaseTotal(totalCoster);
  }
  function reduceTotal(cart: Data[]) {
    const totalCoster = cart.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    decreaseTotal(totalCoster);
  }

  const { category } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [category]);

  if (!data) {
    return <p>Loading...</p>;
  }
  console.log();
  return (
    <>
      <h1 className="text-center">{category}</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <div className="flex">
              <img src={item.image} className="w-36" alt="" />
              <div className="flex justify-center w-full items-center">
                <ShoppingCart
                  isChild
                  shoppingNumber={cart?.length as number}
                  shoppingItem={cart}
                >
                  <div className="flex  flex-col">
                    <Button
                      onClick={() => {
                        increase(1);
                        add(item);
                        getTotal([item]);
                      }}
                    >
                      Add to cart
                    </Button>
                    <b>{getTotalSelectedAmountPerProduct(cart, item.title)}</b>
                    <Button
                      disabled={
                        getTotalSelectedAmountPerProduct(cart, item.title) === 0
                      }
                      onClick={() => {
                        remove(item);
                        increase(-1);
                        reduceTotal([item]);
                      }}
                    >
                      remove from cart
                    </Button>
                  </div>
                </ShoppingCart>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SpecificCategory;
