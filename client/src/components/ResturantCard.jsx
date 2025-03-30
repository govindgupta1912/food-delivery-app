


import { useContext } from "react";
import { CDN_URL } from "../utilites/constant";
import UserContext from "../utilites/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card w-[270px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 min-h-[420px]"
    >
      {/* Restaurant Image */}
      <img
        className="res-logo rounded-md h-40 w-60 mx-auto"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Restaurant Details */}
      <h3 className="font-bold py-2 text-lg text-center">{name}</h3>
      <h3 className="text-lg text-gray-600 truncate">{cuisines.join(", ")}</h3>
      <h3 className="text-lg text-gray-600 truncate">{areaName}</h3>
      <h3 className="text-lg text-gray-600">{avgRating} stars</h3>
      <h3 className="text-lg text-gray-600">{costForTwo} FOR TWO</h3>
      <h3 className="text-lg text-gray-600">{sla?.lastMileTravelString} minutes</h3>
    </div>
  );
};

export default ResturantCard;
