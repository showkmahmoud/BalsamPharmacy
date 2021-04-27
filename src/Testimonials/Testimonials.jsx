import React from 'react'
import './Testimonials.css'

import { AiOutlineComment } from 'react-icons/ai';

const Testimonials = () => {
    return (
        <div className="text-center m-2 p-2">
                        <h2 className="section_title pt-4 mt-5 mb-3 text-center">Testimonials</h2>
            <AiOutlineComment  className="Testimonials-logo m-3" style={{color:'var(--main-color)'}} />
            <p className="text-muted mx-5 w-75 m-auto px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Labore nam, cupiditate voluptatibus excepturi enim illo placeat quae adipisci accusamus officia, soluta quis, magni iste dicta. 
            Neque illum nulla maiores dolor laborum consequatur incidunt a maxime, commodi accusamus, veritatis beatae cum.</p>
        </div>
    )
}

export default Testimonials
