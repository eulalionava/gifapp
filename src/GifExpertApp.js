import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{
    const [categories,setCategories] =  useState(['Hombre araña']);

    return(
        <>
            <h2>Gif expert app</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    ))
                }
            </ol>
        </>
    )
}