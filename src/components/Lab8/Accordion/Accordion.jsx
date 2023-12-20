import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import "./accordion.scss"

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="my-accordion glass-card">
            {!items.empty && items.map((item, index) =>
                <AccordionItem key={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} item={item} itemIndex={index}/>
            )}
        </div>
    );
}

export default Accordion;