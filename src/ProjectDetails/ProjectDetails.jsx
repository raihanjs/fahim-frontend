import { useLoaderData } from "react-router-dom";

export default function ProjectDetails() {
  const projectDetails = useLoaderData();

  return (
    <section className="my-20">
      <div className="container">
        <div className="w-full flex justify-center mb-5">
          <h2
            data-aos="zoom-in"
            className="text-center text-4xl font-bold border-b-2 border-orange-600 inline-block"
          >
            {projectDetails?.title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {projectDetails.gallery.map((gl, i) => (
            <div key={i} className="" data-aos="fade-up">
              <img src={gl} className="w-full" />
            </div>
          ))}
        </div>

        {projectDetails.texts.map((text, i) => (
          <p key={i} className="text-xl my-5" data-aos="fade-up">
            {text}
          </p>
        ))}

        {/* Links */}
        <div>
          <h4 className="border-b-2 border-gray-600 text-4xl font-bold">
            Links
          </h4>

          <ul className="flex flex-col">
            {projectDetails?.links.map((link) => (
              <a
                href={link?.link}
                target="_blank"
                className="text-2xl font-bold hover:text-orange-600 hover:pl-5"
              >
                {link?.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
