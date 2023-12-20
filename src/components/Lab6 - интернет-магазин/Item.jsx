import { Link } from "react-router-dom";
import useCart from "./hook/useCart";
import { useState } from "react";

const Item = ({ item }) => {
    const { getCartItems } = useCart();

    const [isOnCart, setIsOnCart] = useState(Object.keys(getCartItems())?.includes(String(item.id)) || false)
    const { addCartItem } = useCart();

    const handleAddItem = () => {
        setIsOnCart(true)
        addCartItem(item.id, 1)
    }

    return (
        <div className="glass-card item">
            <Link to={`/store/item/${item.id}`}>
                <img className="grid_image" src={item.img} alt={item.name} />
            </Link>
            <div className="name" >{item.name}</div>
            {isOnCart ?
                <button className="grid-item-button">В корзине</button>
                : <button className="grid-item-button enabled" onClick={handleAddItem}>Добавить в корзину</button>
            }
        </div>
    );
}

export default Item;