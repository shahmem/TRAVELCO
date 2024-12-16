
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'



function Header() {
    const[isOpen,setIsOpen] = useState(false);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return (
        <>
            <nav className='absolute w-full '>
                <div className='px-4 md:px-16 items-center py-4 flex'>
                    <div className='flex-1'>
                        <img src={logo} className='h-12' alt="" />
                    </div>
                    <div className='capitalize font-semibold text-lg  space-x-5 md:flex hidden'>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' aria-current='true' to='/'>Home</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/about'>About</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/services'>Services</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/packages'>Packages</Link>
                        <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex items-center gap-1.5 px-3 text-[#ffffffaa] hover:text-[#86b817]  bg-transparent">
                                            Pages
                                            <FontAwesomeIcon aria-hidden="true" icon={faCaretDown} />
                                        </MenuButton>
                                    </div>
                        
                                    <MenuItems transition className="absolute right-0 z-10 mt-2 px-2 origin-top-right rounded-md bg-[#0000003e]  shadow transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                        <div className="py-3 pr-4 flex flex-col gap-3 w-max">
                                            <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/destination'>Destination</Link>
                                            <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/booking'>Booking</Link>
                                            <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/travelguide'>Travel Guide</Link>
                                        </div>
                                    </MenuItems>
                                </Menu>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' to='/contact'> Contact</Link>
                    </div>
                    <a href="#" className='mx-9  bg-[#a6e925] text-white rounded-3xl px-5 text-sm py-2 font-semibold hidden md:block hover:bg-[#a6d925] '>Register</a>
                    <button className='md:hidden' onClick={togglerBtn}>
                     {isOpen ? '' : <FontAwesomeIcon icon={faBars} style={{color: "#86b817",}} />}
                    </button>
                </div>
                <div ref={menuRef} className={`md:hidden fixed z-50 right-0 top-0 h-screen w-48 bg-[#191919] text-white  transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col space-y-4 uppercase font-semibold text-sm  mx-8 mt-28 ">
                    <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' aria-current='true' onClick={() => setIsOpen(false)} to='/'>Home</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/about'>About</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/services'>Services</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/packages'>Packages</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/destination'>Destination</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/booking'>Booking</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/travelguide'>Travel Guide</Link>
                        <Link className='px-3 text-[#ffffffaa] hover:text-[#86b817]  focus:text-[#86b817]' onClick={() => setIsOpen(false)} to='/contact'> Contact Us</Link>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Header