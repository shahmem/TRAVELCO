import React from 'react'

function Footer() {
  return (
    <footer className=" bg-gray-950 text-white py-6 md:pt-20  px-3 md:px-0">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className='col-span-2'>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-sm md:text-base">
          We are committed to delivering the best products and services to our customers. PureSpaces draws on a keen sense of creative expression to bring to life beautifully balanced spaces and above all, pure design that aims to elevate the experience of a space.Your satisfaction is our priority.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="text-sm md:text-base space-y-2">
          <li>contact@purespaces.in</li>
          <li>Phone: +91 98862 12000</li>
          <li>#477, 11th Cross, Sadashivnagar, Bangalore 560080</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer