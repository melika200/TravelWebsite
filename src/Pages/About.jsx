import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-100">
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src="/Images/8.jpg" alt="About Us" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              Mahan Air, also known as Mahan Airlines, is a privately owned
              airline based in Tehran, Iran. It operates both domestic and
              international scheduled flights, offering various classes of
              travel including Business and Economy. Passengers can manage
              bookings, check in online, and stay informed about travel
              requirements through their services.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mession</h3>
            <p className="text-gray-700 mb-4">
              Mahan Travel is associated with Mahan Air, which was established
              in 1992 as the first private airline in Iran, providing passenger
              and freight services. The airline places a focus on maintaining
              the health of staff and guests while ensuring a pleasant, clean
              environment for travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
