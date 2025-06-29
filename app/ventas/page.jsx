import { getVentasInfo } from "@/libs/get-ventas";
import VentaCard from "@/components/VentaCard";
import styles from "./page.module.css";

export async function Page() {
  const ventas = await getVentasInfo();

  return (
    <>
      <h1 className="titles">Anuncios de ventas en La Toglla</h1>
      <article className={`${styles.container} flex--column`}>
        {ventas.map((venta, index) => {
          return (
            <VentaCard
              titulo={venta.titulo}
              descripcion={venta.descripcion}
              precio={venta.precio}
              telefono={venta.telefono}
              direccion={venta.direccion}
              whatsapp={venta.whatsapp}
              imagenes={venta.fotos}
              alts={venta.ventaAlt}
              key={index}
            />
          );
        })}
      </article>
    </>
  );
}

export default Page;
