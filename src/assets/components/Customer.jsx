import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tradein from "../images/trade-in.jpg"
import creditcard from "../images/credit-card.jpg"
import personalsetup from "../images/personal-setup.png"
import bag from "../images/delivery-bag.png"


const data = [
    {
        photo: tradein,
        head: "Apple Trade In",
        subhead: "Save on a new iPhone with a trade in",
        desc: "A program that lets you trade in your current smartphone or other eligible",
    },

    {
        photo: creditcard,
        head: "Ways to Buy",
        subhead: "Monthly payment options are available.",
        desc: "Choose the easy way to finance with concvenient monthly payment options.",
    },

    {
        photo: personalsetup,
        head: "Personal Setup",
        subhead: "Make the most of your iPhone with an online session.",
        desc: "Talk- one-to-one with a speacialist to set up your device and discover new features.",
    },

    {
        photo: bag,
        head: "Delivery and Pickup",
        subhead: "Get flexible delivery and easy pickup.",
        desc: "Faster than you can imagine. Get free delivery or pickup at your Apple Store .",
    },
];


function Customer() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
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
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <>
            <div className="items-center lg:flex justify-between px-6 lg:px-12 mt-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold w-[80%] md:w-[60%] lg:w-[40%] text-[#1d1d1f]">Why Apple is the best.place to buy iPhone.</h2>
                <p className="text-base mt-1 md:text-xl lg:mt-0 text-blue-600 cursor-pointer hover:underline">Shop Now ›</p>
            </div>

            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-6 lg:p-12">

                        <div className="w-60 h-96 lg:w-80 lg:h-full overflow-hidden relative shadow-lg rounded-xl p-3 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            {/* SubHead */}
                            <h3 className="text-blue-600 text-sm lg:text-base">{item.head}</h3>

                            {/* Head */}
                            <p className="text-sm py-1 lg:text-xl font-bold text-[#1d1d1f]  ">{item.subhead}</p>

                            {/* Desc */}
                            <p className="text-gray-500 text-sm py-1 lg:text-sm">{item.desc}</p>

                            {/* Img*/}
                            <img className="h-40 mt-10 object-cover lg:h-60 rounded-md" src={item.photo} alt={item.title} />
                        </div>
                    </div>
                ))}
            </Slider>
        </>

    );
}

export default Customer;
