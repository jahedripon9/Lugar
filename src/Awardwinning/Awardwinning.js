import React from 'react';
import img from '../img/left bg.png'

const Awardwinning = () => {
    return (
        <div className="md:container md:mx-auto">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mt-12 pr-10">
                <div>
                    <img className="w-100 object-center ml-10 p-10" src={img} alt="" />
                </div>
                
                <div className="my-10 mx-5">
                    <h2 className="text-6xl text-left mt-20 mb-10">Award winning real estate company in Dubai</h2>
                    <p className='text-gray-400 text-1xl text-left'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    <div className="grid grid-cols-3 gap-4 py-10">
                    <div className=" ">
                        <h3 className=" text-1xl font-bold text-blue-300">Previous Projects</h3>
                        <h1 className=" text-4xl pl-5 text-left text-black">34+</h1>
                    </div>
                    
                    <div>
                        <h3 className=" text-1xl font-bold text-blue-300">Years Experience</h3>
                        <h1 className=" text-4xl pl-5 text-left text-black">20y</h1>
                    </div>

                    <div>
                        <h3 className=" text-1xl font-bold text-blue-300">Ongoing Projects</h3>
                        <h1 className=" text-4xl pl-5 text-left text-black">12</h1>
                    </div>
                </div>
                </div>
                
            </div> <hr />
        </div>
    );
};

export default Awardwinning;