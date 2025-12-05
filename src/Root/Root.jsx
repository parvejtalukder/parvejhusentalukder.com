import React from 'react';
import Header from '../Templates/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Templates/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;