import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const PageWrapper = () => {
    return (
        <>
            <Header />
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}
