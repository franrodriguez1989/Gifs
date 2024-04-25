const apikey = "eAUAOajbs6HB97IwVtEXSc7An3y5YsV5&q"
//cambiar apikey si caduca o sobrepasas los request
export default function getGifs({keyword}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=
${apikey}=${keyword}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response =>{
      const {data} = response
      const gifsurl = data.map(image =>{ 
      const {images, title, id} = image
      const {url} = images.original
    
      //console.log(gifsurl)
      return {title, id, url}
    })
    return gifsurl
    })
}