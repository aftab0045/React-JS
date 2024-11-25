import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import shimmer from "./Shimmer";
import Shimmer from "./Shimmer";




const Body = () =>{
    //Local State Variable - Super powerfull Variable
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");


    useEffect(() =>{
      fetchData();
    },[]);

    const fetchData = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5625986&lng=73.8523582&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if (listOfRestaurants.length == 0){
      return <Shimmer />;
    }
   

    return(
      <div className='body'>
        <div className='filter'>
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) =>{setSearchText(e.target.value)}} />
            <button 
            onClick={() =>{
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>
          </div>
            <button 
            className="filter-btn" 
            onClick={() =>{const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                setListOfRestaurants(filterList);
            }}> 
                Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {filteredRestaurant.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    )
  } 


  export default Body;