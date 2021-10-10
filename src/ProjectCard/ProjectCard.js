import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



const ProjectCard = () => {

    const [projectItem, setProjectItem] = useState([]);

    useEffect(()=>{
        fetch('/lugar.json')
        .then(res => res.json())
        .then(data => setProjectItem(data))

    },[]);


    return (

        <div className="md:container md:mx-auto my-5 ">
            <h1 className="text-6xl text-left mt-20 mb-5 ml-10">Ongoing projects</h1>
            <p className='text-gray-400 text-1xl text-left ml-10 mb-12'>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                <div className="grid grid-cols-4 gap-2">
                {
                   projectItem.slice(0, 4).map((project) =>
                    <div className="max-w-sm rounded overflow-hidden shadow-2xl mx-auto w-60 ">
                        
                        
                    <img className="w-full p-2" src={project.img} alt="Sunset in the mountains"/>
                        <div className="px-3 py-2">
                            <div className="font-bold text-xl mb-1">{project.address}</div>
                            <FontAwesomeIcon icon={faMapMarkerAlt}  />
                            <p className="text-gray-700  text-base">{project.location}
                            </p>
                        </div>
                        </div>
                    )
                };
                
                </div>
            </div>
    );
};

export default ProjectCard;