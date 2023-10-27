import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service/Service'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import "./index.css";
import BikeService from './Service/BikeService';
import CarService from './Service/CarService';

export default function Router() {
    return (
        <>

            <div className='container'>


                <BrowserRouter>
                    {/* <ul>
                    <li>
                    <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                    <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                    <Link to={"/service"}>Service</Link>
                    </li>
                </ul> */}

                    <Header />

                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/service">
                        <Route index element={<Service />} />
                        <Route path="/service/bike" element={<BikeService />} />
                        <Route path="/service/car" element={<CarService />} />
                        </Route>
                        <Route path="/about" element={<About />} />              
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
