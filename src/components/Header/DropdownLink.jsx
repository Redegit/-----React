import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? 'link_active nav-link my-dropdown-item' : 'nav-link my-dropdown-item'


export const DropdownLink = ({ obj }) => {
    const dropDownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (dropDownRef.current) {
                if (!dropDownRef.current.contains(e.target) && !dropDownRef.current.contains(e.target)) {
                    setShowDropdown(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [dropDownRef]);

    return (
        <li ref={dropDownRef} className="my-dropdown">
            <button onClick={() => { setShowDropdown(!showDropdown) }} className={"btn nav-link dropdown-toggle "} type="button">
                {obj.name}
            </button>
            {showDropdown &&
                <ul className="my-dropdown-menu">
                    {obj.children.map((link, index) => {
                        return <NavLink key={index} className={setActive} to={link.path}>{link.name}</NavLink>
                    }
                    )}
                </ul>
            }
        </li>
    );
}
