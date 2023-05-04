import { useEffect, useState } from "react";
import Chef from "./Chef";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [spin, setSpin] = useState(false);

    useEffect(() => {
        setSpin(true);
        fetch('https://pachfhoron-server-site-sourav-barua.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setSpin(false);
            })
            .catch(error => console.log(error.message));
    }, []);

    return (
        <>
            <img className={`block text-center w-16 mx-auto ${spin ? '' : 'hidden'}`} src="https://cdn.dribbble.com/users/688241/screenshots/10492573/media/e0d38e86b2a8972e060d1ee42e5eb5ed.gif" alt="Loading..." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">

                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </>
    );
};

export default Chefs;