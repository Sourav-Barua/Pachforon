/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Chef = ({ chef }) => {
    const { id, chefName, chefPicture, recipes, yearsOfExperience, likes } = chef;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={chefPicture} alt="Loading..." className="h-96 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {chefName}
                    <div className="badge badge-secondary h-fit">{likes} likes</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{yearsOfExperience} years experience</div>
                    <div className="badge badge-outline">Total {recipes} recipes</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/chef-details/${id}`} className="btn btn-primary mt-4">View Recipe</Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;