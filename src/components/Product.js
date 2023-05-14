import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/features/cartSlice";

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const urls = JSON.parse(product.image);

  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img
          src={urls[0]}
          className="card-img-top object-cover w-40 h-60"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title className="truncate ">{product.product_name}</Card.Title>
        </Link>
        {/* <Rating
          rating={product.product_rating}
          numReviews={product.numReviews}
        /> */}
        <Card.Text>${product.retail_price}</Card.Text>
        <Button onClick={() => dispatch(addProduct(product))}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
