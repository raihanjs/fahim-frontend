import { useEffect, useState } from "react";

export default function Hero() {
  const [homeAbout, setHomeABout] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/homeabout")
      .then((res) => res.json())
      .then((data) => setHomeABout(data));
  }, []);

  return (
    <section className="py-20 sm:py-0 bg-[#000] relative h-[44vh] md:h-[40vh] lg:h-[60vh] xl:h-[95vh] overflow-hidden">
      {/* Text Area Start */}
      <div className="absolute top-14 md:top-16 lg:top-32 xl:top-60 left-2 lg:left-28 xl:left-44 z-40 w-[98%] lg:w-[80%]">
        <h1
          data-aos="fade-up"
          className="text-xl md:text-2xl lg:text-4xl font-bold text-orange-600 mb-1 lg:mb-5"
        >
          {homeAbout[0]?.mainTitle}
        </h1>

        {homeAbout[0]?.texts.map((text, i) => (
          <p
            className="text-white text-justify text-sm md:text-lg lg:text-xl xl:text-2xl mb-0.5 lg:mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
            key={i}
          >
            {text}
          </p>
        ))}
      </div>
      {/* Text Area End */}

      {/* Video Area Start */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-[100%]">
        <source
          src="https://firebasestorage.googleapis.com/v0/b/qfahim-client-391d0.appspot.com/o/Final%20Render(1).mp4?alt=media&token=2d9281ce-b4b5-48c6-9ad2-f876c10bf888"
          type="video/mp4"
        />
      </video>
      {/* Video Area End */}
    </section>
  );
}
