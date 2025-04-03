import { CDN_URL } from "../utils/constants";

const Restaurant = ({ name, cuisines, rating, time, cost, delivery, cloudinaryImageId }) => {
    return (
        <div className="restaurant-card">
            <img
                className="restaurant-image"
                src={CDN_URL + cloudinaryImageId}
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

export default Restaurant;