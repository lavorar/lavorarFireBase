import React from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import SideBar from "./sidebar/SideBar";

const Layout = (props) => {
    return (
        <>
            <SideBar />
            <Footer />
        </>
    )
}

export default Layout;