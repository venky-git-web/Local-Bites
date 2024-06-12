import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_URL} from "./utilis";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [restoMenu, setRestoMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = `${SWIGGY_MENU_URL}${id}`;
      const response = await fetch(url);
      const json = await response.json();
      setRestoMenu(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return restoMenu;
};

export default useRestaurantMenu;
