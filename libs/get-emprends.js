import { query } from "./strapi.jsx";
const { HOST } = process.env;
const pageSize = 2;

export async function getEmprendsInfo({ pageSize, page }) {
  let url =
    `emprends?` +
    `&fields[0]=nombre` +
    `&fields[1]=slug` +
    `&fields[2]=descripcion` +
    `&fields[3]=tipo` +
    `&populate[imagenes][fields][0]=url` +
    `&populate[logo][fields][0]=url`;

  if (page) url += `&pagination[page]=${page}`;
  if (pageSize) url += `&pagination[pageSize]=${pageSize}`;
  return query(url).then((res) => {
    const numPaginas = res.meta.pagination;
    const data = res.data.map((emprendimiento, index) => {
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

    return {
      emprendimientos: data,
      paginacion: numPaginas,
    };
  });
}
