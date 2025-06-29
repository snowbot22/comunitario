import Link from "next/link";
import "../styles/emprendimientoCard.css"

const EmprendimientoCard = ({nombre, descripcion, logo, slug}) => {
    return (
        <article className="emprendimientoCard">
            <img src={logo != null ? logo : imagenes} alt="" className="emprendimientoCard__image"/>
            <section className="emprendimientoCard__text">
                <h2 className="subtitle">
                    {nombre}
                </h2>
                <p className="emprendimientoCard__p">
                    {descripcion}
                </p>
                <Link href={`/emprendimientos/${slug}`} className="button--sky">
                    Ver más
                </Link>
            </section>
        </article>
    );
}

export default EmprendimientoCard;
