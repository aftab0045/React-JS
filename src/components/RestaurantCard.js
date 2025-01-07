import { CDN_URL } from "../utils/contants";

const RestaurantCard = ({ resData = { info: {} } }) => {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo' alt='res-logo' src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name || "N/A"}</h3>
            <h4>{resData.info.cuisines?.join(", ") || "N/A"}</h4>
            <h4>{resData.info.avgRating || "N/A"}</h4>
            <h4>{resData.info.costForTwo || "N/A"}</h4>
            <h4>{resData.info.deliveryTime } Minutes</h4>
        </div>
    );
};

export default RestaurantCard;