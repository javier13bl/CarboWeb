import { Outlet, Link } from "react-router-dom"
import React, { useState } from 'react';
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

const Layout = () => {
    const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [subMenuClass, setSubMenuClass] = useState('subMenu hidden');
    const [menuClicked, setMenuClicked] = useState(false);

    const [redesClass, setRedesClass] = useState('subnavContent');
    const [redesClicked, setRedesClicked] = useState(false);

    const updateMenu = () => {
        if (!menuClicked) {
            setBurgerClass('burgerBar clicked')
            setMenuClass('menu visible')
            setSubMenuClass('subMenu visible')
            setRedesClass('subnavContent')
        } else {
            setBurgerClass('burgerBar unclicked')
            setMenuClass('menu hidden')
            setSubMenuClass('subMenu hidden')
            if (redesClicked) {
                setRedesClicked(false)
            }
        }
        setMenuClicked(!menuClicked)
    }
    const updateRedes = () => {
        if (!redesClicked) {
            setRedesClass('subnavContent subnavShown')
        } else {
            setRedesClass('subnavContent')
        }
        setRedesClicked(!redesClicked)
    }

    return (
        <>
            <ScrollToTop/>
            <div className='navBg'>
                <nav className='navbar wrapper'>
                    <div className='www burgerMenu' onClick={updateMenu}>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                    </div>
                    <div className={menuClass}>
                        <div className='menuLinks'>
                            <Link to={'/'} onClick={updateMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smart-home" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
                                    <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
                                </svg>
                                <span>Inicio</span>
                            </Link>
                            <Link to={'/nosotros'} onClick={updateMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circles" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="7" r="4" />
                                    <circle cx="6.5" cy="17" r="4" />
                                    <circle cx="17.5" cy="17" r="4" />
                                </svg>
                                <span>Nosotros</span>
                            </Link>
                            <Link to={'/productos'} onClick={updateMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-factory" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
                                    <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
                                    <line x1="3" y1="21" x2="22" y2="21" />
                                </svg>
                                <span>Productos</span>
                            </Link>
                            
                            <Link to={'/sostenible'} onClick={updateMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-leaf" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                                    <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                                </svg>
                                <span>Sostenible</span>
                            </Link>
                            <Link to={'/contacto'} onClick={updateMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-linked" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3" />
                                    <path d="M5.003 15.734a2 2 0 0 1 -1.003 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3" />
                                </svg>
                                <span>Contáctanos</span>
                            </Link>
                        </div>
                    </div>
                    <div className={subMenuClass} onClick={updateMenu}></div>
                    <Link to={'/'} className='homeLink'>Carbo<span>web</span></Link>
                    <div className='www subnav' onClick={updateRedes}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d1d1b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                        </svg>
                        <div className={redesClass}>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="27.5" height="27.5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                            <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="27.5" height="27.5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <span>Facebook</span>
                            </a>
                            <Link to={'/contacto'}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward" width="27.5" height="27.5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E8EBED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                                    <path d="M3 6l9 6l9 -6" />
                                    <path d="M15 18h6" />
                                    <path d="M18 15l3 3l-3 3" />
                                </svg>
                                <span>Correo</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout