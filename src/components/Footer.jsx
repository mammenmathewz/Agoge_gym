import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Careers', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {['Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            About Company
            </h3>
            <p className="mt-4 text-base text-gray-300">
            Agoge is a structured rigorous physical strength training ,stealth training and social life skill training mandated for the SPARTANS in ancient greek. AGOGE meant "rearing" in greek and suits compleatly to our fitness center concept
            </p>
            <h4 className='text-white font-bold'>Opening Hours: 5:30 AM - 9:30 PM</h4>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 AGOGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;