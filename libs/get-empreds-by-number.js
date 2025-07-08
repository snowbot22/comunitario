import { query } from "./strapi.jsx";
const { HOST } = process.env;

export async function getEmprendsByNum({ num, id }) {
  let queryString =
    `emprends?sort=createdAt:desc&pagination[limit]=${num}&filters[id][$ne]=${id}` +
    `&fields[0]=nombre` +
    `&fields[1]=slug` +
    `&populate[imagenes][fields][0]=url` +
    `&populate[imagenes][fields][1]=alternativeText` +
    `&populate[logo][fields][0]=url` +
    `&populate[logo][fields][1]=alternativeText`;

  return query(queryString).then((res) => {
    return res.data.map((emprendimiento) => {
      const {
        nombre,
        slug,
        logo: rawLogo,
        imagenes: rawImagen,
      } = emprendimiento;
      let urlImagen;
      let altImagen;

      if (rawLogo != null) {
        urlImagen = `${HOST}${rawLogo.url}`;
        altImagen = rawLogo.alternativeText;
      } else {
        urlImagen = `${HOST}${rawImagen[0].url}`;
        altImagen = rawImagen[0].alternativeText;
      }

      return { nombre, slug, urlImagen, altImagen };
    });
  });
}
