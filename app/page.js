import { getEmprendsInfo } from "@/libs/get-emprends";
import styles from "./page.module.css";
import Link from "next/link";
import { getInicioInfo } from "@/libs/get-inicio";
import Slider from "@/components/Slider";
import { getVentasInfo } from "@/libs/get-ventas";
import VentaCardIndex from "@/components/VentaCardIndex";

export default async function Home() {
  const {
    heroTitle,
    heroLink,
    heroImage,
    historiaTitle,
    historiaParrafo,
    historiaImages,
    historiaAlt,
  } = await getInicioInfo();
  console.log(historiaImages);

  const dataVentas = await getVentasInfo({ page: 1, pageSize: 4 });
  const ventas = dataVentas.ventas;
  console.log(ventas);

  return (
    <>
      <article className={styles.hero}>
        <img src={heroImage} alt="imagen" className={styles.hero__img} />
        <section className={`${styles.hero__text} flex--center`}>
          <h1 className={styles.hero__title}>{heroTitle}</h1>
          <Link href={`/${heroLink}`} className="button--sky">
            Descubre más
          </Link>
        </section>
      </article>
      <article className={`${styles.historia} flex--center`}>
        <section className={`${styles.historia__text}`}>
          <h2 className="titles--2">{historiaTitle}</h2>
          <p>{historiaParrafo}</p>
          <Link
            href="https://www.facebook.com/comunidadlatoglla"
            className="button--sky"
          >
            Conoce más
          </Link>
        </section>
        <section className={styles.historia__container}>
          <Slider images={historiaImages} alts={historiaAlt} />
        </section>
      </article>
      <article className={styles.ventas}>
        <h2 className={styles.ventas__title}>Últimas Ventas</h2>
        <section className={styles.ventas__container}>
          {ventas.map((venta, index) => {
            return (
              <VentaCardIndex
                key={venta.titulo + index}
                nombre={venta.titulo}
                descripcion={venta.descripcion}
                link={`https://wa.me/593${venta.whatsapp}`}
                image={venta.fotos[0]}
                alt={venta.ventaAlt[0]}
              />
            );
          })}
        </section>
        <Link className="button--white" href="/ventas">
          Ver más
        </Link>
      </article>
    </>
  );
}
