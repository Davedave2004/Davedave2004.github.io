import React, {useRef} from 'react';
import '../styles/SideNav.scss';

type navItem = {
    label: string;
    href: string;
}

export function SideNav() {
    const sideNavRef = useRef<HTMLDivElement>(null);

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

    const closeSideNav = () => {
        if (sideNavRef.current) {
            sideNavRef.current.classList.add('closed');
        }
    }

    return (
        <div className="side-nav closed" ref={sideNavRef}>
            <div className="close-nav" onClick={closeSideNav}>
                <i className="fas fa-times"></i>
            </div>
            <nav>
                <ul>
                {navItems.map((item, index) => (
                    <li key={index}><a className="navItem" href={item.href}>{item.label}</a></li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export function openNav() {
    const closedSideNav: HTMLDivElement | null = document.querySelector('.side-nav.closed');
    if (closedSideNav) {
        closedSideNav.classList.remove('closed');
    }
}