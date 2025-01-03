import { Link, useLoaderData } from "react-router-dom";

export default function ExperienceDetails() {
  const experienceDetails = useLoaderData();

  return (
    <section className="py-12 mt-2">
      {/* Company Logo & Banner Start */}
      <div>
        <img src={experienceDetails?.companyBanner} className="w-full" alt="" />
      </div>
      {/* Company Logo & Banner End */}

      <div className="container">
        {/* Company Title Start */}
        <div className="my-8">
          <h2 className="text-4xl font-bold mb-2">
            {experienceDetails?.company}
          </h2>
          <h3
            className="text-2xl text-slate-600 font-bold mb-2"
            data-aos="fade-down"
          >
            {experienceDetails.designation} | {experienceDetails.duration}
          </h3>
          <p className="text-xl font-bold" data-aos="fade-down">
            <span className="underline text-blue-800">
              <Link to={experienceDetails?.companyWebLink}>
                {experienceDetails?.company}
              </Link>
            </span>
            <span> | </span>
            <span>{experienceDetails?.location}</span>
          </p>
        </div>
        {/* Company Title End */}

        {/* Company Details Start */}
        <div className="my-5 text-2xl">
          <p className="text-justify">{experienceDetails?.paragraphOne}</p>

          {experienceDetails?.paraLists.length > 0 && (
            <ul
              style={{ listStyleType: "square" }}
              className="my-3"
              data-aos="fade-up"
            >
              {experienceDetails?.paraLists.map((list, i) => (
                <li key={i} className="ml-5" data-aos="fade-up">
                  {list}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-5 my-5">
            <div className="w-6/12" data-aos="fade-left">
              <p className="text-justify">{experienceDetails?.paragraphTwo}</p>
            </div>
            <div className="w-6/12" data-aos="fade-right">
              <img src={experienceDetails?.paraImageOne} alt="" />
              <p className="text-sm">
                {experienceDetails?.paraImageOneCaption}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-5">
            <div className="w-6/12" data-aos="fade-right">
              <img src={experienceDetails?.paraImageTwo} alt="" />
              <p className="text-sm">
                {experienceDetails?.paraImageTwoCaption}
              </p>
            </div>

            <div className="w-6/12" data-aos="fade-left">
              <p className="text-justify">
                {experienceDetails?.paragraphThree}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-5">
            <div className="w-6/12" data-aos="fade-left">
              <p className="text-justify">{experienceDetails?.paragraphFour}</p>
            </div>
            <div className="w-6/12" data-aos="fade-right">
              <p className="text-justify">{experienceDetails?.paragraphFive}</p>
            </div>
          </div>

          <div data-aos="fade-up">
            <p>{experienceDetails?.paragraphSix}</p>
          </div>
        </div>
        {/* Company Details End */}
      </div>
    </section>
  );
}
