import React from 'react'

const BiographyScreen = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            MarketLab is an innovative and trendy e-commerce website that offers a wide range of products for fashion-conscious shoppers. Our website is built using React, a popular JavaScript library for building user interfaces, and Tailwind CSS, a modern CSS framework for creating responsive and stylish web designs.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="w-full md:w-1/2 lg:w-3/12 p-4 shadow bg-gray-100 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Founding</h3>
              <p className="text-gray-600">
                MarketLab was founded in 2020 by a group of fashion enthusiasts who saw a gap in the market for an online store that offers trendy and fashionable clothing and accessories for men and women. The founders, John and Sarah, both have a background in web development and a passion for fashion, which inspired them to create an e-commerce website that combines their technical expertise with their love for fashion.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/12 p-4 shadow bg-gray-100 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Range</h3>
              <p className="text-gray-600">
                At MarketLab, we offer a carefully curated collection of clothing and accessories that are carefully selected to cater to the latest fashion trends. Our product range includes trendy clothing items such as dresses, tops, bottoms, outerwear, and accessories such as bags, shoes, and jewelry. We source our products from reputable and ethical suppliers to ensure that our customers receive high-quality items that are both fashionable and sustainable.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/12 p-4 shadow bg-gray-100 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User Experience</h3>
              <p className="text-gray-600">
                We place a strong emphasis on providing an exceptional user experience for our customers. Our website is designed with a clean and modern interface, making it easy for users to navigate and find the products they are looking for. The use of React allows for smooth and seamless interactions, providing a fast and responsive shopping experience. The Tailwind CSS framework is utilized to create visually appealing designs that are optimized for various screen sizes, making our website accessible and user-friendly across different devices, including desktop computers, tablets, and smartphones.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/12 p-4 shadow bg-gray-100 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Features</h3>
              <p className="text-gray-600">
                MarketLab offers a range of features that enhance the online shopping experience for our customers. Some of our notable features include:
                <ul className="list-disc pl-4 text-gray-600">
                  <li>Easy and secure checkout process</li>
                  <li>Multiple payment options, including credit/debit cards and PayPal</li>
                  <li>Product reviews and ratings to help customers make informed purchasing decisions</li>
                  <li>Wishlist functionality for users to save their favorite items for future purchase</li>
                  <li>Responsive customer support via live chat and email</li>
                  <li>Order tracking to keep customers updated on the status of their purchases</li>
                </ul>
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-8">
            At MarketLab, we are committed to providing our customers with the latest fashion trends, excellent user experience, and top-notch customer service. We strive to continuously improve and expand our product offerings, while keeping our website up-to-date with the latest web development technologies, such as React and Tailwind CSS, to provide a seamless and enjoyable shopping experience for our customers.
          </p>
        </div>
      </section>
    </>
  )
}

export default BiographyScreen