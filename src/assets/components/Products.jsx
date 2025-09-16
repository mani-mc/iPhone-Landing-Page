import one from "../images/17pro.png"
import two from "../images/air.png"
import three from "../images/i17.png"
import four from "../images/i16.png"
import five from "../images/i16se.png"
import compare from "../images/compare.png"
import accessories from "../images/accessories.png"
import shop from "../images/shop.png"
import ios from "../images/ios.png"
import airpods from "../images/airpods.png"
import watch from "../images/watch.jpg"

function Products() {
    return (
        <section className="p-6 lg:p-12 text-[#1d1d1f]">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold">iPhone</h2>
            <div className="overflow-hidden relative">
                <div className="p-6 flex gap-8 items-center text-center min-w-max animate-slide lg:animate-none lg:justify-around ">
                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={one} alt="iPhone 17 Pro" />
                        <p className="text-sm mt-1 font-medium">iPhone 17 Pro</p>
                        <p className="text-xs font-semibold text-[#b64429]">New</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={two} alt="iPhone Air" />
                        <p className="text-sm mt-1  font-medium">iPhone Air</p>
                        <p className="text-xs font-semibold text-[#b64429]">New</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={three} alt="iPhone 17" />
                        <p className="text-sm mt-1  font-medium">iPhone 17</p>
                        <p className="text-xs font-semibold text-[#b64429]">New</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={four} alt="iPhone 16" />
                        <p className="text-sm mt-1  font-medium">iPhone 16</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={five} alt="iPhone 16e" />
                        <p className="text-sm mt-1  font-medium">iPhone 16e</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={compare} alt="Compare" />
                        <p className="text-sm mt-1  font-medium">Compare</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={accessories} alt="Accessories" />
                        <p className="text-sm mt-1  font-medium">Accessories</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={shop} alt="Shop" />
                        <p className="text-sm mt-1  font-medium">Shop</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={airpods} alt="Air Pods" />
                        <p className="text-sm mt-1  font-medium">Air Pods</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={watch} alt="Watch" />
                        <p className="text-sm mt-1  font-medium">Watch</p>
                    </div>

                    <div className="h-40 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img className="h-32 lg:h-24 mx-auto" src={ios} alt=" iOS" />
                        <p className="text-sm mt-1  font-medium">iOS</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Products;