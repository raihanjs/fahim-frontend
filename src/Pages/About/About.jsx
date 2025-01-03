import { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

export default function About() {
  const [aboutDetails, setAboutDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/portfolio/api/about")
      .then((res) => res.json())
      .then((data) => setAboutDetails(data));
  }, []);

  return (
    <section className="my-20" style={{ marginBottom: "150px" }}>
      <div className="container">
        <div className="w-full flex justify-center mb-5">
          <h2
            data-aos="zoom-in"
            className="text-center text-4xl font-bold border-b-2 border-orange-600 inline-block"
          >
            {aboutDetails[0]?.title}
          </h2>
        </div>

        {aboutDetails[0]?.aboutContents.map((content, i) => (
          <p
            key={i}
            data-aos="fade-up"
            data-aos-delay={`${i * 100}`}
            className="text-2xl text-justify pb-3"
          >
            {content}
          </p>
        ))}

        <div className="py-5 text-2xl">
          <p>{aboutDetails[0]?.signatureTitle}</p>
          <p>{aboutDetails[0]?.myName}</p>
        </div>

        <p className="text-2xl font-bold ">Thank You</p>
        <div className="flex gap-2" data-aos="zoom-in">
          <a href={`${aboutDetails[0]?.linkedinLink}`} target="_blank">
            <FaLinkedin className="text-6xl text-slate-600" />
          </a>
          <a href={`${aboutDetails[0]?.fbLink}`} target="_blank">
            <FaFacebookSquare className="text-6xl text-blue-600" />
          </a>
          <a href={`${aboutDetails[0]?.whatsappLink}`} target="_blank">
            <FaWhatsappSquare className="text-6xl text-green-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
