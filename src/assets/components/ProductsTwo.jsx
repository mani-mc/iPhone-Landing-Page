import macbook from "../images/macbook.jpg"
import ipadair from "../images/ipad-air.png"
import airpods from "../images/airpods.webp"
import watch from "../images/watch-1.png"
import appletv from "../images/apple_tv.jpg"
import homepod from "../images/homepod_mini.jpg"
import monitor from "../images/monitor.jpeg"
import studio from "../images/mac-studio.jpeg"


function ProductsTwo() {
    const products = [
        {
            id: 1,
            name: "Macbook",
            desc: "Check out ›",
            photo: macbook,
        },
        {
            id: 2,
            name: "iPad",
            desc: "Check out ›",
            photo: ipadair,
        },

        {
            id: 3,
            name: "Monitor",
            desc: "Check out ›",
            photo: monitor,
        },

        {
            id: 4,
            name: "Studio",
            desc: "Check out ›",
            photo: studio,
        },
        {
            id: 5,
            name: "Air Pods",
            desc: "Check out ›",
            photo: airpods,
        },
        {
            id: 6,
            name: "Watch",
            desc: "Check out ›",
            photo: watch,
        },
        {
            id: 7,
            name: "Apple tv",
            desc: "Check out ›",
            photo: appletv,
        },
        {
            id: 8,
            name: "Homepod",
            desc: "Check out ›",
            photo: homepod,
        },

    ];

    return (
        <>

            <div className="bg-gray-200 lg:p-12 p-6 mt-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1f]">Explore more products.</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 lg:mt-10 gap-5">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <img src={item.photo} alt="" className="h-40 md:h-64 w-full object-cover" />
                            <div className="absolute flex justify-between items-center bottom-0 w-full translate-y-full bg-gray-100 p-4 transition-transform duration-300 group-hover:translate-y-0">
                                <h3 className="text-sm md:text-lg lg:text-xl font-bold">{item.name}</h3>
                                <p className="text-xs md:text-base lg:text-base text-blue-600 hover:underline cursor-pointer">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsTwo;