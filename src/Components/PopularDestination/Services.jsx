import { FaConciergeBell, FaHotel, FaPlane } from "react-icons/fa"
import { FaUmbrellaBeach } from "react-icons/fa6"

export default function Services(){
    const service=[
        {
            id:1,
            icon:<FaPlane className="text-4xl text-blue-500"/>,
            title:"Flight Booking",
            description:"To book a flight, you can compare prices from major airlines and travel agents online."
        },
        {
            id:2,
            icon:<FaHotel className="text-4xl text-blue-500"/>,
            title:"Hotel Booking",
            description:"You can book hotels through various platforms such as hotelbooking.com and Booking.com, which offer a wide selection of hotel deals, vacation packages, and travel-related services"
        },
        {
            id:4,
            icon:<FaUmbrellaBeach className="text-4xl text-blue-500"/>,
            title:"Beach Tours",
            description:"Whether you're interested in tropical destinations like Thailand or the Maldives, there are numerous options to explore."
        },
        {
            id:5,
            icon:<FaConciergeBell className="text-4xl text-blue-500"/>,
            title:"Concierge Services",
            description:"These can include household management, event planning, and personal errands, with billing options available monthly, hourly, or at a fixed cost"
        }
    ]
    return(
        <>
        <div className="py-5 bg-gray-100">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
                <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {service.map((option,index)=>(
                        <div className="bg-white rounded-lg shadow-md flex flex-col p-6 items-center cursor-pointer transform transition duration-300 hover:scale-110" key={index}>
                           <div className="mb-4">{option.icon}</div>
                           
                                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                                <p className="text-gray-600 text-center">{option.description}</p>
                         
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}