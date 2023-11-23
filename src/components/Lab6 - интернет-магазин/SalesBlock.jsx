import { Link } from "react-router-dom";

const SalesBlock = () => {
    return (
        <div className="sales">
            <div className="sales_header"> СКИДКА!</div>
            <Link to={`item/2`}>
                <img className="sales_image" src="\image\d16.png" alt="sale!" />
                <div>HUAWEI MateBook D16</div>
                <div>
                    <s>$1000</s>
                    <b className="new_super_price">$1500</b>
                </div>
            </Link>
        </div>
    );
}

export default SalesBlock;