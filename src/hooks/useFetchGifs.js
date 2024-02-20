import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (  category ) => {
 
    const [images, setimages] = useState([]);
    const [isLoading, setIsLosading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setimages(newImages);
        setIsLosading( false );
    }

    useEffect( () => {
        getImages();
    }, [] )


    return {
        images,
        isLoading
    }
}
