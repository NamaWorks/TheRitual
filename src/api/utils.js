export const getApiData = async (url) => {
  return fetch(process.env.API_LINK + url)
  // return fetch("https://theritual.moona.dev/wp-json/wp/v2/" + url, {method: "GET"})
  .then( res => res.json())
  .then(res => res)
}

export const getApiDataFront = async () => {
  const request = await window.fetch("http://localhost:3000/about");
  
  if(request.status === 200){
    const html = await request.text();
    // now we can modify the inner html of our document with this one. maybe it would be better to print all the html inside a div in order to select whichever elements we want from them using querySelector and then adding them to our document => see Luis Bizarro project in order to know more (frontend index.js file).
  }
};