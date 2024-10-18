import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-slate-950 text-white text-sm py-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <span className="mr-6">+91 860 673 4567</span>
          <span>info@agoge.co.in</span>
        </div>
        <div>
          <span>Opening Hours: 5:30 AM - 9:30 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
