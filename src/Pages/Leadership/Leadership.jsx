import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Leadership() {
  const [leaderships, setLeaderships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/portfolio/api/leaderships")
      .then((res) => res.json())
      .then((data) => setLeaderships(data));
  }, []);
  return (
    <section className="py-12 mt-12">
      <div className="container">
        {/* Section Ttitle Start */}
        <div className="text-center ">
          <h2 className="text-4xl font-bold border-b-2 border-orange-600 inline-block px-20 pb-2">
            Leaderships
          </h2>
        </div>
        {/* Section Ttitle End */}

        {/* Experience Container Start */}
        <div className="my-10">
          <div className="flex flex-wrap justify-center md:justify-between gap-5">
            {leaderships.map((leadership, index) => (
              <div
                key={leadership._id}
                className="w-80 border rounded-md p-2"
                data-aos="fade-left"
                ata-aos-delay={`${index * 100}`}
              >
                <Link to={`/leadershipdetails/${leadership._id}`}>
                  <img src={leadership.logo} alt="" />
                  <div className="border-t-2 py-2">
                    <h3 className="text-xl font-bold truncate">
                      {leadership.name}
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
