import { Paginacion } from "@/components/Paginacion";
import { getEmprendsInfo } from "@/libs/get-emprends";
import styles from "./page.module.css";
import EmprendimientoCard from "@/components/EmprendimientoCard";

export default async function Page({ searchParams }) {
  const { page } = await searchParams;
  const data = await getEmprendsInfo({ page: page, pageSize: 4 });

  return (
    <>
      <h1 className="titles">
        Encuentra los mejores empredimientos en La Toglla
      </h1>
      <section className={styles.emps}>
        {data.emprendimientos.map((emprendimiento, index) => {
          return (
            <EmprendimientoCard
              nombre={emprendimiento.nombre}
              descripcion={emprendimiento.descripcion}
              logo={
                emprendimiento.logo != null
                  ? emprendimiento.logo
                  : emprendimiento.imagenes[0]
              }
              slug={emprendimiento.slug}
              key={index}
            />
          );
        })}
      </section>
      ;
      <Paginacion
        page={data.paginacion.page}
        pageCount={data.paginacion.pageCount}
      />
    </>
  );
}
