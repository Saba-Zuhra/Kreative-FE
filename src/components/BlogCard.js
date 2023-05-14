import React from 'react'

const BlogCard = ({ title, image, url, short_description }) => {
  return (
    <div className="bg-gray-200 rounded-md overflow-hidden">
      <img src={image} alt="Blog Post" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{short_description}</p>
        <a href={url} target='_blank' rel='noopener noreferrer' className="text-blue-500 mt-2 inline-block">Read More</a>
      </div>
    </div>
  )
}

export default BlogCard