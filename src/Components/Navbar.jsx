import React from 'react';
import {
    NavLink,
    Route,
    Routes
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Services';
import Contact from './Pages/Contact';
import Error from './Pages/Error'

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <div className='row align-items-center width'>
                        <div className='col-md-2'>
                            <NavLink to='/home' className='navbar-brand'>RH Infotech</NavLink>
                        </div>
                        <div className='col-md-10'>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 flex-row justify-content-end">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/service'>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Routing Start Here */}
            <Routes>
                <Route exact path='/home' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/service' element={<Service />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </>
    )
}
export default Navbar;