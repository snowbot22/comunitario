import Link from "next/link";
import "../styles/footer.css"
import { FaFacebook,FaTiktok  } from "react-icons/fa";


const Footer = () => {
    const linkSocial= [
        {
            name: "tiktok",
            href: "https://www.tiktok.com/@latoglla.official",
            icon: <FaTiktok className="footer__icon"/>
        },
        {
            name: "facebook",
            href: "https://www.facebook.com/comunidadlatoglla?locale=es_LA",
            icon: <FaFacebook className="footer__icon"/>
        }
    ]

    const linkPage= [
        {
            name: "Inicio",
            href: "/"
        },
        {
            name: "Emprendimientos",
            href: "/emprendimientos"
        },
        {
            name: "Contacto",
            href: "/contacto"
        },
        {
            name: "Ventas",
            href: "/ventas"
        }
    ]

    return (
        <footer className="flex--column">
            <section className="footer__contact flex--column">
                <h3>
                    Comunidad Ancestral La Toglla
                </h3>
                <div className="flex--row--wrap gap--15">
                    {linkSocial.map((link, index)=>{
                        return <Link href={link.href} key={link.name + index}>
                            {link.icon}
                        </Link>
                    })}
                </div>
            </section>
            <section className="footer__nav flex--column">
                <h3>
                    Navegación
                </h3>
                <div className="flex--row--wrap gap--15 footer__container">
                    {linkPage.map((link, index)=>{
                        return <Link href={link.href} key={link.name + index} className="footer__link"> 
                            {link.name}
                        </Link>
                    })}
                </div>
            </section>
        </footer>
    );
}

export default Footer;
