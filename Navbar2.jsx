import logo from "../../assets/logo.png"
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import Modal from "../Modal";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Agent from "../Agent/Agent";
import { Link, useParams } from "react-router-dom";
import CustomerPage from "../Customer/CustomerPage";



function LargeNav({ SignIn, SignUp }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({
    fullName: "Lekh",
  });

  const [fullName, setFullName] = useState();


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className="hidden lg:inline container ml-20">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-20">
            <Link to="/home">
              <img
                src={logo}
                alt=""
              />
            </Link>

          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Bangalore"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search "
                className="w-full focus:outline-none"
              />
            </div>
            {/* <Link to={`/agent/${3}`}>
              <button onClick={<Agent  id={3}/>} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GetAgent</button>
              </Link> */}


            <button onClick={handleOpenModal} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculator</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

          </div>

          <div className="relative w-20">
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full"
            >
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
              <h6 className="text-center">{user.fullName}</h6>
            </div>
            {isDropDownOpen && (

              <div className="absolute  shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <Link to={`/customer/${3}`}>
                  <button>Profile</button>
                </Link>
                <Link to={`/agents`}>
                  <button>All Agents</button>
                </Link>
                <Link to={`/`}>
                  <button>SignOut</button>
                </Link>
              </div>


            )}
          </div>

        </div>
      </div>


    </>
  );
}

function Navbar2() {

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignUpModal = () => setOpenSignUp(true);
  const openSignInModal = () => setOpenSignIn(true);

  return (
    <>
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />

      <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>

        <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
      </nav>
    </>
  )
}

export default Navbar2