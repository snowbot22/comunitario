import { query } from "./strapi";
const { HOST } = process.env;

export async function getVentasInfo() {
  return query(
    "ventas?fields[0]=titulo&fields[1]=descripcion&fields[2]=precio&fields[3]=telefono&fields[4]=direccion&fields[5]=whatsapp&populate[fotos][fields][0]=url&populate[fotos][fields][1]=alternativeText"
  ).then((res) => {
    return res.data.map((venta) => {
      const {
        titulo,
        descripcion,
        precio,
        telefono,
        direccion,
        whatsapp,
        fotos: rawFotos,
      } = venta;

      let fotos =
        rawFotos != null
          ? rawFotos.map((url) => {
              return `${HOST}${url.url}`;
            })
          : null;

      let ventaAlt =
        rawFotos != null
          ? rawFotos.map((alt) => {
              return alt.alternativeText;
            })
          : null;

      return {
        titulo,
        descripcion,
        precio,
        telefono,
        direccion,
        whatsapp,
        fotos,
        ventaAlt,
      };
    });
  });
}
