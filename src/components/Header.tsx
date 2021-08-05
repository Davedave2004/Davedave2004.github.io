import React, { useState } from "react";
import logo from '../img/logo.png';

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
        }
    ];

    const [title] = useState(logoNav.label);

    return (
        <header>
            <a href={logoNav.href}>
                <img src={logoNav.src} alt="header logo" />
                <label>{title}</label>
            </a>
            <nav>
                {navItems.map((item) => (
                    <a className="navItem" href={item.href}>{item.label}</a>
                ))}
            </nav>
      </header>
    )
}