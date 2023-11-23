import { useState } from "react";
import CartItem from "./CartItem";
import useCart from "../hook/useCart";
import StoreHeader from "../StoreHeader";
import "./cart.scss"

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <>
            <StoreHeader />
            <div className="cart container">
                <div className="cart_list">
                    {cartItems && Object.keys(cartItems).map((item_id, index) => {
                        return <CartItem item_info={{ id: item_id, quantity: cartItems[item_id] }} key={index} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Cart;