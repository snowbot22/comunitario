import { query } from "./strapi.jsx";
const { HOST } = process.env;

export async function getEmprendsInfo() {
  return query(
    "emprends?fields[0]=nombre&fields[1]=slug&fields[2]=descripcion&fields[3]=tipo&populate[imagenes][fields][0]=url&populate[logo][fields][0]=url"
  ).then((res) => {
    return res.data.map((emprendimiento, index) => {
      const {
        nombre,
        slug,
        descripcion,
        tipo,
        imagenes: rawImagenes,
        logo: rawLogo,
      } = emprendimiento;
      const imagenes = rawImagenes.map((img) => {
        return `${HOST}${img.url}`;
      });

      let logo;

      if (rawLogo != null) {
        logo = `${HOST}${rawLogo.url}`;
      } else {
        logo = null;
      }

      return { nombre, slug, descripcion, tipo, imagenes, logo };
    });
  });
}
