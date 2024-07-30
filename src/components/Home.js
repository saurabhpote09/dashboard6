import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Dashboard from './Dashbaord';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/5">
                    <Navbar />
                </div>
                <div className="flex-1 p-4">
                    <Dashboard />
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Home;
