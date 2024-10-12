import ResturantCard from "./ResturantCard";
import restaurantList from "../utilites/apiData";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilites/useOnlineStatus";
import UserContext from "../utilites/UserContext";

const Body = () => {
  const [list, setlist] = useState([]);
  const [filter, setfilter] = useState([]);
  const [search, setsearch] = useState();

  const { loggedInUser, setUserName, classb } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonE = await data.json();
    console.log(jsonE);
    setlist(
      jsonE?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilter(
      jsonE?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = useOnlineStatus();
  if (status === false)
    return <h1 className="text-center mt-10 text-red-600">You are offline. Check your internet connection.</h1>;

  if (list && list.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body mx-auto p-4">
      {/* Search Bar & Filters */}
      <div className="flex flex-wrap justify-center space-x-4 my-10">
        <div className="search flex items-center space-x-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search restaurants"
            value={search}
            onClick={(e) => setsearch(e.target.value)}
          />
          <button
            onClick={() => {
              const filterlist = list.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              setfilter(filterlist);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-300"
          onChange={() => {
            const filterlist = list.filter((res) => res.info.avgRating > 4.4);
            setfilter(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filter.map((res) => {
          return (
            <Link key={res?.info?.id} to={"/restaurants/" + res.info.id}>
              <ResturantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
