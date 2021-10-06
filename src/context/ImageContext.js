import React, {createContext, useState} from 'react';

export const ImageContext = createContext();


export const ImageProvider = ({children}) => {

    const [dataImg, setDataImage] = useState({
        localImage: null,
        localUrl: null,
        imgFetched: null,
        urlImgFetched: null,
        error: null,
    })
    return (
        <ImageContext.Provider value={{
            dataImg, setDataImage
        }}>
            {children}
        </ImageContext.Provider>
    )
}
