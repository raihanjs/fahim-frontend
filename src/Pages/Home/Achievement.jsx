import { useEffect, useState } from "react";

export default function Achievemnet() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/achievments")
      .then((res) => res.json())
      .then((data) => setAchievements(data));
  }, []);
  return (
    <section className="py-12" data-aos="fade-up">
      <div className="container">
        <div data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-5">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((achievement) => (
              <div key={achievement._id}>
                <div className="h-80 overflow-hidden">
                  <img src={achievement.image} className="" alt="" />
                </div>
                <h5 className="text-xl font-bold mt-2">{achievement.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
