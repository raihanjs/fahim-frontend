import { useLoaderData } from "react-router-dom";

export default function LeadershipDetails() {
  const leadershipData = useLoaderData();
  return (
    <section className="py-12 mt-2">
      <div className="container">
        {/* Company Title Start */}
        <div className="my-8">
          <h2 className="text-4xl font-bold mb-2">{leadershipData?.name}</h2>
        </div>
        {/* Company Title End */}

        {/* Banner Start */}
        <div>
          <img src={leadershipData?.banner} data-aos="zoom-in" alt="" />
        </div>
        {/* Banner End */}

        {/* Gallery Start */}
        <div className="flex flex-wrap gap-5 my-8">
          {leadershipData?.gallery.map((gItem) => (
            <div className="min-w-[50px] max-w-[450px]">
              <img src={gItem} alt="" data-aos="zoom-in" />
            </div>
          ))}
        </div>
        {/* Gallery End */}

        {/* Links */}
        <div>
          <h4 className="border-b-2 border-gray-600 text-4xl font-bold">
            Links
          </h4>

          <ul className="flex flex-col">
            {leadershipData?.links.map((link) => (
              <a
                href={link?.link}
                target="_blank"
                className="text-2xl font-bold hover:text-orange-600 hover:pl-5"
              >
                {link?.title}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
