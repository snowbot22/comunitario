import { query } from "./strapi.jsx";
const { HOST } = process.env;

export async function getSingleEmprend({ slug }) {
  const queryString =
    `emprends?filters[slug][$eq]=${slug}&` +
    `fields[0]=nombre&fields[1]=descripcion&fields[2]=tipo&` +
    `populate[imagenes][fields][0]=url&populate[imagenes][fields][1]=alternativeText&` +
    `populate[logo][fields][0]=url&` +
    `populate[productos][populate][imagen][fields][0]=url&populate[productos][populate][imagen][fields][1]=alternativeText`;
  return query(queryString).then((res) => {
    return res.data.map((emprendimiento) => {
      const {
        nombre,
        descripcion,
        tipo,
        imagenes: rawImagenes,
        productos,
      } = emprendimiento;

      const imagenes = rawImagenes.map((url) => {
        return `${HOST}${url.url}`;
      });

      const alt = rawImagenes.map((alt) => {
        return alt.alternativeText;
      });

      const productoNombre = productos.map((nombres) => {
        return nombres.nombre;
      });
      const productoPrecio = productos.map((precios) => {
        return precios.precio;
      });
      const productoImagen = productos.map((imagenes) => {
        return imagenes.imagen.url;
      });
      const productoAlt = productos.map((alts) => {
        return alts.imagen.alternativeText;
      });

      return {
        nombre,
        descripcion,
        tipo,
        imagenes,
        alt,
        productoNombre,
        productoPrecio,
        productoImagen,
        productoAlt,
      };
    });
  });
}
