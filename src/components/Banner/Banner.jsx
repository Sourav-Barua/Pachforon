import Lottie from "lottie-react";
import bannerChef from "./bannerChef.json"

const Banner = () => {
    return (
        <div>
            <div  className="relative h-80 md:h-96">
                    <Lottie className="absolute inset-0 z-0" animationData={bannerChef} />
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-opacity-30">Discover Your Inner Chef</h1>
                            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-opacity-50">Join our cooking classes and learn to create delicious meals at home</p>
                            <button className="bg-white text-opacity-50 text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-gray-300 hover:text-gray-900 transition duration-300">Book Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;