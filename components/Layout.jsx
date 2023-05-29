import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import CategoryList from "./categories/CategoryList";


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <CategoryList/>
            {children}
        </>
    );
};
export default Layout;