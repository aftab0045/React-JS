import { CDN_URL } from "../utils/contants";

const RestaurantCard = ({ resData = { info: {} } }) => {
    return (
        <div
  className="w-60 m-4 p-4 shadow-2xl flex flex-col justify-between bg-gray-50 hover:bg-gray-200"
  style={{
    height: "300px",
    overflow: "hidden", // Prevent content from spilling out
    borderRadius: "8px", // Optional: Rounded corners for a better look
  }}
>
  <img
    className="w-full h-32 object-cover rounded-md mb-2"
    alt="res-logo"
    src={CDN_URL + resData.info.cloudinaryImageId}
  />
  <h3 className="text-lg font-bold truncate">{resData.info.name || "N/A"}</h3>
  <h4 className="text-sm text-gray-600 truncate">{resData.info.cuisines?.join(", ") || "N/A"}</h4>
  <h4 className="text-sm text-gray-600">{resData.info.avgRating || "N/A"}</h4>
  <h4 className="text-sm text-gray-600">{resData.info.costForTwo || "N/A"}</h4>
  <h4 className="text-sm text-gray-600">{resData.info.deliveryTime} Minutes</h4>
</div>

    );
};




export default RestaurantCard;