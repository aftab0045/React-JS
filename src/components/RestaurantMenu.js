import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/contants";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();

         
        setResInfo(json.data)
    }



    if(resInfo === null) return <Shimmer />; 

    const {name , cuisines, city, locality} = resInfo?.cards[2]?.card?.card?.info;
    
    const{itemcards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
     
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")} </h2>
            <p>
                {city} - {locality}
            </p>
            
            {categories.map((category => {
                <RestaurantCategory />
            }))}
        </div>
    )
}


export default RestaurantMenu;