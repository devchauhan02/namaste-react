import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="food_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="Food App Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav_list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurant = ({ name, cuisines, rating, time, cost, delivery, cloudinaryImageId }) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt={name}
      />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p className="cuisines">{cuisines}</p>
        <div className="restaurant-details">
          <span className="rating">⭐ {rating}</span>
          <span className="time">⏳ {time} MINS</span>
          <span className="cost">💰 {cost} FOR TWO</span>
        </div>
        <p className="free-delivery">{delivery}</p>
      </div>
    </div>
  );
};

const restaurantData = [
  {
    name: "Meghana Foods",
    cuisines: "Biryani, Andhra, South Indian, North Indian, Chinese, Seafood",
    rating: 4.4,
    time: 38,
    cost: "₹500",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/4ea243cc-2991-446b-8309-62afc7ac5d04_807690.jpg"
  },
  {
    name: "Shree Rajdhani",
    cuisines: "Rajasthani, Gujarati, Indian",
    rating: 4.5,
    time: 45,
    cost: "₹600",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "d71c3b549dba22349e1d36d1b2c1b3b3"
  },
  {
    name: "Tandoor & More",
    cuisines: "North Indian, Mughlai, Tandoori",
    rating: 4.2,
    time: 30,
    cost: "₹450",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "ew3n5gi5xzgxnqwvicsp"
  },
  {
    name: "Sushi House",
    cuisines: "Japanese, Sushi, Asian",
    rating: 4.7,
    time: 25,
    cost: "₹700",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "jkuj5aui7wwmwc0eidog"
  },
  {
    name: "Pizza Palace",
    cuisines: "Pizza, Italian, Fast Food",
    rating: 4.3,
    time: 40,
    cost: "₹350",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "5e19832da032dd69547565e27104706f"
  },
  {
    name: "Burger King",
    cuisines: "Burgers, Fast Food, American",
    rating: 4.0,
    time: 20,
    cost: "₹300",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "nrqjhlsss9iadlaaqrqm"
  },
  {
    name: "The Pasta Bowl",
    cuisines: "Italian, Pasta, Salad",
    rating: 4.6,
    time: 35,
    cost: "₹550",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e21d1285-b7ff-4233-a6d5-f442916bab5c_651214.JPG"
  },
  {
    name: "Chai Sutta Bar",
    cuisines: "Chai, Snacks, Fast Food",
    rating: 4.1,
    time: 15,
    cost: "₹200",
    delivery: "🚚 FREE DELIVERY",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/4ea243cc-2991-446b-8309-62afc7ac5d04_807690.jpg"
  }
];

const Body = () => {
  

  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((restaurant, index) => (
          <Restaurant
            key={index}
            name={restaurant.name}
            cuisines={restaurant.cuisines}
            rating={restaurant.rating}
            time={restaurant.time}
            cost={restaurant.cost}
            delivery={restaurant.delivery}
            cloudinaryImageId={restaurant.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
