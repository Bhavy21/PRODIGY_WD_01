import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Sect from './Section';
import Footer from './Footer'
function Main2() {
    return (
        <>
            <Nav />
            <main>
                <Home />
                <Sect/>
            </main>
            <Footer/>
        </>
    );
};

export default Main2;
