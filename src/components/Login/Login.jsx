import { NavLink } from 'react-router-dom';
import Socialbtn from './Socialbtn';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100" >
            <div className="w-full max-w-md ">
                <div className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold mb-6">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="**********"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                No account?
                                <NavLink to="/register" className="text-sky-400">Register</NavLink>

                            </p>
                        </div>
                        <Socialbtn />
                    </form>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 Company. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;