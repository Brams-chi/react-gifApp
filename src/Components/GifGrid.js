import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

   
    const { data : images ,loading }= useFetchGif(category);
    console.log(loading);
    


  
    return (
        <>
            <h3> { category }</h3> 
            { loading  && <p className="animate__animated animate__flash" >Cargando ... </p>  }
    
            <div className="card-grid animate__animated animate__fadeIn">
                {
                    images.map( img =>
                        <GifGridItem 
                            key = {img.id}
                            {...img} 
                        />
                    )
                }
            </div>
        </>
    )
}
