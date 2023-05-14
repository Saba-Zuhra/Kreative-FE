import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../store/features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const urls = JSON.parse(item.image);
  const categoryTree = JSON.parse(item.product_category_tree);
  const categories = categoryTree[0].split(" >> ");
  return (
    <>
      <div className="flex items-center py-6 border-b border-gray-200">
        <img
          src={urls[0]}
          alt={item.product_name}
          className="w-24 h-24 object-contain rounded-lg mr-6"
        />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900">
            {item.product_name}
          </h2>
          <p className="text-sm text-gray-500">Brand: {item.brand}</p>
          <p className="text-sm text-gray-500">Category: {categories[1]}</p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            ${item.retail_price.toFixed(2)}
          </p>
          <div className="flex items-center mt-2">
            <button
              onClick={() => dispatch(decreaseQuantity(item))}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 mr-2"
            >
              <AiOutlineMinus className="w-4 h-4" />
            </button>
            <span className="text-lg font-bold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(increaseQuantity(item))}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 ml-2"
            >
              <AiOutlinePlus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
