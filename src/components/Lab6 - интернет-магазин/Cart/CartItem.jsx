import { useState } from "react";
import { data_products } from "../data_products";
import useCart from "../hook/useCart";

const CartItem = ({ item_info }) => {
    const [deleted, setDeleted] = useState(false);

    const id = item_info.id
    const quantity = item_info.quantity

    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    const { addCartItem, deleteCartItem } = useCart();

    const handleAddButton = () => {
        addCartItem(id, 1)
        setCurrentQuantity(currentQuantity + 1)
    }
    const handleRemButton = () => {
        addCartItem(id, -1)
        setCurrentQuantity(currentQuantity - 1)
    }

    const handleDeletion = () => {
        deleteCartItem(id)
        setDeleted(true)
    }

    const product = data_products.find(prod => id === String(prod.id))
    return (
        <>
            {!deleted && <div className="glass-card cart_item">
                <img src={product.img} alt={product.name} />
                <div className="desc_block">
                    <div className="name">{product.name}</div>
                    <div className="quantity">
                        <button onClick={handleRemButton} disabled={currentQuantity <= 0} >{'-'}</button>
                        <div>{currentQuantity}</div>
                        <button onClick={handleAddButton} >{'+'}</button>
                        <button onClick={handleDeletion} className="delete">X</button>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default CartItem;