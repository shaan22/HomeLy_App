import React, { useState } from 'react';
import { Dialog,Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [cost, setCost] = useState('');
    const [income, setIncome] = useState('');
    const [tenure, setTenure] = useState('');
    const [result, setResult] = useState('');
    const [prem,setPrem] = useState(''); 
    const interestRate = 0.125;
    const ratioRate = 20;
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform calculations here
      const premiumAmt = (parseFloat(cost) * interestRate);
      setPrem(premiumAmt);
      const totalAmt = (premiumAmt / (parseFloat(tenure) * 12));
      console.log(totalAmt);
      const finalRatio = parseInt(totalAmt /( parseFloat(income)/12)*100);
      console.log(finalRatio);
      if(finalRatio > ratioRate){
        setResult('Sorry!! Your entered details does not match the eligibility criteria');
      }else{
        setResult('Congrats!! You are eligible for the policy');
      }
     
    };
  
    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose} style={{backgroundColor: "black"}}>
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
     
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Calculate Result</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="cost" className="block font-bold mb-2">Cost of property:</label>
              <input type="number" id="cost" className="w-full border border-gray-300 rounded px-4 py-2" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="income" className="block font-bold mb-2">Annual Income:</label>
              <input type="number" id="income" className="w-full border border-gray-300 rounded px-4 py-2" value={income} onChange={(e) => setIncome(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="tenure" className="block font-bold mb-2">Tenure of Repayment:</label>
              <input type="number" id="tenure" className="w-full border border-gray-300 rounded px-4 py-2" value={tenure} onChange={(e) => setTenure(e.target.value)} />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Calculate</button>
          </form>
          
          {prem && <p className="mt-4 text-green-600">Premium Amount: {prem}</p>}
          <p className='text-orange-600'>{result}</p>
          <button onClick={onClose} className="mt-4 text-red-700">Close</button>
        
        
      </div>
      </Transition.Child>
      </div>
      </div>
      </Dialog>
      </Transition>
      </>
    );
  };
  
  export default Modal;