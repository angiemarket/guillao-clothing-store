import { FC } from "react";

import { CartItemContainer, ItemDetails, PriceContainer, Name } from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <PriceContainer>
          <div>Qty: {quantity}</div> 
          <div>${price}.00</div>
        </PriceContainer>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
