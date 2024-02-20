import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

  const [categories, setCategories] = useState(['one punch']);

   const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

  return (
   <>

    {/* TITULO */}
   <h1>GifApp</h1>

   {/* INPUT */}
   <AddCategory 
  //  setCategories={ setCategories } 
   onNewCategory={ (value) => onAddCategory(value) }

   />

    {
      categories.map( (category) => ( //Estamos como haciendo un return
        <GifGrid 
          key={ category }
          category={ category }
        />
      ))
    }

   </>
  )
}
