import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import API from "../axios";
import { useNavigate } from "react-router-dom";

const CheckoutScreen = () => {
  const { products, total } = useSelector((state) => state.cart);
  console.log(products);
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    try {
      await API.post("/buy", {
        products: products,
      });
      toast.success("Order placed successfully, you have received the email");
      navigate("/");
    } catch (e) {
      toast.error(e.response.data);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="flex flex-col sm:flex-row mb-8">
          <div className="flex-1 sm:mr-8">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={info.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={info.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={info.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country"
                  value={info.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="font-bold">
                    {item.product_name} x {item.quantity}
                  </span>
                  <span className="font-bold">
                    ${(item.retail_price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between items-center">
                <span className="font-bold">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={placeOrder}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutScreen;
