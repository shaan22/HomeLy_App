import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { InsuranceService } from '../Service/InsuranceService';
import { Link, useNavigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';

export default function SignIn({ isOpen, setIsOpen }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let [state, setState] = useState({
    customer: {

      email: '',
      password: '',

    }
  });


  let { customer } = state;




  const updateInput = (e) => {

    setEmail(e.target.value);
    setPassword(e.target.value);
    setState({ ...state, customer: { ...state.customer, [e.target.name]: e.target.value } });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      let response = await InsuranceService.checkemailandpassword
        (state.customer);
      console.log(response.data);
      setState({ customer: response.data })

      console.log(customer.email);
      console.log(customer.password);
      console.log(email);
      console.log(password);



      if (customer.password === password) {
        alert("sucessfully signed in")
        navigate(`/customer/${customer.id}`)

      } else {

        console.log('Incorrect credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const googleSignIn = () => (
    window.Location.href = "http://localhost:4000/auth/google"
  );

  function closeModal() {
    setIsOpen(false)
  }


  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal} style={{ backgroundColor: "rgba(0,0,0,0.53)" }} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className='mt-2 flex flex-col gap-3 w-full'>
                    <button className='py-4 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray700 hover:bg-gray-100' onClick={googleSignIn}>
                      Sign In with Google <FcGoogle />
                    </button>

                    <form className='flex flex-col gap-2'>

                      <div className='w-full flex flex-col gap-2 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' value={customer.email} onChange={updateInput} placeholder='user@email.com' className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400' />
                      </div>
                      <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' value={customer.password} onChange={updateInput} placeholder='*******' className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400' />
                      </div>
                      {/* <Link to={`/home/${3}`}>   */}
                      <div className='w-full text-center bg-zomato-400 text-white py-2 rounded-lg' onClick={handleSubmit} >
                        Sign In
                      </div>
                      {/* </Link>   */}
                      <div className='w-full text-center  py-2 rounded-lg' onClick={closeModal}>
                        Close
                      </div>
                    </form>
                  </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
