
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories })=>{

    const [inputValue, setInputValue ] = useState('');
    
    const cambios = ( e ) => {
        setInputValue(e.target.value);
    }

    const submitChange = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={ submitChange }>
            <input
                type="text"
                value={ inputValue }
                onChange={ cambios } />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}