import React from 'react';

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
                <p className="title">{props.title}</p>
                <img src={props.logoSrc} className="logo" alt="card logo"/>
            </section>
            <section>
                <img className="id-picture" src={props.idSrc} alt="profile picture"/>
                <p className="name">{props.name}</p>
            </section>
        </div>
    )
}