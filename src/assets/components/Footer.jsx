import logo from "../images/apple-173-svgrepo-com.svg"

const secOne = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "Air Pods", "TV & Home", "Air Tag", "Accessories", "Gift Cards"
]

const secTwo = [
    "Wallet"
]

const secThree = [
    "Manage Your Apple Account", "Apple Store Account", "iCloud.com"
]

const secFour = [
    "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"
]

const secFive = [
    "Find Store", "Genius", "Today at Apple", "Group Reservations", "Apple camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Other Status", "Shopping Help"
]

const secSix = [
    "Apple and Business", "Shop for Business"
]

const secSeven = [
    "Apple and Education", "Shop for Education", "Shop for University"
]

const secEight = [
    "Apple and Healthcare"
]

const secNine = [
    "Apple and Goverment"
]

const secTen = [
    "Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"
]

const secEleven = [
    "Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Events", "Contact Apple"
]
function Footer() {
    return (
        <footer className="bg-[#fafafc] px-2 mt-8 md:mt-12 lg:mt-0 lg:py-2">
            <div className=" py-3 flex justify-center space-x-2 md:space-x-10 lg:space-x-20 w-full h-full">
                <ul>
                    <li className="flex flex-col space-y-2">
                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Shop and Learn</h2>
                        {secOne.map((dataone) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataone}>{dataone}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Apple Wallet</h2>
                        {secTwo.map((dataTwo) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataTwo}>{dataTwo}</a>
                        ))}
                    </li>
                </ul>

                <ul>
                    <li className="flex flex-col space-y-2">
                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Account</h2>
                        {secThree.map((dataThree) => (
                            <a className="text-[8px] md:text-[12px] w-28 md:w-full text-gray-700 hover:underline" href="#" key={dataThree}>{dataThree}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Entertainment</h2>
                        {secFour.map((dataFour) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataFour}>{dataFour}</a>
                        ))}
                    </li>
                </ul>

                <ul>
                    <li className="flex flex-col space-y-2">
                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Apple Store</h2>
                        {secFive.map((dataFive) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataFive}>{dataFive}</a>
                        ))}
                    </li>
                </ul>

                <ul>
                    <li className="flex flex-col space-y-2">
                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">For Business</h2>
                        {secSix.map((dataSix) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataSix}>{dataSix}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">For Education</h2>
                        {secSeven.map((dataSeven) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataSeven}>{dataSeven}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">For Healthcare</h2>
                        {secEight.map((dataEight) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataEight}>{dataEight}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">Apple and Goverment</h2>
                        {secNine.map((dataNine) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataNine}>{dataNine}</a>
                        ))}
                    </li>
                </ul>

                <ul>
                    <li className="flex flex-col space-y-2">

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">About Values</h2>
                        {secTen.map((dataTen) => (
                            <a className="text-[8px] md:text-[12px] text-gray-700 hover:underline" href="#" key={dataTen}>{dataTen}</a>
                        ))}

                        <h2 className="text-[9px] md:text-[13px] font-medium text-[#1d1d1f]">About Apple</h2>
                        {secEleven.map((dataEleven) => (
                            <a className=" text-[8px] md:text-[12px]  text-gray-700 hover:underline" href="#" key={dataEleven}>{dataEleven}</a>
                        ))}
                    </li>
                </ul>
            </div>
            <div className="text-[8px] space-x-1 flex border-b-2 justify-center mx-auto md:text-[13px]  md:w-[85%] lg:w-[65%] mt-5">
                <p className="text-gray-700">More ways to shop :</p>
                <a className="text-blue-600 hover:text-blue-700 underline" href="#">Find an Apple Store</a>
                <p className="text-gray-700">nearyou or call :</p>
                <a className="text-blue-600 hover:text-blue-700 underline mb-2" href="#"> 000800 040 1966</a>
            </div>

            <div className="text-[7px] space-x-[2px] md:text-[13px] py-1 text-gray-700 flex justify-center  lg:mt-1 md:space-x-2">
                <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                <a className="hover:underline hover:text-blue-600" href="">Privacy Policy |</a>
                <a className="hover:underline hover:text-blue-600" href="">Terms of Use |</a>
                <a className="hover:underline hover:text-blue-600" href="">Sales Policy |</a>
                <a className="hover:underline hover:text-blue-600" href="">Legal |</a>
                <a className="hover:underline hover:text-blue-600" href="">Site Map </a>
            </div>
            <p className="text-center text-[7px] md:text-[13px] mb-1  text-gray-700">Made With ❤️ by Mani</p>
        </footer>

    );
}

export default Footer; 