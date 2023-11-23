import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? 'header_link active' : 'header_link'

const StoreHeader = () => {
    return (
        <div id="header" className="header">
            <div id="header_inner">
                <NavLink to={"/store/home"} className="logo active" id="logo">
                    <img className="img_logo" src="/image/logo.svg" alt="logo" />
                    <img className="img_name" src="/image/name.svg" alt="name" />
                </NavLink>
                <div className="header_right">
                    <NavLink className={setActive} to={"/store/home"}>Главная</NavLink>
                    {/* <a className="header_link" href="contact.html">Контакты</a>
                    <a className="header_link" href="about.html">Об авторе</a> */}
                    <NavLink className={setActive} to={"/store/cart"}>Корзина</NavLink>
                    <button id="open_menubar_button">
                        ☰
                    </button>
                </div>
            </div>
            <div id="menubar">
                <nav id="menubar_links">
                    <a className="active" href="index.html">Главная</a>
                    <a href="contact.html">Контакты</a>
                    <a href="about.html">Об авторе</a>
                </nav>
            </div>
        </div>
    );
}

export default StoreHeader;