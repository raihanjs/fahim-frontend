import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <section className="py-12 mt-12">
      <div className="container">
        {/* Section Ttitle Start */}
        <div className="text-center ">
          <h2 className="text-4xl font-bold border-b-2 border-orange-600 inline-block px-20 pb-2">
            Experiences
          </h2>
        </div>
        {/* Section Ttitle End */}

        {/* Experience Container Start */}
        <div className="my-10">
          <div className="flex flex-wrap justify-center md:justify-between gap-5">
            {experiences.map((experience, index) => (
              <div
                key={experience._id}
                className="w-80 border rounded-md p-2"
                data-aos="fade-left"
                ata-aos-delay={`${index * 100}`}
              >
                <Link to={`/experiencedetails/${experience._id}`}>
                  <img src={experience.companyLogo} alt="" />
                  <div className="border-t-2 py-2">
                    <h3 className="text-xl font-bold truncate">
                      {experience.company}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Experience Container End */}
      </div>
    </section>
  );
}
