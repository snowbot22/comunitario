const { HOST, API_TOKEN } = process.env;

export function query(url) {
  return fetch(`${HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then((res) => res.json());
}
