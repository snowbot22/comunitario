import { Wrapp } from "@/components/Wrapp";
import { getEmprendsInfo } from "@/libs/get-emprends";
import styles from "./page.module.css";
import Link from "next/link";
import { getInicioInfo } from "@/libs/get-inicio";
import Slider from "@/components/Slider";

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
    </>
  );
}
