import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InsuranceService } from '../Service/InsuranceService';
import Navbar2 from '../Navbar/Navbar2';

const Agent = () => {
  let { agentId } = useParams();

  let [state, setState] = useState({ selected: {} })
  useEffect(() => {
    async function getRec() {
      console.log(agentId);
      let response = await InsuranceService.getAgent
        (agentId)
      console.log(response.data);
      setState({ selected: response.data })
    }
    getRec();
  }, [agentId])

  let { selected } = state;

  const [agentName, setAgentName] = useState('');
  const [agentEmail, setAgentEmail] = useState('');
  const [agentPhone, setAgentPhone] = useState('');
  const [agentWorkLocation, setAgentWorkLocation] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Agent Name: ${agentName}`);
    console.log(`Agent Email: ${agentEmail}`);
    console.log(`Agent Phone: ${agentPhone}`);
    console.log(`Agent Phone: ${agentWorkLocation}`);

  };

  return (
    <>
      <Navbar2 />
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          </nav>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-300 rounded-md shadow">
              <h1 className="text-2xl font-bold mb-4">Agent Details</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="agentName" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder=""
                    value={selected.name}
                  //   onChange={(e) => setAgentName(e.target.value)}

                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="agentEmail" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder=""
                    value={selected.email}


                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="agentPhone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder=""
                    value={selected.phone}
                  //   onChange={(e) => setAgentPhone(e.target.value)}

                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="block text-gray-700 text-sm font-medium mb-2">Work Location</label>
                  <input
                    type="text"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder=""
                    value={selected.workLocation}


                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Agent;
