import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { sla } = slaString;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: { slaString },
  } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="food" />
      <h4>{name}</h4>
      <h5>
        <FontAwesomeIcon className="res-icon" icon={faStar} /> {avgRatingString}{" "}
        Stars
      </h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};
export default RestaurantCard;
