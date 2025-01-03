import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-12 bg-orange-600 text-white font-bold text-4xl">
      <div className="container">
        <Link to="contact">
          <div className="flex justify-center">
            <p className="">Contact</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
