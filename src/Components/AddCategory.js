import  React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories} ) =>{

    const [inputValue, setInput] = useState('');

    const handleEvent = (e) =>{
        setInput(e.target.value.toUpperCase());
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setInput('');
        }
        
    }
    return (
        <div className="add_category_content">
            <p className = "category_message"> Agrega una categoría:</p>

            <form onSubmit = { handleSubmit}>
                <input 
                    className="input_class"
                    type = "text"
                    value = { inputValue}
                    onChange={handleEvent}
                />
            </form>


        </div>
    )
    
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};