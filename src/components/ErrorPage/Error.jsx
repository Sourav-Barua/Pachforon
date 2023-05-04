import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Notfound from "./error.json";

const Error = () => {
    const { error, status } = useRouteError()


    return (


        <div>

            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <Lottie animationData={Notfound} loop={true} />;
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                            {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Error;