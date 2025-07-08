import styles from "./page.module.css";
import getContactInfo from "@/libs/get-contacto";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default async function Page() {
  const { telefono, facebook, direccion, tiktok, email } =
    await getContactInfo();

  const socialLinks = [
    {
      name: "Teléfono:",
      contacto: telefono,
      icon: <IoCall className={styles.contact__icon} />,
    },
    {
      name: "Correo Electronico:",
      contacto: email,
      icon: <MdEmail className={styles.contact__icon} />,
    },
  ];

  const socialLinks2 = [
    {
      href: facebook,
      icon: <FaFacebookF className={styles.contact__icon} />,
      nombre: "Comunidad Ancestral La Toglla",
    },
    {
      href: tiktok,
      icon: <FaTiktok className={styles.contact__icon} />,
      nombre: "latoglla.official",
    },
  ];

  return (
    <>
      <h1 className="titles">Contacto</h1>
      <section className={styles.contact}>
        <div className={styles.contact__text}>
          <div className={styles.contact__div}>
            {socialLinks.map((link, index) => {
              return (
                <div key={link.name + index} className="flex--column gap--10">
                  <h2 className={styles.contact__title}>{link.name}</h2>
                  <div className="flex--row--nowrap gap--10 align--center">
                    {link.icon}
                    <p>{link.contacto}</p>
                  </div>
                </div>
              );
            })}
            <div className="flex--column gap--10">
              <h2 className={styles.contact__title}>Redes Sociales:</h2>
              {socialLinks2.map((link, index) => {
                return (
                  <Link
                    href={link.href}
                    className="flex--row--nowrap gap--10 align--center" 
                    key={index + link.nombre}
                  >
                    {link.icon}
                    <p>{link.nombre}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.contact__container}>
          <h2 className={styles.contact__title}>Nuestra Ubicación:</h2>
          <iframe
            src={direccion}
            className={styles.contact__map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
