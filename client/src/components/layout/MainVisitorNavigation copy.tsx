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
        <header className="header spacing container">
            <div>
                <div>
                    <h1 className="logo"><a href="./index.html">DA</a></h1>
                    <svg className="menu-btn-exit" height="329pt" viewBox="0 0 329.26933 329" width="329pt"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                    </svg>

                    <svg className="menu-btn" height="384pt" viewBox="0 -53 384 384" width="384pt"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path
                            d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path
                            d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    </svg>
                    <nav className=" nav">
                        <ul className="col nav__list">
                            <li className="nav__list-item nav__list-item--active"><a href="index.html">Home</a></li>
                            <li className="nav__list-item"><a href="aboutUs/index.html">About</a></li>
                            <li className="nav__list-item"><a href="contact/index.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
