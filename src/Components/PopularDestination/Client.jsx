import { FaConciergeBell, FaHotel, FaPlane } from "react-icons/fa"
import { FaUmbrellaBeach } from "react-icons/fa6"

export default function Clients(){
    const client=[
        {
            id:1,
            image:"./Images/Alice.jpg",
            name:"Alice Jahnson",
            text:"Traveling to Paris offers a unique blend of culture, architecture, cuisine, and history. From wandering through the charming streets and admiring the stunning architecture to enjoying delicious food from local bakeries ",
            location:"Paris,France"
        },
        {
            id:2,
            image:"./Images/jane.jpg",
            name:"Jane Smith",
            text:"Traveling to the USA provides a diverse range of experiences, from national parks like Yellowstone to vibrant cities such as New York and San Francisco. ",
            location:"NewYork,USA"
        },
        {
            id:3,
            image:"./Images/John.jpg",
            name:"John Doe",
            text:"Traveling to Italy offers a rich array of experiences, from exploring ancient Roman ruins to enjoying scenic hiking routes and indulging in regional cuisine. ",
            location:"Italy.Terrer"
        }
    ]
    return(
        <>
        <div className="py-5 bg-gray-100">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-8">What Our Client Say</h3>
                <div className=" grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {client.map((option,index)=>(
                        <div className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer transform transition duration-300 hover:scale-110" key={index}>
                                <img src={option.image} alt="" className="rounded-full mx-auto mb-4 w-24 h-24  " />                           
                                <h4 className="text-xl font-bold mb-2">{option.name}</h4>
                                <p className="text-gray-600 text-center">{option.location}</p>
                                <p className="text-gray-600 text-center italic">{option.text}</p>                         
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}