import { query } from "./strapi.jsx";
const { HOST } = process.env;

export async function getSingleEmprend({ slug }) {
  const queryString =
    `emprends?filters[slug][$eq]=${slug}&` +
    `fields[0]=nombre&` +
    `fields[1]=descripcion&` +
    `fields[2]=tipo&` +
    `fields[3]=linkFacebook&` +
    `fields[4]=linkTiktok&` +
    `fields[5]=linkInstagram&` +
    `fields[6]=direccion&` +
    `fields[7]=whatsapp&` +
    `populate[imagenes][fields][0]=url&` +
    `populate[imagenes][fields][1]=alternativeText&` +
    `populate[logo][fields][0]=url&` +
    `populate[productos][populate][imagen][fields][0]=url&` +
    `populate[productos][populate][imagen][fields][1]=alternativeText`;
  return query(queryString).then((res) => {
    return res.data.map((emprendimiento) => {
      const {
        id,
        nombre,
        descripcion,
        tipo: rawTipo,
        imagenes: rawImagenes,
        productos,
        linkFacebook,
        linkTiktok,
        linkInstagram,
        direccion,
        whatsapp,
      } = emprendimiento;

      const imagenes = rawImagenes.map((url) => {
        return `${HOST}${url.url}`;
      });

      const alt = rawImagenes.map((alt) => {
        return alt.alternativeText;
      });

      const tipo =
        rawTipo.charAt(0).toUpperCase() + rawTipo.slice(1).toLowerCase();

      const productoNombre = productos.map((nombres) => {
        return nombres.nombre;
      });
      const productoPrecio = productos.map((precios) => {
        return precios.precio;
      });
      const productoImagen = productos.map((imagenes) => {
        return `${HOST}${imagenes.imagen.url}`;
      });
      const productoAlt = productos.map((alts) => {
        return alts.imagen.alternativeText;
      });

      return {
        id,
        nombre,
        descripcion,
        tipo,
        imagenes,
        alt,
        productos,
        productoNombre,
        productoPrecio,
        productoImagen,
        productoAlt,
        linkFacebook,
        linkInstagram,
        linkTiktok,
        direccion,
        whatsapp,
      };
    });
  });
}
