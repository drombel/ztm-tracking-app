import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import router from './../../router';
import logo from './../../assets/bus-logo.png';
import './Header.scss';

export default function () {
    const [menu, setMenu] = useState(false);
    const onClickMenu = () => setMenu(v => !v);
    const onClickMenuHide = () => setMenu(true)
    return (
        <header className={menu ? 'active' : ''}>
            <nav>
                <div className="nav-brand p-3">
                    <Link to='/' className='text-decoration-none' onClick={onClickMenuHide}>
                        <img src={logo} alt="ZTM tracker" className='img-fluid' />
                        <div className='h2 text-white text-center'>ZTM tracker</div>
                    </Link>
                </div>
                <ul className='nav flex-column'>
                    {router.map(({ to, title, exact }, key) =>
                        title && <NavLink
                            to={to} exact key={key}
                            className='nav-item text-decoration-none py-2 px-3 font-weight-normal h5 m-0'
                            activeClassName='shadow active'
                            onClick={onClickMenuHide}
                        >{title}</NavLink>
                    )}
                </ul>
            </nav>
            <div className='menu-button' onClick={onClickMenu}><span></span></div>
        </header>
    );
}