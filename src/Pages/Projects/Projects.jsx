import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/portfolio/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="my-20">
      <div className="container">
        {/* Section Ttitle Start */}
        <div className="text-center ">
          <h2 className="text-4xl font-bold border-b-2 border-orange-600 inline-block px-20 pb-2">
            Projects
          </h2>
        </div>
        {/* Section Ttitle End */}

        <div className="flex justify-center flex-wrap gap-8 my-12">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border-t w-[300px] border border-orange-600 rounded-md overflow-hidden"
              data-aos="zoom-in"
            >
              <img src={project?.logo} alt="" />
              <div className="p-5">
                <p className="text-xl font-bold truncate">{project?.title}</p>
                <button className="py-2 px-8 border border-[#e33324] bg-[#e33324] hover:bg-transparent hover:text-gray-500 rounded-sm text-white">
                  <Link to={`/projectdetails/${project._id}`}>Details</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
