import React from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ContentPage from "../layouts/ContentPage";

const WebPage: React.FC = () => {
    return(
        <>
            <Header />
            <ContentPage />
            <Footer />
        </>
    );
}

export default WebPage;