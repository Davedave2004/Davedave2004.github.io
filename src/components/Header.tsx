import React, { useState } from "react";
import logo from '../img/logo.png';
import '../styles/Header.scss';

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

    const navItems: navItem[] = [
        {
            label: 'Top',
            href: '#top'
        },
        {
            label: 'Components',
            href: '#components'
        },
        {
            label: 'Card',
            href: '#card'
        },
        {
            label: 'To Do',
            href: '#todo'
        }
    ];

    const [title] = useState(logoNav.label);

    return (
        <header>
            <a className="logo-link" href={logoNav.href}>
                <img src={logoNav.src} alt="header logo" />
            </a>
            <label>{title}</label>
            <nav>
                <ul>
                {navItems.map((item, index) => (
                    <li key={index}><a className="navItem" href={item.href}>{item.label}</a></li>
                ))}
                </ul>
            </nav>
      </header>
    )
}