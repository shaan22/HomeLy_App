import React, { useState, useEffect } from 'react';


import { InsuranceService } from '../Service/InsuranceService';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';




const AllAgents = () => {

    const [agents, setAgents] = useState([]);



    const fetchAgents = async () => {

        try {

            const response = await InsuranceService.GetAgents();

            const data = await response.data;

            setAgents(data);




        } catch (error) {

            console.error('Error fetching agents:', error);

        }

    };

    useEffect(() => {

        fetchAgents();

    }, []);






    return (

        <>
            <Navbar2 />
            <div className="container mx-auto m-14">

                <h1 className="text-2xl font-bold mb-4">Agent Details</h1>

                <table className="min-w-full bg-white border border-gray-300 text-left">

                    <thead>

                        <tr>

                            <th className="py-2 px-4 border-b ">Name</th>

                            <th className="py-2 px-4 border-b">Email</th>

                            <th className="py-2 px-4 border-b">Phone</th>

                            <th className="py-2 px-4 border-b">WorkLocation</th>

                            <th className="py-2 px-4 border-b text-blue-900">Link</th>






                        </tr>

                    </thead>

                    <tbody>

                        {agents.map((agent) => (

                            <tr key={agent.Id}>

                                <td className="py-2 px-4 border-b">{agent.name}</td>

                                <td className="py-2 px-4 border-b">{agent.email}</td>

                                <td className="py-2 px-4 border-b">{agent.phone}</td>

                                <td className="py-2 px-4 border-b">{agent.workLocation}</td>
                                <Link to={`/agent/${agent.id}`}>
                                    <td className="py-2 px-4 border-b">{agent.id}</td>
                                </Link>




                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

};




export default AllAgents;