import React from 'react'
import preloader from '../assets/images/preloader.gif'

export default function Preloader() {
    return (
        <div className="loader">
            <img src={preloader} alt="bitcoin" />
        </div>

    )
}
