

import { useEffect, useState } from 'react';
import { InsuranceService } from '../Service/InsuranceService';
import { useParams } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';





const CustomerPage = () => {
  let { customerId } = useParams();

  let [state, setState] = useState({ selected: {} })
  useEffect(() => {
    async function getRec() {
      console.log(customerId);
      let response = await InsuranceService.getCustomer
        (customerId)
      console.log(response.data);
      setState({ selected: response.data })
    }
    getRec();
  }, [customerId])

  let { selected } = state;





  return (
    <>
      <Navbar2 />
      <div className="bg-gray-100 min-h-screen" >

        <header className="bg-gray-800">

          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header content */}

          </nav>

        </header>




        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

          <div className="px-4 py-6 sm:px-0">

            <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-300 rounded-md shadow">

              <h1 className="text-2xl font-semibold mb-4" >
                <b>Cutomer Details</b></h1>

              <form >


                <div className="mb-4">

                  <label htmlFor="cstId" className="block text-gray-700 text-sm font-medium mb-2">CustomerId</label>

                  <input

                    type="text"


                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"



                    value={selected.id}


                    required

                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="cstName" className="block text-gray-700 text-sm font-medium mb-2">Name</label>

                  <input

                    type="text"



                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"



                    value={selected.name}


                    required

                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="agentEmail" className="block text-gray-700 text-sm font-medium mb-2">Email</label>

                  <input

                    type="email"

                    id="cstEmail"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.email}



                    required

                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="cstPhone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>

                  <input

                    type="tel"

                    id="cstPhone"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.phone}



                    required

                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="cstSalary" className="block text-gray-700 text-sm font-medium mb-2">Salary</label>

                  <input

                    type="number"

                    id="cstSalary"

                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.salary}



                    required

                  />

                </div>

                <div className="mb-4">

                  <label className="block text-gray-700 text-sm font-medium mb-2">YearOfTenure</label>

                  <input

                    type="text"



                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.yearOfTenure}



                    required

                  />

                </div>

                <div className="mb-4">

                  <label className="block text-gray-700 text-sm font-medium mb-2">CostOfProperty</label>

                  <input

                    type="text"



                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.costOfProperty}



                    required

                  />

                </div>

                <div className="mb-4">

                  <label htmlFor="cstCity" className="block text-gray-700 text-sm font-medium mb-2">Location</label>

                  <input

                    type="text"



                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"

                    value={selected.city}



                    required

                  />

                </div>
                <Link to={`/agent/${3}`}>
                  <button

                    type="submit"

                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"

                  >

                    Agent

                  </button>
                </Link>
              </form>

            </div>

          </div>

        </main>

      </div>
    </>
  );

};




export default CustomerPage;