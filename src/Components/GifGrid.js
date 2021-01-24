import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

   
    const { data : images ,loading }= useFetchGif(category);
    
    return (
        <div className = "category-content">
            <p className = "category-title" > { category }</p> 
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
        </div>
    )
}
