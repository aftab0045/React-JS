import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";





const Body = () =>{
    //Local State Variable - Super powerfull Variable
    const [listOfRestaurants , setListOfRestaurants] = useState(resList);



    return(
      <div className='body'>
        <div className='filter'>
            <button 
            className="filter-btn" 
            onClick={() =>{const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurants(filterList);
            }}> 
                Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {listOfRestaurants.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    )
  } 


  export default Body;