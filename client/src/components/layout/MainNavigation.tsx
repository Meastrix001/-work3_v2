import react from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import * as Routes from '../../routes/index'
import navStyles from './mainNavigation.module.scss'

interface Props {

}

export const MainNavigation = () => {
    const [toggleMenu, setMenuOpen] = useState(false)
    const toggleMenuButton = () => {
        setMenuOpen(!toggleMenu)
    };
    return (
        <div className={navStyles.menu}>
            <div onClick={toggleMenuButton} className={!toggleMenu ? navStyles.navIcon4 : `${navStyles.navIcon4} ${navStyles.open}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={!toggleMenu ? navStyles.backDrop : `${navStyles.backDrop} ${navStyles.open}`}></div>
            <nav className={!toggleMenu ? navStyles.nav : `${navStyles.nav} ${navStyles.open}`}>
                <div>
                    <h2>KnowID</h2>
                </div>
                <ul >
                    <li><Link to={Routes.TEAM}>Team</Link></li>
                    <li><Link to={Routes.LOGIN}>Login</Link></li>
                    <li><Link to={Routes.REGISTER}>Registreer</Link></li>
                    <li><Link to={Routes.DASHBOARD}>Dashboard</Link></li>
                    <li><Link to={Routes.HOME}>Home</Link></li>
                </ul>
            </nav>
        </div>
    )
}
