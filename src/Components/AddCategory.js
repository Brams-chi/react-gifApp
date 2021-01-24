import  React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories} ) =>{

    const [inputValue, setInput] = useState('');

    const handleEvent = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setInput('');
        }
        
    }
    return (
        <>
            <h3> Add Category</h3>

            <form onSubmit = { handleSubmit}>
                <input 
                        type = "text"
                        value = { inputValue}
                        onChange={handleEvent}
                />
            </form>


        </>
    )
    
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};