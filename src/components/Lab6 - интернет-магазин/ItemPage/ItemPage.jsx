import { useParams } from "react-router-dom";
import { data_products } from "../data_products";
import "./itemPage.scss"
import { useState } from "react";
import StoreHeader from "../StoreHeader";

const ItemPage = () => {
    const { id } = useParams();
    const [showDesc, setShowDesc] = useState(false)
    const item = data_products.find(item => String(item.id) === id)

    const toggleDescShow = () => {
        setShowDesc(!showDesc)
    }

    return (<div>
        <StoreHeader />

        <div className="container">
            <div className="item_page">
                <img className="big_image" src={item.img} alt={item.name} />
                <div className="name">{item.name}</div>
                <div onClick={toggleDescShow}>
                    <div className="show-description-btn">{showDesc ? "Свернуть описание" : "Развернуть описание"}</div>
                    {showDesc &&
                        <div className="description">
                            {item.description || "Описания нет :("}
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>);
}

export default ItemPage;