import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';
import { Welcome } from './Components/Welcome';

const GifExpertApp = () =>{

    const [categories,setCategory] = useState(['ABURRIDO']);
/*
    const handleAdd= () =>{
        setCategory(['Hunter X Hunter',...categories]);
        setCategories( cats => [...cats,'HunterXHunters']);
    }
*/
    return (
        <>
        <Welcome/>

        <AddCategory setCategories = {setCategory}/>
        
        {
                categories.map( category => 
                    <GifGrid 
                        category = {category}
                        key = {category}                    
                    />
                )
            }
        </>
     
    );
}

GifExpertApp.propTypes = {
    value : PropTypes.number
};

export default GifExpertApp;
//GifExpertApp

