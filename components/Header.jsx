"use client"


import Link from "next/link";
import { useState } from "react";
import "../styles/header.css"

const Header = () => {

    const links= [
        {
            title: "Inicio",
            link: "/"
        },
        {
            title: "Emprendimientos",
            link: "/emprendimientos"
        },
        {
            title: "Contacto",
            link: "/contacto"
        },
        {
            title: "Ventas",
            link: "/ventas"
        }
    ]

    return (
        <header>
           <img src="/images/logo.png" className="header__image"/>
            <section className="header__section">
                <ul className="ul--reset header__list">
                   {links.map((link,index)=>{
                    return <li key={index} className="header__li flex--center">
                        <Link href={link.link} className="transform--scale">
                            {link.title}
                        </Link>
                    </li>
                   })}
                </ul>
            </section>
        </header>
    );
}

export default Header;
