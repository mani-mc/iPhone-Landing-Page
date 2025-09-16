import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iphone_seventeenpro from "../images/iphoneseventeenpro.jpg";
import iphone_air from "../images/iphone_air.jpg";
import iphone_seventeen from "../images/iphone_seventeen.jpg";
import iphone_sixteen from "../images/iphone_sixteen.jpg";
import iphone_sixteen_e from "../images/iphone_sixteen_e.jpg";

const data = [
    {
        photo: iphone_seventeenpro,
        model: "New",
        title: "iPhone 17 Pro",
        desc: "Innovative design for ultimate performance and battery life.",
        btn: "Learn more",
        link: "Pre-Order ›",
    },

    {
        photo: iphone_air,
        model: "New",
        title: "iPhone Air",
        desc: "The thinnest iPhone ever.With the power of pro inside.",
        btn: "Learn more",
        link: "Pre-Order ›",
    },

    {
        photo: iphone_seventeen,
        model: "New",
        title: "iPhone 17",
        desc: "Innovative design for ultimate performance and battery life.",
        btn: "Learn more",
        link: "Pre-Order ›",
    },

    {
        photo: iphone_sixteen,
        model: "Best Seller",
        title: "iPhone 16",
        desc: "Amazing performance.Durable design.Make it yours.",
        btn: "Learn more",
        link: "Buy ›",
    },

    {
        photo: iphone_sixteen_e,
        model: "Compact",
        title: "iPhone 16e",
        desc: "Everything you love.Including the price.Cutting-Edge Cameras.",
        btn: "Learn more",
        link: "Buy ›",
    },
];


function ProductsOne() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4.4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <>
            <div className="items-center lg:flex justify-between px-6 lg:px-12 mt-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1f]">Explore the line-up.</h2>
                <p className="text-base mt-1 md:text-xl lg:mt-0 text-blue-600 cursor-pointer hover:underline">Compare all models ›</p>
            </div>

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-6 lg:p-12">

                        <div className="w-60 lg:w-80 lg:h-full overflow-hidden relative bg-white shadow-lg rounded-xl p-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            {/* Product Img */}
                            <img className="h-60 lg:h-80 rounded-md" src={item.photo} alt={item.title} />

                            {/* Product Model */}
                            <p className="text-xs lg:text-sm font-medium text-[#b64429] mt-2">{item.model}</p>

                            {/*Product Title  */}
                            <h2 className="text-lg lg:text-xl font-bold text-[#1d1d1f]">{item.title}</h2>

                            {/* Product Desc */}
                            <p className="text-xs lg:text-sm text-gray-500">{item.desc}</p>

                            {/* Buttons */}
                            <div className="flex items-center space-x-2 mt-2"><button className="text-xs lg:text-sm bg-blue-600 hover:bg-blue-700  text-white px-2 py-1 rounded-3xl cursor-pointer">{item.btn}</button>
                                <p className="text-xs lg:text-sm text-blue-600 hover:underline cursor-pointer">{item.link}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </>

    );
}

export default ProductsOne;
