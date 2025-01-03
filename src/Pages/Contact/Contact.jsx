import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaWhatsappSquare, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="my-20">
      <div className="container">
        {/* Section Ttitle Start */}
        <div className="text-center " data-aos="fade-up">
          <h2 className="text-4xl font-bold border-b-2 border-orange-600 inline-block px-20 pb-2">
            Contact
          </h2>
        </div>
        {/* Section Ttitle End */}

        <div>
          <p className="text-2xl my-5 text-center" data-aos="fade-up">
            If you would be so kind as to wish to contact me or seek further
            information about my personality, I would greatly appreciate your
            consideration in either sending an email or visiting one of my
            esteemed social media accounts.
            <br />
            <br />
            Looking forward to your acquaintance.
          </p>
        </div>

        <div className="flex justify-center gap-2" data-aos="fade-up">
          <div className="p-4 border hover:border-orange-600">
            <a
              href="https://www.linkedin.com/in/quazi-fahim-mohammadullah/"
              target="_blank"
            >
              <FaLinkedin className="text-4xl text-gray-800" />
            </a>
          </div>
          <div className="p-4 border hover:border-orange-600">
            <a
              href="https://www.facebook.com/fahimmohammadullah.fahim"
              target="_blank"
            >
              <FaFacebookSquare className="text-4xl text-blue-800" />
            </a>
          </div>
          <div className="p-4 border hover:border-orange-600">
            <a href="https://wa.me/+12368635675" target="_blank">
              <FaWhatsappSquare className="text-4xl text-green-800" />
            </a>
          </div>
          <div className="p-4 border hover:border-orange-600">
            <a href="mailto:qfm236@gmail.com" target="_blank">
              <FaEnvelope className="text-4xl text-cyan-800" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
