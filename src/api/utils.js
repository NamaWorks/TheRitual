export const getApiData = async (url) => {
  return fetch(process.env.API_LINK + url)
  .then( res => res.json())
  .then(res => res)
}