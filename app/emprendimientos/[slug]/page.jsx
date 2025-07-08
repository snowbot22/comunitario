import { getSingleEmprend } from "@/libs/get-single-emprend";
import { SiFacebook } from "react-icons/si";
import { FaTiktok, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import styles from "./page.module.css";
import Link from "next/link";
import Slider from "@/components/Slider";
import { getEmprendsByNum } from "@/libs/get-empreds-by-number";

export default async function Page({ params }) {
  const resolvedParams = await params;

  const data = await getSingleEmprend(resolvedParams);
  const emprendimiento = data[0];
  const {
    id,
    nombre,
    tipo,
    descripcion,
    imagenes,
    alt,
    linkFacebook,
    linkInstagram,
    linkTiktok,
    direccion,
    whatsapp,
    productos,
    productoNombre,
    productoPrecio,
    productoImagen,
    productoAlt,
  } = emprendimiento;
  if (!data) {
    return <div>Emprendimiento no encontrado</div>;
  }

  let linkComprar;
  if(whatsapp!=null){
    linkComprar= `https://wa.me/593${whatsapp}`
  }
  else{
    linkComprar= direccion;
  }

  const getThreeEmprends= await getEmprendsByNum({num: 3, id:id});

  return (
    <>
      <section className={`${styles.info} flex--row--wrap`}>
        <section className={`flex--column ${styles.info__text}`}>
          <div>
            <h1 className={` ${styles.info__title}`}>{nombre}</h1>
            <p className={`color--yellow ${styles.info__tipo}`}>{tipo}</p>
            {linkFacebook != null ||
            linkInstagram != null ||
            linkTiktok != null ? (
              <div className="flex--row--wrap gap--15">
                {linkFacebook && (
                  <Link href={linkFacebook}>
                    <SiFacebook className={styles.info__social} />
                  </Link>
                )}
                {linkInstagram && (
                  <Link href={linkInstagram}>
                    <BsInstagram className={styles.info__social} />
                  </Link>
                )}
                {linkTiktok && (
                  <Link href={linkTiktok}>
                    <FaTiktok className={styles.info__social} />
                  </Link>
                )}
              </div>
            ) : null}
          </div>
          <p className={styles.info__p}>{descripcion}</p>
          <div className="flex--row--wrap gap--20">
            {direccion && (
              <Link href={direccion} className="button--icon--sky--bg">
                <FaMapMarkerAlt />
                Encuentranos
              </Link>
            )}
            {whatsapp && (
              <Link href={whatsapp} className="button--icon--sky--bg">
                <FaWhatsapp />
                Escribenos
              </Link>
            )}
          </div>
        </section>
        <section className={styles.info__container}>
          <Slider images={imagenes} alts={alt} />
        </section>
      </section>
      <section className={`${styles.products} flex--column`}>
        <h2 className={styles.info__title}>Productos</h2>
        <section className={`${styles.products__container} `}>
          {productos.map((producto, index) => {
            return (
              <div className={`${styles.products__card} flex--column`} key={index}>
                <img className={styles.products__img} src={productoImagen[index]} alt={productoAlt[index]} />
                <div className={`${styles.products__text} flex--column`}>
                  <h3 className="text--bold">{productoNombre [index]}</h3>
                  <p className="text--bold color--yellow font--20"> $ {productoPrecio[index]}</p>
                  <Link href={linkComprar} className="button--sky">
                    Comprar
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </section>
      <section className={`${styles.related} flex--column`}>
        <h2 className={styles.related__title}>
          Descubre más emprendimientos
        </h2>
        <section className={`${styles.related__container} flex--row--wrap`}>
          {getThreeEmprends.map((emprendimiento)=>{
            return <div className={`${styles.related__card} flex--column`}>
              <img className={styles.related__img} src={emprendimiento.urlImagen} alt={emprendimiento.altImagen} />
              <div className="flex--column gap--15">
                <h3>
                {emprendimiento.nombre}
              </h3>
              <Link href={`/emprendimientos/${emprendimiento.slug}`} className="button--sky">
                Ver más
              </Link>
              </div>
            </div>
          })}
        </section>
      </section>
    </>
  );
}
