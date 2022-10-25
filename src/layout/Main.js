import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/SideBar/LeftSideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='grid grid-cols-8'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;