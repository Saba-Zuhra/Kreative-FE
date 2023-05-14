import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../constants/data';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/features/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.products.find((p) => p._id === id);
  const urls = JSON.parse(product.image);
  const categoryTree = JSON.parse(product.product_category_tree)
  const categories = categoryTree[0].split(' >> ');
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between w-full">
          <div className="flex-shrink-0">
            <img className="h-96 w-96 object-cover" src={urls[0]} alt={product.product_name} />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.product_name}</h1>
            <p className="text-lg text-gray-500">{categories[1]}</p>
            <div className="mt-4">
              <Rating rating={product.product_rating} numReviews={product.numReviews} />
            </div>
            <p className="mt-4 text-2xl font-bold text-gray-900">${product.retail_price}</p>
            <div className="mt-4 flex items-center">
              <div className="mr-4">
                <p className="text-gray-500">Brand:</p>
                <p className="text-lg font-bold text-gray-900">{product.brand}</p>
              </div>
              {/* <div>
                <p className="text-gray-500">Availability:</p>
                {product.countInStock > 0 ? (
                  <p className="text-lg font-bold text-green-500">In Stock</p>
                ) : (
                  <p className="text-lg font-bold text-red-500">Out of Stock</p>
                )}
              </div> */}
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Description:</p>
              <p className="mt-2 text-lg text-gray-900">{product.description}</p>
            </div>
            <div className="mt-4">
              <button onClick={() => dispatch(addProduct(product))} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail