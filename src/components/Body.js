import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listRest, setListRest] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setListRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // let listRest = [
  //   {
  //     id: "11091",
  //     name: "Domino's Pizza",
  //     cloudinaryImageId: "7abb5ebe9ea3e0bf5e9edc241d1cba32",
  //     locality: "Mehdipatnam",
  //     areaName: "Mehdipatnam",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Pizzas", "Italian"],
  //     avgRating: 4.2,
  //     avgRatingString: "4.2",
  //     sla: { slaString: "30-40 mins" },
  //   },
  //   {
  //     id: "11092",
  //     name: "Papa John's",
  //     cloudinaryImageId: "7abb5ebe9ea3e0bf5e9edc241d1cba32",
  //     locality: "Banjara Hills",
  //     areaName: "Banjara Hills",
  //     costForTwo: "₹450 for two",
  //     cuisines: ["Pizzas"],
  //     avgRating: 3.8,
  //     avgRatingString: "3.8",
  //     sla: { slaString: "30-40 mins" },
  //   },
  //   {
  //     id: "11093",
  //     name: "Ovenstory",
  //     cloudinaryImageId: "7abb5ebe9ea3e0bf5e9edc241d1cba32",
  //     locality: "Banjara Hills",
  //     areaName: "Banjara Hills",
  //     costForTwo: "₹450 for two",
  //     cuisines: ["Pizzas"],
  //     avgRating: 4.0,
  //     avgRatingString: "4.0",
  //     sla: { slaString: "30-40 mins" },
  //   },
  // ];

  if (listRest == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            listRest = listRest.filter((res) => res.info.avgRating > 4.2);
            setListRest(listRest);
          }}
        >
          4+ Star Rated ★
        </button>
      </div>
      <div className="res-container">
        {listRest.map((retaurant) => (
          <RestaurantCard key={retaurant.info.id} resData={retaurant} />
        ))}

        {/* <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} /> */}
      </div>
    </div>
  );
};

export default Body;
