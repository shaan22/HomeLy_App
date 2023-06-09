import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-black mb-4">Company</h2>
            <ul className="text-Black-400">
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-Balck mb-4">Insurance</h2>
            <ul className="text-Black-400">
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Auto</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Life</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-Black mb-4">Legal</h2>
            <ul className="text-Black-400">
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-Black-300">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-Black-400">© 2023 Insurance Company. All rights reserved.</p>
          <p className="text-Black-400">@Homely Company makes no express or implied warranty respecting the information presented and assumes no responsibility for errors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
