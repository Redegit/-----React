const AccordionItem = ({ item, activeIndex, setActiveIndex, itemIndex }) => {

    const handleClick = () => {
        setActiveIndex(itemIndex);
    }

    return (
        <div className={`my-accordion-item ${activeIndex === itemIndex ? "active" : ""}`}>
            <div className="head" onClick={handleClick}>
                <img src={item.img} alt={"Картинка"} />
                <div className="title">{item.title}</div>
            </div>

            <div className="body">
                <div className="body-inner">
                    <div className="text">{item.text}</div>
                    <a className="btn btn-secondary" href={item.link} target="_blank" rel="noreferrer">Читать далее...</a>
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;