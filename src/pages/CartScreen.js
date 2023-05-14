import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const { products, total } = useSelector((state) => state.cart);
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="flex flex-col items-center">
              <MdRemoveShoppingCart className="text-9xl text-gray-400 mb-8" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <Link to="/" className="text-lg text-blue-500 hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="md:flex md:items-start md:justify-between">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
                {products.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Subtotal ({products.reduce((acc, item) => acc + item.quantity, 0)}) items</h2>
                  <p className="text-lg font-bold text-gray-900 mb-4">${total.toFixed(2)}</p>
                  <Link to="/checkout" className="block no-underline w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md text-center hover:bg-blue-600">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartScreen