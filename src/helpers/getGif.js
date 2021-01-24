export const getGif = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=QLx0vFFVRWghPCxh0NZ64c6ktzgWW5z4&q=${encodeURI(category)}&limit=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })
    return(gifs);
} 
