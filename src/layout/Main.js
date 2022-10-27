import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/SideBar/LeftSideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-6'>
                <div className='col-span-1 hidden md:block lg:block'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-5'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;