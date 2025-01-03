export default function CertificateDetails({
  selectedCertificate,
  isOpen,
  setIsOpen,
}) {
  console.log(selectedCertificate._id);

  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-gray-900/75 flex flex-col items-center">
      <div className="w-full flex justify-end mt-20 mb-5 mr-20">
        <button
          className="text-red-600 font-bold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          Close
        </button>
      </div>

      <div>
        <img src={selectedCertificate?.image} className="h-[50%]" alt="" />
        <p className="text-center text-2xl font-bold mt-5 text-white">
          {selectedCertificate?.name}
        </p>
      </div>
    </div>
  );
}
