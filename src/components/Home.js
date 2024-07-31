import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Dashboard from './Dashbaord';
import Footer from './Footer';


const Home = () => {
    const [isNavshow, setIsNavshow] = useState(true)
    return (
        <>
            <Header setIsNavshow={setIsNavshow} isNavshow={isNavshow} />
            <div className="flex flex-col md:flex-row">
                {isNavshow ?
                    <div className=" basis-full md:basis-1/5">
                        <Navbar isNavshow={isNavshow} />
                    </div> : ''
                }
                <div className="flex-1 p-4">
                    <Dashboard />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
