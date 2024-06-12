import React from "react";
import { FaStar } from "react-icons/fa";
import { CLOUD_URL } from "./utilis"; // Corrected import

const RestaurantCards = (props) => {
    const {resdata} = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    slaString,
  } = resdata?.info || {};

  return (
    <div key={resdata?.info?.id} className="w-[200px] h-[300px] cursor-pointer bg-gray-300 mx-2 rounded-md transition duration-300 ease-in-out transform hover:shadow-lg">
      {/* Displaying restaurant image */}
      <div className="w-full h-34 p-1 rounded-md flex justify-center items-center">
        <img
          className="object-cover w-full h-32 rounded-md"
          src={`${CLOUD_URL}${cloudinaryImageId}`}
          alt="Food"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./src/assets/image-not-found.png"; // Ensure correct path to fallback image
          }}
        />
      </div>
      <div className="m-2">
        {/* Displaying restaurant details */}
        <h3
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </h3>
        <h4
          className="mb-1"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cuisines ? cuisines.join(", ") : ""}
        </h4>
        {/* Displaying rating */}
        <div className="flex items-center gap-1 w-14 rounded-lg">
          <div className="flex w-5 h-5 rounded-full bg-green-500 p-1 items-center">
            <FaStar
              style={{
                color: "white",
                width: "13px",
                height: "12px",
              }}
            />
          </div>
          <h4>{avgRating}</h4>
        </div>
        <h4 className="mt-1">{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCards;
