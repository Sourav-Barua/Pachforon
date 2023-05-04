// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from "lottie-react";
import ok from "./hi.json";


const About = () => {



    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            About Bangladeshi Cuisine
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Bangladeshi cuisine is a blend of diverse flavors and spices that have evolved over time due to the country history and geographical location. Bangladesh is known for its rich and flavorful dishes that use a variety of ingredients such as rice, fish, meat, lentils, vegetables, and spices like cumin, coriander, turmeric, and chili powder.
                        </p>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Some of the most popular dishes in Bangladesh include biryani, a spicy rice dish made with meat or vegetables, and fish curry, which is made with a variety of fish and a flavorful sauce made with coconut milk, tamarind, and spices. Other popular dishes include dal, a lentil-based soup, and chutney, a spicy condiment made with a variety of fruits and vegetables.
                        </p>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Bangladeshi cuisine also includes a variety of sweets and desserts, such as rasgulla, a spongy cheese ball soaked in syrup, and mishti doi, a sweet yogurt dish. Tea is the most popular beverage in Bangladesh, and is often served with snacks like samosas or pitha, a type of rice cake.
                        </p>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            At our restaurant, we strive to bring the authentic flavors of Bangladeshi cuisine to our customers, using fresh ingredients and traditional cooking techniques. We hope you enjoy our dishes and the rich culinary heritage they represent.
                        </p>
                    </div>
                    <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-2">

                        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:w-full lg:max-w-none">
                            <Lottie className='' animationData={ok} loop={true} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;