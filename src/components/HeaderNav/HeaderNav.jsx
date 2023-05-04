import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    const [activeItem, setActiveItem] = useState('/');

    useEffect(() => {
        const paths = window.location.pathname.split('/');
        setActiveItem(`/${paths[1]}`);
    }, []);

    const navItems = [
        { path: '/home', name: 'Home' },
        { path: '/blog', name: 'Blog' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/login', name: 'Login' },
    ];

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems.map((item, idx) => <li key={idx} onClick={() => setActiveItem(item.path)}><Link to={item.path} className={item.path === activeItem ? 'text-primary' : ''}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">PanchForon</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map((item, idx) => <li key={idx} onClick={() => setActiveItem(item.path)}><Link to={item.path} className={item.path === activeItem ? 'text-primary' : ''}>{item.name}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://media.istockphoto.com/id/1399205160/photo/one-happy-young-caucasian-businessman-working-on-a-laptop-in-an-office-confident-male.jpg?b=1&s=170667a&w=0&k=20&c=yLDJGI3hDHebXwmW2sA_pox75H6Tnauwr7VVULqjtiQ=" alt="Loading..." />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default HeaderNav;