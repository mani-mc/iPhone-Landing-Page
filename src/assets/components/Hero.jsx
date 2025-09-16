import herovideo from "../videos/videoplayback.mp4"

function Hero() {
    return (
        < >
            <div className="bg-gray-100 p-6 lg:p-12 h-[60%] md:h-[80%] lg:h-[100%] lg:w-[100%]] relative">
                <video style={{ borderRadius: "15px" }} src={herovideo} autoPlay muted loop ></video>
                <div className="absolute text-center bottom-8 left-8 lg:bottom-16 lg:left-16">
                    <h2 className="font-bold text-xl md:text-5xl lg:text-7xl text-white ">iPhone 17 Pro</h2>
                    <p className="text-[8px] md:text-xl lg:text-2xl text-gray-100">New Launch, Pre Order Now</p>
                </div>

                <div className="absolute space-x-1 md:space-x-2 bottom-8 right-8 lg:bottom-16 lg:right-16">
                    <button className="text-[8px] md:text-base lg:text-lg font-medium p-[4px] md:p-2 rounded-3xl bg-gray-100 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Learn More</button>
                    <button className="text-[8px] md:text-base  lg:text-lg font-medium p-[4px] md:p-2 rounded-3xl bg-blue-500 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Pre Order</button>
                </div>
            </div>
        </ >
    );
}

export default Hero;