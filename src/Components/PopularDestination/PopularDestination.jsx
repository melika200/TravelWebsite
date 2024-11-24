export default function PopularDestination(){
    const destination=[
        {
            id:1,
            image:"./Images/5.jpg",
            title:"Parise,France",
            description:"Paris is the capital and largest city of France, with an estimated population of 2,102,650 residents as of January 2023"
        },
        {
            id:2,
            image:"./Images/6.jpg",
            title:"Bail,Indonesia",
            description:"Bali is a province of Indonesia and is located in the Lesser Sunda Islands, situated east of Java and west of Lombok."
        },
        {
            id:4,
            image:"./Images/1.jpg",
            title:"NewYork , USA",
            description:"The United States of America (USA) is a federal republic located primarily in North America"
        },
        {
            id:5,
            image:"./Images/8.jpg",
            title:"Italy,terrer",
            description:"Italy, officially known as the Italian Republic, is a country located in Southern and Western Europe"
        }
    ]
    return(
        <>
        <div className="py-5 bg-gray-100">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-8">Popular Destination</h3>
                <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {destination.map((city,index)=>(
                        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" key={index}>
                            <img className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" src={city.image} alt={city.title} />
                            <div className="p-4">
                                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                                <p className="text-gray-600">{city.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}