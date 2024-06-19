import React from "react";
import {useDispatch} from "react-redux"
import { CLOUDINARY__IMAGE_PREFIX } from "./utilis";
import { addItem } from "./utilis/cartSlice";

const ItemsList = ({ Items }) => {

  const dispatch = useDispatch()

  const handleAddItems = () => {
     dispatch(addItem())
  }
  return (
    <div className="mt-8">
      {Items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 mx-2 border-gray-100 border-b-2 text-left"
        >
          <div className="flex justify-between px-3 py-2">
            <div className="w-[50rem]">
              <h3 className="font-bold text-gray-700">
                {item?.card?.info?.name}
              </h3>
              <div>₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice/100}</div>

              <div
                className="text-gray-400"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="w-28 h-24 mx-4 relative">
              <div
                className="w-full h-full"
                style={{ borderRadius: "20px", overflow: "hidden" }}
              >
                <img
                  className="w-full h-full"
                  src={`${CLOUDINARY__IMAGE_PREFIX}${item?.card?.info?.imageId}`}
                  alt="Menu Item"
                />
              </div>
              <div className="border ">
                <button className="absolute bottom-[-12px]  left-0 right-0 mx-auto border rounded-lg border-gray-200 bg-white   text-green-500 font-bold uppercase"
                onClick={handleAddItems}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
