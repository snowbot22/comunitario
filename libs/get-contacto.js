import { query } from "./strapi";
const { HOST } = process.env;

export default async function getContactInfo() {
  let queryUrl =
    `contacto` +
    `?fields[0]=telefono` +
    `&fields[1]=email` +
    `&fields[2]=tiktok` +
    `&fields[3]=facebook` +
    `&fields[4]=direccion`;

  return query(queryUrl).then((res) => {
    const { telefono, email, tiktok, facebook, direccion } = res.data;

    return {
      telefono,
      email,
      tiktok,
      facebook,
      direccion,
    };
  });
}
