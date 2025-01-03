import { useEffect, useState } from "react";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/experiences")
      .then((res) => res.json())
      .then((data) =>
        setExperiences(
          data.filter((slData) => slData.showInExperiencePage === true)
        )
      );
  }, []);
  return (
    <section className="py-12">
      <div className="container">
        <div className="" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-5">Experiences</h3>

          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="pl-8 pb-5 border-l-4 border-orange-600 relative"
              data-aos="fade-left"
            >
              <div className="absolute top-0 -left-2.5 h-4 w-4 rounded-full bg-orange-600"></div>
              <h4 className="text-xl font-bold text-slate-600">
                {experience.designation} | {experience.duration}
              </h4>
              <h5 className="text-2xl">
                <strong>
                  {experience.company} | {experience.location}
                </strong>
              </h5>
              <ul>
                {experience.responsibilities.map((response, index) => (
                  <li
                    className="ml-5 my-1.5 text-lg"
                    style={{ listStyleType: "square" }}
                    key={index}
                  >
                    {response}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
