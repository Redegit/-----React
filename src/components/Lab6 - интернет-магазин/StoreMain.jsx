import Item from "./Item";
import SalesBlock from "./SalesBlock";
import StoreHeader from "./StoreHeader";
import { data_products } from "./data_products";
import "./styleStore.css"

export const StoreMain = () => {
    return (
        <div id="lab_6">

            <StoreHeader />

            <div className="container">
                <SalesBlock />

                <div className="wrapper">
                    {
                        data_products.map((product, index) => {
                            return <Item item={product} key={index} />
                        })
                    }
                </div>
            </div>
        </div>

    );
}
