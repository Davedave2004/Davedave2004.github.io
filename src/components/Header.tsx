import React, { useState } from "react";
import logo from '../img/logo.png';
import '../styles/Header.scss';
import {openNav} from './SideNav';

type navItem = {
    label: string;
    href: string;
}

interface headerProps {
    logoNav?: {
        logoSrc: string;
        label: string;
        href: string;
    }
    navItems?: navItem[];
}

export function Header(props: headerProps) {
    const logoNav = {
        src: logo,
        label: 'MyPage',
        href: '#top'
    }

    const [title] = useState(logoNav.label);

    return (
        <header>
            <a className="logo-link" href={logoNav.href}>
                <img src={logoNav.src} alt="header logo" />
            </a>
            <label>{title}</label>
            <div onClick={openNav}>
                <i className="fas fa-bars"></i>
            </div>
      </header>
    )
}