import { query } from "./strapi";
const { HOST } = process.env;

export async function getInicioInfo() {
  return query(
    "inicio?populate[hero][populate][imagenes][fields][0]=url&populate[historia][populate][slider][fields][0]=url&populate[historia][populate][slider][fields][1]=alternativeText"
  ).then((res) => {
    const { hero, historia } = res.data;
    const heroTitle = hero.titulo;
    const heroLink = hero.linkBoton;
    const heroImage = `${HOST}${hero.imagenes.url}`;
    const historiaTitle = historia.titulo;
    const historiaParrafo = historia.parrafo;
    const historiaImages = historia.slider.map((url, index) => {
      return `${HOST}${url.url}`;
    });
    const historiaAlt = historia.slider.map((alt, index) => {
      return alt.alt;
    });
    return {
      heroTitle,
      heroLink,
      heroImage,
      historiaTitle,
      historiaParrafo,
      historiaImages,
      historiaAlt,
    };
  });
}
