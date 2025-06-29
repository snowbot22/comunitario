import { query } from "./strapi";
const { HOST } = process.env;

export async function getHomeInfo() {
  return query("home?populate=cover").then((res) => {
    const { title, description, cover } = res.data;
    const image = `${HOST}${cover.url}`;
    return { title, description, image };
  });
}
