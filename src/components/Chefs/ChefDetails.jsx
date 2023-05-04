import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
    const chefDetails = useLoaderData();

    const { chefName, chefPicture, recipes, yearsOfExperience, likes, Recipe1, Recipe2, Recipe3 } = chefDetails;

    return (
        <div className="card card-compact bg-slate-100 shadow-xl w-3/4 mx-auto my-28">
            <div className="avatar mx-auto absolute -top-24 -left-24">
                <div className="w-52 mask mask-squircle">
                    <img src={chefPicture} />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto text-3xl">{chefName}</h2>
                <p className="text-lg"><span className="font-semibold">Total Recipes: </span>{recipes}</p>
                <p className="text-lg"><span className="font-semibold">Years of Experience: </span>{yearsOfExperience} years</p>
                <p className="text-lg"><span className="font-semibold">{likes}</span> person like this chef</p>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        {Recipe1.recipeName}
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Rating:</span> {Recipe1.rating}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        {Recipe2.recipeName}
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Rating:</span> {Recipe2.rating}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        {Recipe3.recipeName}
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Rating:</span> {Recipe3.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;