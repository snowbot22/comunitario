const { HOST, API_TOKEN } = process.env;

export function query(url) {
  return fetch(`${HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      cache: 'no-store'
    },
  }).then((res) => res.json());
}
