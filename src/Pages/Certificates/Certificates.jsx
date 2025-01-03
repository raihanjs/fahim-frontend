import { useEffect, useState } from "react";
import CertificateDetails from "../../CertificateDetails/CertificateDetails";

export default function Certificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("https://fahim-backend.vercel.app/portfolio/api/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  const handleCertificateClick = (certificate) => {
    setIsOpen(!isOpen);
    setSelectedCertificate(certificate);
  };
  return (
    <section className="my-20">
      <div className="container">
        {/* Section Ttitle Start */}
        <div className="text-center ">
          <h2 className="text-4xl font-bold border-b-2 border-orange-600 inline-block px-20 pb-2">
            Certificates
          </h2>
        </div>
        {/* Section Ttitle End */}

        <div className="flex flex-wrap justify-center my-8">
          {certificates.map((certificate) => (
            <div
              key={certificate._id}
              className="md:2/12 lg:w-4/12 p-8 cursor-pointer"
              onClick={() => handleCertificateClick(certificate)}
              data-aos="zoom-in"
            >
              <img src={certificate?.image} className="" alt="" />
              <p className="text-2xl font-bold truncate">{certificate?.name}</p>
              <p className="text-2xl font-bold">{certificate?.year}</p>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <CertificateDetails
          selectedCertificate={selectedCertificate}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </section>
  );
}
