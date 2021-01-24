import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

const GifExpertApp = () =>{

    const [categories,setCategory] = useState(['One Punch']);
/*
    const handleAdd= () =>{
        setCategory(['Hunter X Hunter',...categories]);
        setCategories( cats => [...cats,'HunterXHunters']);
    }
*/
    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory setCategories = {setCategory}/>

        <hr></hr>

        
        
        <ol>
            {
                categories.map( category => 
                    <GifGrid 
                        category = {category}
                        key = {category}                    
                    />
                )
            }
        </ol>
        </>
     
    );
}

GifExpertApp.propTypes = {
    value : PropTypes.number
};

export default GifExpertApp;
//GifExpertApp

