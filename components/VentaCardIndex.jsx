import Link from 'next/link';
import React from 'react';
import "../styles/ventaCardIndex.css";

const VentaCardIndex = ({nombre, descripcion, link, image, alt}) => {
    return (
        <section className="cardIndex">
            <div className='cardIndex__text'>
                <h3>
                    {nombre}
                </h3>
                <p>
                    {descripcion}
                </p>
                <Link href={link} className="button--sky">
                    Contacto
                </Link>
            </div>
            <img src={image} alt={alt} className="cardIndex__image"/>
        </section>
    );
}

export default VentaCardIndex;
