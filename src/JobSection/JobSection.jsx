import React from 'react'
import './JobSection.css'
import { Link } from 'react-router-dom'

const JobSection = () => {
    return (
        <div className="text-center job_section">
            
            <h2 className="section_title pt-5 mt-5 mb-4 text-center">Want to be one of us!    </h2>
           
            <p className="text-muted w-75 m-auto  py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Labore nam, cupiditate voluptatibus excepturi enim illo placeat quae adipisci accusamus officia, soluta quis, magni iste dicta. 
            Neque illum nulla maiores dolor laborum consequatur incidunt a maxime, commodi accusamus, veritatis beatae cum.</p>
             
             <Link to="JobApplication">
                 <button  className="mb-5 mt-4 main_btn">Join us</button>
             </Link>
        </div>
    )
}

export default JobSection
