import Link from "next/link";
import Slider from "./Slider";
import "../styles/ventaCard.css"

const VentaCard = ({titulo, descripcion, precio,direccion, telefono, whatsapp,imagenes, alts}) => {
    return (
        <section className="ventaCard">
            <section className="ventaCard__text flex--column">
                <div className="gap--5 flex--column">
                     <h3 className="ventaCard__title">
                        {titulo}
                    </h3>
                    {precio && <p className="ventaCard__precio">{precio} $</p>}
                </div>
                <p>
                    {descripcion}
                </p>
                {telefono != null || direccion != null ? <div className="flex--row--wrap gap--30">
                    {telefono && <div><h4 className="color--yellow">Teléfono:</h4><p>{telefono}</p></div>}
                    {direccion && <div><h4 className="color--yellow">Dirección:</h4><p>{direccion}</p></div> }
                </div>: null}
                {whatsapp && <Link className="button--sky" href={`https://wa.me/593${whatsapp}`}>
                    Contactar
                </Link>}
            </section>
            <section className="ventaCard__container">
                <Slider images={imagenes} alts={alts}/>
            </section>
        </section>
    );
}

export default VentaCard;
