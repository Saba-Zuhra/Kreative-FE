import { FaStar } from "react-icons/fa";
function Rating({ rating, numReviews }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }
  return (
    <div className="flex items-center">
      <span className="text-gray-600 mr-2">({rating})</span>
      {stars}
      <span className="ml-2 text-gray-600">{numReviews} reviews</span>
    </div>
  );
}
export default Rating;
