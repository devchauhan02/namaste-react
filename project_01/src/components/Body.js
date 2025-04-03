import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//never keep hard coded data(like below restaurantData) in your component folder place it in some folder like utilities, common etc

const Body = () => {
    //whenever a state variable update react triggersa reconsiliation cycle (re-renders the component)
    const [listRest, setListRest] = useState([])
    const [searchTxt, setSearchText] = useState("")
    const [filterAllRestraunt, setFilterAllRestraunt] = useState([])


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (!restaurants) {
            console.error("Unexpected API structure. No restaurants found.");
            return;
        }

        setListRest(restaurants);
        setFilterAllRestraunt(restaurants);
    };

    const filterTopRated = () => {
        const filteredList = listRest.filter((res) => res.info.avgRating > 4.2);
        setFilterAllRestraunt(filteredList);
    };

    const filterRestaurants = () => {
        const filteredList = listRest.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
        setFilterAllRestraunt(filteredList);
    };

    return listRest.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="searchBar">

                <input type="text" className="input" value={searchTxt} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />

                <button className="search_btn" 
                onClick={filterRestaurants}>Search</button>

                <button className="top_rated" 
                onClick={filterTopRated}>Top Rated Restaurant</button>
            </div>

            <div className="restaurant-list">
                {filterAllRestraunt.map((restaurant) => (
                    <Restaurant
                        key={restaurant.info.id}
                        name={restaurant.info.name}
                        cuisines={restaurant.info.cuisines}
                        rating={restaurant.info.avgRating}
                        time={restaurant.info.sla?.deliveryTime}
                        cost={restaurant.info.costForTwoString}
                        delivery={restaurant.info.feeDetails?.message || "No Delivery Fee"}
                        cloudinaryImageId={restaurant.info.cloudinaryImageId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body; 