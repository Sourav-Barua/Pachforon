import { useLoaderData } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './Chefdetails.css'






const ChefDetails = () => {
    const chefDetails = useLoaderData();

    const [isFavorite, setIsFavorite] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        // Show toast message
        const toast = document.createElement("div");
        toast.innerHTML = "Recipe added to favorites!";
        toast.classList.add("toast");
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);

        // Set isFavorite to true and disable the button
        setIsFavorite(true);
        setIsDisabled(true);
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

                {/* Table start */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th> Recipe -1 </th>
                                <th> Recipe -2 </th>
                                <th> Recipe -3 </th>

                                <th>Favorite Btn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Name</th>
                                <th>{Recipe1.recipeName}</th>
                                <th>{Recipe2.recipeName}</th>
                                <th>{Recipe3.recipeName}</th>
                                <td>
                                    <div className="App">
                                        <button className={` ${isFavorite ? 'disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
                                            <FaHeart className="icon" />
                                            {isFavorite ? '' : ''}
                                        </button>

                                    </div>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>Rating</th>
                                <td>{Recipe1.rating}</td>
                                <td>{Recipe2.rating}</td>
                                <td>{Recipe3.rating}</td>

                                <td>
                                    <button className={` ${isFavorite ? 'disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
                                        <FaHeart className="icon" />
                                        {isFavorite ? '' : ''}
                                    </button>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>Ingredients</th>
                                <td>
                                    <ul>
                                        {ingredients.map((ingredient, index) => (
                                            <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {ingredients.map((ingredient, index) => (
                                            <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {ingredients.map((ingredient, index) => (
                                            <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <button className={` ${isFavorite ? 'disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
                                        <FaHeart className="icon" />
                                        {isFavorite ? '' : ''}
                                    </button>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>Cooking Mathod</th>
                                <td>
                                    <ul>
                                        {cookingMahod.map((cookingMahod, index) => (
                                            <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {cookingMahod.map((cookingMahod, index) => (
                                            <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {cookingMahod.map((cookingMahod, index) => (
                                            <li key={index}>{`${index + 1}. ${cookingMahod}`}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <button className={` ${isFavorite ? 'disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
                                        <FaHeart className="icon" />
                                        {isFavorite ? '' : ''}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Table End */}





            </div>
        </div>
    );
};

export default ChefDetails;