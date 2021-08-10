import React from 'react';
import '../styles/ReactCard.scss';

interface cardProps {
    title: string;
    logoSrc: string;
    name: string;
    idSrc: string;
}

export function ReactCard(props: cardProps): JSX.Element {
    return (
        <div className="react-card">
            <section className="header">
                <img src={props.logoSrc} className="logo" alt="card logo"/>
                <p className="title">{props.title}</p>
            </section>
            <section className="content">
                <div>
                    <img className="id-picture" src={props.idSrc} alt="profile"/>
                    <p className="id-number">ID Number: 02020001</p>
                </div>
                <p className="name">{props.name}</p>
            </section>
        </div>
    )
}