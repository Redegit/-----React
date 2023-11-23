import { useEffect, useState } from "react";

const useCart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage["cartItems"]) || {})

    const addCartItem = (item_id, quantity) => {
        let tmpCartItems = getCartItems()
        item_id = String(item_id)

        if (Object.keys(tmpCartItems).includes(item_id)) {
            quantity += tmpCartItems[item_id]
        }
        if (quantity <= 0) {
            delete tmpCartItems[item_id]
            setCartItems(tmpCartItems)
        } else {

            setCartItems({ ...tmpCartItems, [item_id]: quantity })
        }
    }

    const deleteCartItem = (item_id) => {
        let tmpCartItems = getCartItems()
        delete tmpCartItems[String(item_id)]
        setCartItems(tmpCartItems)
    }

    const getCartItems = () => {
        return JSON.parse(localStorage["cartItems"]) || {}
    }

    const saveCartItems = () => {
        localStorage["cartItems"] = JSON.stringify(cartItems)
    }

    useEffect(() => {
        saveCartItems()
    }, [cartItems]);


    return (
        { getCartItems, addCartItem, cartItems, deleteCartItem }
    );
}

export default useCart;