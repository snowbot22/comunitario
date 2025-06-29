import { getEmprendsInfo } from "@/libs/get-emprends";

export async function Wrapp() {
    const res = await getEmprendsInfo();
    console.log(res[0].imagenes);

    return(
        <section>
            <h1>
                prueba
            </h1>
        </section>
    )
}