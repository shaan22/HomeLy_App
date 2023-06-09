import React, { useState } from 'react';
import { InsuranceService } from '../Service/InsuranceService';
import { useNavigate } from 'react-router-dom';
import SPage from '../SMS/SPage';
import axios from 'axios';
import Navbar2 from '../Navbar/Navbar2';

const Commercial = () => {
    let Navigate = useNavigate();
    let [state, setState] = useState({
        customer: {
            name: '',
            email: '',
            phone: '',
            salary: '',
            yearOfTenure: '',
            costOfProperty: '',
            city: '',
            password: '',

        }
    });


    let { customer } = state;

    const updateInput = (e) => {
        setState({ ...state, customer: { ...state.customer, [e.target.name]: e.target.value } });

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        InsuranceService.AddCustomer(state.customer)
            .then(res => {
                alert("Details added successfully");
            })
        await axios.post("http://localhost:5000/sendsms", { type: "Commercial", name: customer.name });
        Navigate('/home');
    }

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [salary, setSalary] = useState('');
    const [yearOfTenure, setYearOfTenure] = useState('');
    const [costOfProperty, setCostOfProperty] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [salaryError, setSalaryError] = useState('');
    const [cityError, setCityError] = useState('');
    const [yearError, setYearError] = useState('');



    const handleSubmit = async (e) => {

        e.preventDefault();

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const phoneRegex = /^\d{10}$/;
        const salaryRegex = /^\d+$/;
        const cityRegex = /^[a-zA-Z\s]*$/;

        if (name.length < 3) {
            setNameError('Name must be at least 3 characters long');
        }
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        }
        if (!phoneRegex.test(phone)) {
            setPhoneError('Invalid phone number');
        }
        if (!salaryRegex.test(salary)) {
            setSalaryError('Invalid salary amount');
        }

        if (!cityRegex.test(city)) {
            setCityError('Invalid city name');
        }

        if (yearOfTenure > 5) {
            setYearError('Tenure Range is within 1-5');
        }


    };




    return (

        <>
            <Navbar2 />
            <div className="bg-gray-100 min-h-screen">

                <header className="bg-gray-800">

                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Header content */}

                    </nav>

                </header>

                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">

                        <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-300 rounded-md shadow">

                            <h1 className="text-3xl font-bold mb-4">Commercial Property Form</h1>

                            <form onSubmit={onSubmit}>

                                <div className="mb-4">

                                    <label htmlFor='name' className='block text-gray-700 text-xl font-bold mb-2'>Name</label>
                                    <input type="text" id="name" name="name" value={customer.name} placeholder='Enter Name' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{nameError}</h5>

                                </div>

                                <div className="mb-4">
                                    <label htmlFor='email' className='block text-gray-700 text-xl font-bold mb-2'>Email Address</label>
                                    <input type="text" id="email" name="email" value={customer.email} placeholder='Enter Email Address' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{emailError}</h5>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor='phone' className='block text-gray-700 text-xl font-bold mb-2'>Contact No.</label>
                                    <input type="text" id="phone" name="phone" value={customer.phone} placeholder='Enter Contact Number' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{phoneError}</h5>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor='salary' className='block text-gray-700 text-xl font-bold mb-2'>Annual Salary</label>
                                    <input type="text" id="salary" name="salary" value={customer.salary} placeholder='Enter Annual Income' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{salaryError}</h5>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='yearOfTenure' className='block text-gray-700  text-xl font-bold mb-2'>Tenure in years:</label>
                                    <input type="number" id="yearOfTenure" name="yearOfTenure" placeholder='Enter the period' value={customer.yearOfTenure} onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{yearError}</h5>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='costOfProperty' className='block text-gray-700  text-xl font-bold mb-2'>Estimated Cost Of Property:</label>
                                    <input type="text" id="costOfProperty" name="costOfProperty" placeholder='Enter Estimated cost of Property' value={customer.costOfProperty} onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    {/* validation error message*/}
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='cityError' className='block text-gray-700 text-xl font-bold mb-2'>City:</label>
                                    <input type="text" id="city" name="city" value={customer.city} placeholder='Enter City' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{cityError}</h5>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='cityError' className='block text-gray-700 text-xl font-bold mb-2'>Password:</label>
                                    <input type="password" id="password" name="password" value={customer.password} placeholder='Password' onChange={updateInput} className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                                    <h5 className="text-red-500">{password}</h5>
                                </div>

                                <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">
                                    <i className="fa fa-phone"></i>Submit</button>

                            </form>

                        </div>

                    </div>

                </main>

            </div>



        </>
    );

};

export default Commercial;