import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "./utilis"; // Corrected import
import RestAvilable from "./RestAvilable";

const Hero = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResto, setFilterResto] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL);
      const json = await response.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestoList(restaurants);
      setFilterResto(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTopRestaurants = () => {
    const topRestaurants = restoList.filter((res) => res.info.avgRating > 4);
    setFilterResto(topRestaurants);
  };

  const firstTwelveRestaurants = filterResto.slice(0, 12);
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h3>Your offline please check your internet connection</h3>;
  }

  return restoList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-full">
        <div className="sm:w-[15rem] lg:w-[30rem] relative mx-auto mt-4">
          <input
            type="text"
            value={searchText}
            placeholder="Search For Food And Restaurant"
            className="w-full border pl-5 pr-5 py-2 rounded-full border-gray-300 focus:border-green-500 focus:outline-none"
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredRestaurant = restoList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilterResto(filteredRestaurant);
            }}
          />
          <button
            className="absolute bg-white top-1/2 transform -translate-y-1/2 right-3 pl-0.5 text-gray-500"
            onClick={() => {
              const filteredRestaurant = restoList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResto(filteredRestaurant);
            }}
          >
            <BsSearch
              style={{ width: "20px", height: "20px", marginLeft: "5px" }}
            />
          </button>
        </div>
      </div>

      <div>
        <button
          className="ml-12 mt-4 border-2 border-gray-300 rounded-lg px-2 py-0.5"
          onClick={handleTopRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="my-5 mx-4 flex flex-wrap justify-center items-center gap-2">
        {firstTwelveRestaurants.map((RestData) => (
          <Link
            key={RestData?.info?.id}
            to={`/restaurants/${RestData?.info?.id}`}
          >
            <RestaurantCards resdata={RestData} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Hero;
