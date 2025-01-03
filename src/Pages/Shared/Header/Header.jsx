import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/titles")
      .then((res) => res.json())
      .then((data) => setTitles(data));
  }, []);

  return (
    <header className="bg-black text-white fixed top-0 left-0 z-50 w-full py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Brand start */}
          <div className="w-2/12">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {titles.map((title) => (
                <>
                  <SwiperSlide>
                    <h2 className="font-bold text-4xl">
                      <Link to="" className="cursor-pointer">
                        {title.title}
                      </Link>
                    </h2>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
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
