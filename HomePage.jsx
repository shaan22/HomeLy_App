import React, { useState } from 'react';
import img from '../../assets/aveda2.jpg';
import Home from '../../assets/Screenshot 2023-06-05 155151.png';
import commercial from '../../assets/Screenshot 2023-06-05 155317.png';
import img2 from '../../assets/band-education-1.jpg'
import img3 from '../../assets/rxte51mi-720.jpg'
import img4 from '../../assets/dlz42yu1-720.jpg'

import Residential from '../Registration/Residential'; 
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../Navbar/Navbar2';

import AboutUs from '../Content/AboutUs';
import HomeCarousel from './HomeCarousel';


function HomePage() {

   const {id} = useParams();

   console.log(id);
    return (
        <>
            <Navbar2 />
            <div className='m-6'>

            <HomeCarousel />
            </div>
           
            <div className="relative mt-6 ml-10 mr-10 bg-slate-900">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
                <img
                    className="w-full "
                    src={img}
                    alt="Background"
                />
                <div className="m-12 absolute top-44 ml-1.5 transform  -translate-y-1/2 text-center">
                    <div className=''>
                    <h1 className="text-4xl font-bold mb-4 text-zomato-600 left-0">Home Insurance Online starting ₹8000/year*</h1>
                    </div>
                    <p className="text-lg text-zomato-600">These days, its important to find a home insurance company that knows how to balance good old fashioned customer service with the most up-to-date online tools and resources. We understand that your home is your most valuable investment, and that’s why you should protect it with the best coverage available. Simply complete one form and then sit back while our licensed consultants shop around to find the lowest home insurance quotes available for your home..</p>
                </div>
            </div>


            <div className="m-14">
              <h1 className='text-zomato-400 text-4xl font-bold'>Select Property Insurance Services for...</h1>
                
            </div>
            <div className="flex justify-center mt-12">

                <div className="flex items-center justify-center w-1/3 transform ">

                   
                      <Link to="/form">
                        <img

                            className="w-54 h-54 object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer hover:shadow-2xl" 

                            src={Home}

                            alt="Image 1"

                        />
                       </Link>

                    

                </div>

                <div className="flex items-center justify-center w-1/3">

                <Link to="/form2">

                        <img

                            className="w-54 h-54 object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer hover:shadow-2xl"

                            src={commercial}

                            alt="Image 2" />

                        </Link>

                    

                </div>

               

            </div>

           



            <div className=" relative m-16">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
           
               
                <a href="https://youtu.be/vJ59uUHlimg">
                  
                <img  src={img2} alt=""  />
            </a>
                
           
            <div className='flex'>
                <div className="absolute mt-6  w-full top-0 left-10">
                <div class="m-6  ml-0 h-22 w-72 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
  <img  className='cursor-pointer' src={img4} alt="Sunset in the mountains" href="#"/>
  <div className="px-6 py-4">
    <div class="font-bold text-xl mb-2">Watch</div>
   
  </div>
  
</div>          


                </div>

                <div className="absolute mt-10 w-3/6 ml-96 text-zomato-600   top-0 left-10"  ><h1>Economic Center</h1>
First American provides economic insights and research about the real estate market and mortgage risk. Follow the economic blog for the latest information.</div>
                </div>

              
                
            </div>


           <div className='m-14'>
            
            <AboutUs />
           </div>
               

        </>
    )
}

export default HomePage