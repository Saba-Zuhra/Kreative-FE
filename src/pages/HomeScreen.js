import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import data from "../constants/data";
import { useEffect, useState } from "react";
import API from "../axios";
import { toast } from "react-toastify";

function HomeScreen() {
  const [products, setProducts] = useState();

  useEffect(() => {
    // Sleep function to simulate network latency
    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    const fetchRecommendations = async () => {
      const response = await API.get("/recommendation");
      setProducts(response.data);
    };
    const fetchProducts = async () => {
      const response = await API.get("/product");
      setProducts(response.data);
    };

    sleep(1000).then(() => {
      Promise.resolve(fetchRecommendations())
        .then(() => {
          console.log("Recommendations fetched");
        })
        .catch((err) => {
          toast.error(err.response.data);
          Promise.resolve(fetchProducts())
            .then(() => {
              console.log("Products fetched");
            })
            .catch(() => {
              setProducts(data.products);
            });
        });
    });
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {
          <Row>
            {products?.map((product) => (
              <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}

export default HomeScreen;
