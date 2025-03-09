import Footer from "./Footer";
import Header from "./Header";
import Menus from "../panels/Menus";
import React from "react";

const ContentPage: React.FC<{ children: React.ReactNode, secondary_page: boolean }> = ({ children, secondary_page }) => {
    return(
        <>
            <Header secondary_page={secondary_page} />
            <Menus></Menus>
            <main className={'min-h-screen'}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default ContentPage;