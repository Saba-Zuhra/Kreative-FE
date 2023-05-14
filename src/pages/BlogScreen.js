import React from 'react'
import BlogCard from '../components/BlogCard';

const BlogScreen = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center py-10">
      <div className="max-w-xl bg-white rounded-md shadow-md px-10 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to our Ecommerce Blog</h1>
        <p className="text-gray-600 mb-6">Stay up-to-date with the latest trends, news, and tips about ecommerce.</p>
        <div className="flex justify-center items-center">
          <img src="https://via.placeholder.com/150" alt="Blog Author" className="w-12 h-12 rounded-full mr-4"/>
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-gray-600">Ecommerce Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl bg-white mt-10 rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlogCard image={"https://beeketing.com/blog/wp-content/uploads/2021/05/berkeley-communications-WEDDt-u3q3o-unsplash-1-450x166.jpg"} title={"11 Best Practices to Provide Excellent Customer Service on Social Media"} short_description={"Check out our latest blog post for 10 tips on how to achieve success in your ecommerce business."} url={"https://beeketing.com/blog/provide-excellent-customer-service/"}/>
          <BlogCard image={"https://beeketing.com/blog/wp-content/uploads/2021/05/business-strategy-450x166.jpg"} title={"An Effective Business Strategy That Converts in 2021"} short_description={"Discover the latest trends in ecommerce and how they can impact the future of online retail."} url={"https://beeketing.com/blog/business-strategy/"}/>
        </div>
      </div>
    </div>
  )
};

export default BlogScreen;
