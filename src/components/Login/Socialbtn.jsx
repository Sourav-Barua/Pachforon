
const Socialbtn = () => {
    return (
        <div>

            <button
                className="flex items-center justify-center px-4 py-2 mt-4 mb-4 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                Sign in with Gmail
            </button>




            <button
                className="flex items-center justify-center px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.14 6.84 9.44.5.1.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.66.06-.66.06-.66 1 .08 1.53 1.03 1.53 1.03.89 1.53 2.34 1.08 2.91.83.1-.66.35-1.1.63-1.35-2.2-.24-4.51-1.1-4.51-4.9 0-1.08.38-1.96 1.02-2.65-.1-.24-.44-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.36 9.36 0 0 1 12 6.26c.83.08 1.67.12 2.5.24 1.9-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.63.64.7 1.02 1.57 1.02 2.65 0 3.82-2.32 4.66-4.53 4.9.36.3.68.91.68 1.85v2.74c0 .26.18.58.69.48A10.57 10.57 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                    />
                </svg>
                Sign in with Github
            </button>


        </div>
    );
};

export default Socialbtn;