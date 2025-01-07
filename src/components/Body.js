import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import shimmer from "./Shimmer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () =>{
    //Local State Variable - Super powerfull Variable
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
      return <h1 style={{ textAlign: "center", color: "red" }}>You Are Offline !! No Internet Connection</h1>;
  }


    useEffect(() =>{
      fetchData();
    },[]);

    const fetchData = async() =>{
      const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();



    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ):

   (
      <div className='body'>
        <div className='filter flex'>
          <div className="search m-4 p-4 rounded-lg">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) =>{setSearchText(e.target.value)}} />
            <button className="px-4 py-1 bg-blue-300 m-4"
            onClick={() =>{
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>
          </div>
            <div className="search m-4 p-4 flex items-center rounded-lg">
            <button 
            className="px-4 py-1 bg-gray-300 " 
            onClick={() =>{const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                setListOfRestaurants(filterList);
            }}> 
                Top Rated Restaurants</button>
            </div>
        </div>
        <div className='flex flex-wrap justify-start items-start'>
  {filteredRestaurant.map((restaurant) => (
    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
      <RestaurantCard resData={restaurant} />
    </Link>
  ))}
</div>

      </div>
    )
  } 


  export default Body;