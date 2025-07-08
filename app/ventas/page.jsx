import { getVentasInfo } from "@/libs/get-ventas";
import VentaCard from "@/components/VentaCard";
import styles from "./page.module.css";
import { Paginacion } from "@/components/Paginacion";

export default async function Page({searchParams}) {
  const {page} = await searchParams;
  const data = await getVentasInfo({page:page,pageSize:3})
  const ventas= data.ventas;
  const paginacion= data.paginacion;
  console.log(paginacion.pageCount);

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
      <Paginacion page={paginacion.page} pageCount={paginacion.pageCount}/>
    </>
  );
}
