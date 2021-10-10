import React from 'react';
import img from '../img/House 1.png'

const Header = () => {
    return (
        <div className="md:container md:mx-auto bg-blue-200 pt-5">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-16 text-xl">Lugar</span>
                </a>
                <nav className="md:ml-auto mr-20 flex flex-wrap items-center text-base justify-center">
                <a className="mr-20 hover:text-gray-900">Home</a>
                <a className="mr-20 hover:text-gray-900">About</a>
                <a className="mr-20 hover:text-gray-900">Project</a>
                <a className="mr-20 hover:text-gray-900">Contact</a>
                </nav>
            </div>
            </header>



        <div className="grid grid-cols-2 gap-4">
            <div>
                <h1 className="md:text-8xl text-left pl-20 mt-10">A Home is Built with Love and Dreams</h1>
                <p className="md:my-5 text-left ml-20 text-gray-500">Real estate farm that makes your dreams true</p>
                <button className="md: bg-black hover:bg-blue-700 text-white font-bold py-3 px-4 my-6 mx-4">Our projects</button>
                <button className="md: bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">Contact us</button>
            </div>
            
            <div className="bg-right-top">
                <img  src={img} alt="" />
            </div>
        </div>


        </div>
    );
};

export default Header;