import React from 'react'
import img from '../assets/icon5.png'

export const Logo = () => {
    return (
        <header className="logo">
            <img src={img.toString()}  alt="" />
            <p>
                background eraser
            </p>
        </header>
    )
}
