import { getEmprendsInfo } from "@/libs/get-emprends";
import styles from "./page.module.css"
import EmprendimientoCard from "@/components/EmprendimientoCard";

export async function Page () {
    const emprendimientos = await getEmprendsInfo();

    return (
        <>
            <h1 className="titles">
                Encuentra los mejores empredimientos en La Toglla
            </h1>
            <section className={styles.filter}>
                Filtros
            </section>
            <section className={styles.emps}>
                {emprendimientos.map((emprendimiento,index)=>{
                    return <EmprendimientoCard nombre={emprendimiento.nombre} descripcion={emprendimiento.descripcion} logo={emprendimiento.logo != null ? emprendimiento.logo : emprendimiento.imagenes[0]} slug={emprendimiento.slug}  key={index}/>
                })}
            </section>
        </>
    );
}

export default Page;
