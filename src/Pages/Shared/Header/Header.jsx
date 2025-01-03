import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 z-50 w-full py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Brand start */}
          <div>
            <h2 className="font-bold text-4xl">
              <Link to="">QFAHIM</Link>
            </h2>
          </div>
          {/* Brand End */}

          {/* Desktop menu  start */}
          <div className="hidden md:block">
            <ul className=" flex gap-5 ">
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="experiences">EXPERIENCES</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="about">ABOUT</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="leadership">LEADERSHIP</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="projects">PROJECTS</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="certificates">CERTIFICATIONS</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:scale-125">
                <Link to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* Desktop menu  end */}

          {/* Mobile Mneu button start */}
          <div className="block md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="text-2xl text-orange-600" />
            </button>
          </div>
          {/* Mobile Mneu button end */}
        </div>

        {/* Mobile menu links start */}
        {isOpen && (
          <div className="w-full bg-black text-white block md:hidden">
            <ul className="my-5">
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="experiences">EXPERIENCES</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="about">ABOUT</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="leadership">LEADERSHIP</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="projects">PROJECTS</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="certificates">CERTIFICATIONS</Link>
              </li>
              <li className="font-bold text-lg hover:text-orange-600 hover:pl-3">
                <Link to="contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        )}
        {/* Mobile menu links end */}
      </div>
    </header>
  );
}
