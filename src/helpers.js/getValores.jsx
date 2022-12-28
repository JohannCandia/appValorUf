export const getValores = async (uf) =>{

    const url = `https://mindicador.cl/api`;

    const resp = await fetch(url);
    console.log(resp)

    //const {data} = await resp.json();
   
   // const gifs = data.map(img => ({
   //     id: img.id,
   //     title: img.title,
   //     url: img.images.downsized_medium.url
   // }))
    console.log(url)
    return resp;
        
    
   

}