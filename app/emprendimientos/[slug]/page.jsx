import { getSingleEmprend } from "@/libs/get-single-emprend";

export default async function Page({ params }) {

    const resolvedParams = await params;
  
    const data= await getSingleEmprend(resolvedParams);
    const emprendimiento= data[0];
    const {nombre, tipo,descripcion} = emprendimiento;
  if (!data) {
    return <div>Emprendimiento no encontrado</div>
  }

  return (
    <>
        <section>
            <section>
                <div>
                    <h1>
                        {nombre}
                    </h1>
                    <p>
                        {tipo}
                    </p>
                </div>
                <p>
                    {descripcion}
                </p>
            </section>
        </section>
        
    </>
  )
}
