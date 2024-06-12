import useRestaurantMenu from "./useRestaurantMenu";
import ItemsCategory from "./ItemsCategory";

const RestaurantMenu = () => {
  const restoMenu = useRestaurantMenu();

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingsString,
    sla,
    feeDetails,
  } = restoMenu?.cards[2]?.card?.card.info || {};

  const categories =
    restoMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="container mx-auto">
      <div className=" " style={{ marginLeft: "30px", marginRight: "30px" }}>
        <div>
          <h2 className="font-bold text-lg mb-4 ">{name}</h2>
        </div>
        <div className="border-2 rounded-lg px-4 py-2">
          <div className="flex font-semibold font-sans gap-2">
            <div>{avgRating} </div>
            <div>{totalRatingsString} </div>
            <div>{costForTwoMessage}</div>
          </div>
          <div className="text-orange-500 font-medium text-sm my-1">
            {cuisines}
          </div>
          <div className="">
            <div className="flex gap-2 my-1">
              <div className="font-medium">Outlet</div>
              <div>{locality}</div>
            </div>
            <div>{sla?.slaString}</div>
          </div>
          <div className="flex gap-1 text-gray-500 font-light my-1">
            <div>{sla?.lastMileTravelString} </div>
            <div>| {feeDetails?.amount / 100} Delivery fee will apply</div>
          </div>
        </div>

        <div>
          <h2 className="mt-6 font-bold text-sm text-center text-gray-500">
            ꧁༺MENU༻꧂
          </h2>
        </div>

        {categories &&
          categories.map((category) => (
            <ItemsCategory
              key={category?.card?.card.title}
              itemdata={category?.card?.card}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
