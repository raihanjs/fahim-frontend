import { useEffect, useState } from "react";

export default function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="py-5  md:py-5 lg:py-12">
      <div className="container">
        {/* Section Titile Start */}
        <div className="" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-5">Relevant Software Skills</h3>
        </div>
        {/* Section Titile End */}

        {/* Skills Container Start */}
        <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-12">
          {skills.map((skill) => (
            <div key={skill._id}>
              {/* Skill Item Content */}
              <div
                className="flex justify-between items-center"
                data-aos="fade-left"
              >
                <p>
                  <strong>{skill.skillName}</strong>
                </p>
                <p className="py-2 px-8 rounded-full border text-orange-600 border-orange-600 font-bold">
                  {skill.percentage}
                </p>
              </div>
              {/* Skill Item Progressbar */}
              <div className="w-full bg-slate-200 h-1.5 mt-3 rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 h-1.5 bg-orange-600"
                  style={{ width: skill.percentage + "%" }}
                  data-aos="fade-right"
                  data-aos-delay="600"
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Skills Container End */}
      </div>
    </section>
  );
}
