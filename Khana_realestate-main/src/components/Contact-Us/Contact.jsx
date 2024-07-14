import React, { useState } from "react";
import a from "./contact.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import axios from "axios"
import Logo from "../lg2.png"
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    msg:'',
    location:'',
    number:'',
    sub:''
  })
  const handleInputChange=(e)=>{
const {name,value}=e.target;
setFormData({...formData,[name]:value})
console.log(formData)

  }
  const submitHandler=async()=>{
  try {
      // Make POST request
      const response = await axios.post('http://localhost:5000/send', formData);
      console.log('Response:', response.data);

      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        msg: '',
        location: '',
        number: '',
        sub: ''
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  return (
    <div>
      <div>
        <Link to="/">
          <div className="w-fit z-50 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <img src={Logo} alt="" className="w-24   z-50  " />
          </div>
        </Link>
      </div>
      <div className="sticky top-0   w-full h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24 flex flex-col items-center justify-center md:h-screen">
        <img className="object-cover w-full h-full" src={a} alt="Full screen" />
        <div className="-mt-12  sm:-mt-16 md:absolute  md:bottom-0 md:left-0 md:right-0 bg-black bg-opacity-50 text-white text-center p-4">
          <p className=" md:text-3xl sm:text-xl  text-[8px] md:px-20 md:pb-6">
            CONTACT US
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {/* CONTACT US ON */}
        <div className="my-6 flex justify-center p-4">
          <p className="md:text-3xl sm:text-2xl text-xl font-mono border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent">
            CONTACT US ON: 9003103849
          </p>
        </div>
        {/* "WHAT CAN WE HELP YOU WITH" TEXT */}
        <div className="flex justify-center  ">
          <p className="text-lg border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent ">
            WHAT CAN WE HELP YOU WITH ?
          </p>
        </div>
        {/* Select Button */}
        <div className="flex justify-center  ">
          <select
            onChange={handleInputChange}
            name="sub"
            className=" block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          >
            <option>Select Option</option>
            <option>Buying Property</option>
            <option>Investor Enquiries</option>
            <option>Land Proposal</option>
            <option>Other Reason</option>
          </select>
        </div>
        {/* Name Input */}
        <div className="flex justify-center p-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleInputChange}
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Email Input */}
        <div className="flex justify-center p-4">
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            value={formData.email}
            placeholder="Email"
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-whitebg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Location Input */}
        <div className="flex justify-center p-4">
          <input
            type="text"
            onChange={handleInputChange}
            name="location"
            value={formData.location}
            placeholder="Location"
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-whitebg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Contact Number Input */}
        <div className="flex justify-center p-4">
          <input
            type="tel"
            value={formData.number}
            onChange={handleInputChange}
            name="number"
            placeholder="Contact Number"
            className="block w-full sm:w-1/2 focus:border-b-slate-950 focus:scale-105 duration-1000 bg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Message Textarea */}
        <div className="flex justify-center p-4">
          <textarea
            onChange={handleInputChange}
            name="msg"
            value={formData.msg}
            placeholder="Message"
            className="block w-full sm:w-1/2 bg-white  border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none focus:border-b-slate-950 focus:scale-105 duration-1000"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center p-4">
          <button
            onClick={submitHandler}
            className=" sm:w-52 bg-black hover:bg-stone-800 hover:scale-110 duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
