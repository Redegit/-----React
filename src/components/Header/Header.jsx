import { NavLink } from "react-router-dom";
import './Header.scss'
import { DropdownLink } from "./DropdownLink";


const setActive = ({ isActive }) => isActive ? 'link_active nav-link' : 'nav-link'


export const Header = () => {

    const navLinks = [
        {
            path: '/',
            name: 'Главная'
        },
        {
            name: 'Лабораторная 3',
            children: [
                {
                    path: '/scientists',
                    name: 'Ученые'
                },
                {
                    path: '/calc',
                    name: 'Калькулятор'
                }]
        },
        {
            path: 'books',
            name: 'Лабораторная 4'
        },
        {
            path: 'toggle',
            name: 'Вместо лабы 5'
        },
        {
            path: 'store/home',
            name: 'Лабораторная 6'
        },
        {
            name: 'Лабораторная 7',
            children: [
                {
                    path: '/attendance',
                    name: 'Список студентов'
                },
                // {
                //     path: '/button',
                //     name: 'Кнопка'
                // },
                {
                    path: '/clock',
                    name: 'Часы'
                },
            ]
        },
        {
            path: '/lab8',
            name: 'Лабораторная 8'
        },
    ]

    return (
        <header className="glass-card">
            <nav className="container navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto gap-3 flex-wrap flex-row">
                    {!navLinks.empty && navLinks.map((obj, index) => {
                        if (obj.children) {
                            return <DropdownLink obj={obj} key={index} />
                        } else {
                            return (
                                <li key={index} className="nav-item">
                                    <NavLink className={setActive} to={obj.path}>{obj.name}</NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </header>
    );
}
