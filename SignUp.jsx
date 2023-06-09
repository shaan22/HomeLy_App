import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { InsuranceService } from '../Service/InsuranceService';
import { useNavigate } from 'react-router-dom';

export default function SignUp({isOpen, setIsOpen}) {
  
  let Navigate = useNavigate();
  let[state,setState] =useState({
     contact:{
     
      email: '',
      password: '',
     }
  });
  let {contact} = state;
 const updateInput = (e) => {
  setState({...state,contact:{...state.contact,[e.target.name]:e.target.value}});

     }

     const onSubmit = (e) => {
      e.preventDefault();
      InsuranceService.SignUpEm(state.contact)
    .then(res => { alert("Contact added successfully");
    Navigate(`/customer/${3}`)
     })

    }

  function closeModal() {
    setIsOpen(false)
  }



return (
  <>
  
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal} style={{backgroundColor: "black"}}>
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
                  <button className='py-4 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray700 hover:bg-gray-100' >
                    Sign Up with Google <FcGoogle />
                  </button>

                  <form className='flex flex-col gap-2'>
                    
                    <div className='w-full flex flex-col gap-2'>
                      <label htmlFor="email">Email</label>
                      <input type="text" id='email' name='email' value={contact.email} onChange={updateInput} placeholder='user@email.com' className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                      <label htmlFor="password">Password</label>
                      <input type="password" id='password' name='password' value={contact.password} onChange={updateInput} placeholder='*******' className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400' />
                    </div>
                    <div className='w-full text-center bg-zomato-400 text-white py-2 rounded-lg' onClick={onSubmit}>
                      Sign Up
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