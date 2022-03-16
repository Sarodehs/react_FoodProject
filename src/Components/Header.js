import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

export default function Header() {
    return (
        <>
            <div>
                <header class="sticky">
                    <div class="nav img">
                        <img src="./assets/image/logo.png" alt="logo" />
                    </div>
                    <div class="navbar">
                        <a href="/#"> <NavLink to="/" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Home</NavLink></a>
                        <a href="Menu.html"><NavLink to="/Menu" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Menu </NavLink></a>
                        <a href="/#"><NavLink to="/About" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> About</NavLink></a>
                        <div class="dropdown">
                            <button class="dropbtn"> Pages
                                <i class="triangle-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="/#"><NavLink to="/Reservation" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Reservation </NavLink></a>
                                <a href="/#"><NavLink to="/Stuff" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Stuff </NavLink></a>
                                <a href="/#"><NavLink to="/Gallery" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Gallery </NavLink></a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Blog
                                <i class="triangle-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="/#"><NavLink to="/Blog" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Blog </NavLink></a>

                                <a href="/#"><NavLink to="/BlogSingle" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> BlogSingle </NavLink></a>
                            </div></div>
                        <a href="/#"><NavLink to="/Contact" className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}> Contact </NavLink></a>
                    </div>

                </header>

            </div>
        </>
    );
}
