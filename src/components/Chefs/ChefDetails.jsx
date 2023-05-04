import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const ChefDetails = () => {
    const chefDetails = useLoaderData();

    const [isFavorite, setIsFavorite] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsFavorite(true);
        setIsDisabled(true);
        toast.success('This recipe is now your favorite!');
    };


    const { chefName, chefPicture, recipes, yearsOfExperience, likes, Recipe1, Recipe2, Recipe3 } = chefDetails;

    const ingredients = ['1 cup sugar', '1/2 cup butter', '2 eggs', '2 cups flour', '1 tsp baking powder'];
    const cookingMahod = ["Preheat the grill to medium-high heat.", "Cut the chicken breasts into 1-inch cubes and season with salt and pepper.", "Thread the chicken", "bell peppers"];





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
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex justify-around">
                                <h1>{Recipe1.recipeName}</h1>
                                <button
                                    onClick={handleClick}
                                    disabled={isDisabled}
                                >
                                    <FaHeart
                                        className={`text-2xl cursor-pointer ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Rating:</span> {Recipe1.rating}</p>
                        <ul>
                            <span className="font-semibold text-sky-400">Ingredient:</span>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                            ))}
                        </ul>
                        <ul>
                            <span className="font-semibold text-sky-400">Cooking Mathod:</span>
                            {cookingMahod.map((cookingMahod, index) => (
                                <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        <div className="flex justify-around">
                            <h1>{Recipe2.recipeName}</h1>
                            <button
                                onClick={handleClick}
                                disabled={isDisabled}
                            >
                                <FaHeart
                                    className={`text-2xl cursor-pointer ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold text-sky-400">Rating:</span> {Recipe2.rating}</p>
                        <ul>
                            <span className="font-semibold">Ingredient:</span>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                            ))}
                        </ul>
                        <ul>
                            <span className="font-semibold text-sky-400">Cooking Mathod:</span>
                            {cookingMahod.map((cookingMahod, index) => (
                                <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                            ))}
                        </ul>
                        {/*  */}
                        <div className="w-64">

                        </div>

                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/4 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex justify-around">
                                <h1>{Recipe3.recipeName}</h1>
                                <button
                                    onClick={handleClick}
                                    disabled={isDisabled}
                                >
                                    <FaHeart
                                        className={`text-2xl cursor-pointer ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Rating:</span> {Recipe3.rating}</p>
                        <ul>
                            <span className="font-semibold text-sky-400">Ingredient:</span>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                            ))}
                        </ul>
                        <ul>
                            <span className="font-semibold text-sky-400">Cooking Mathod:</span>
                            {cookingMahod.map((cookingMahod, index) => (
                                <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;