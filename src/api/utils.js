export const getApiData = async (url) => {
  return fetch(process.env.API_LINK + url)
  // return fetch("https://theritual.moona.dev/wp-json/wp/v2/" + url, {method: "GET"})
  .then( res => res.json())
  .then(res => res)
}