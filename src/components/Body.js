import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import shimmer from "./shimmer";




const Body = () =>{
    //Local State Variable - Super powerfull Variable
    const [listOfRestaurants , setListOfRestaurants] = useState([]);


    useEffect(() =>{
      fetchData();
    },[]);

    const fetchData = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5625986&lng=73.8523582&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if (listOfRestaurants.length == 0){
      return <shimmer></shimmer>;
    }
   

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