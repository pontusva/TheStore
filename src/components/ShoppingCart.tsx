import { Data } from "@/pages/shop/shopComponents/SpecificCategory";

type Props = {
  shoppingItem?: Data[];
  shoppingNumber?: number;
  children?: React.ReactNode;
  isChild?: boolean;
  itemIndicator?: boolean;
};

const ShoppingCart = ({
  children,

  isChild,
}: Props) => {
  return <div>{isChild && children}</div>;
};

export default ShoppingCart;
