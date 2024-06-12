import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import ItemsList from "./ItemsList";

const ItemsCategory = ({ itemdata }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <div>
        <div className="w-full h-10  mt-4 py-5">
          <div
            onClick={handleClick}
            className=" font-bold flex justify-between border-b-2 cursor-pointer  px-5 py-4"
          >
            <span>
              {itemdata.title}({itemdata.itemCards.length})
            </span>
            <span>
              <FaArrowDown />
            </span>
          </div>
        </div>
        {showItems && <ItemsList Items={itemdata.itemCards} />}
      </div>
    </>
  );
};

export default ItemsCategory;
