import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="w-11/12 z-10 bg-white fixed min-w-[200px] transition duration-10 rounded-xl flex-cols  sm:hidden justify-between items-center p-10 top-0">
        <div className="flex space justify-between">
          <img src="../../public/logo.svg" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen === false ? (
              <img className="w-10 h-10" src="../../public/hamburger.svg" />
            ) : (
              <span className="text-5xl ">X</span>
            )}
          </button>
        </div>
        {isOpen && (
          <ul className="flex-cols my-10 justify-evenly text-2xl gap-10 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animefacts">AnimeFacts</Link>
            </li>
          </ul>
        )}
      </nav>
      {/* Desktop Navbar */}
      <nav className="w-11/12  bg-white   rounded-xl fixed sm:flex hidden justify-between items-center p-10 top-0">
        <img src="../../public/logo.svg" />
        <ul className="flex justify-evenly text-2xl gap-10 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/animefacts">AnimeFacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
