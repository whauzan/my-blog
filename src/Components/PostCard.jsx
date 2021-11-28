import React from 'react'
import { Link } from 'react-router-dom'
import Today from '@mui/icons-material/Today';
import moment from 'moment';
import renderHTML from 'react-render-html'

const PostCard = ({ post }) => {
    return (
        <div className="bg-blue-light shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featured_image} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
            </div>
            <h1 className="transition duration-700 text-grey text-center mb-8 cursor-pointer hover:text-green text-3xl font-semibold">
                <Link to={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <p className="inline align-middle text-grey ml-2 text-lg">{post.author_info.name}</p>
                </div>
                <div className="font-medium text-grey">
                    <Today className="h-6 w-6 inline mr-2 text-grey" fill="none" viewBox="0 0 24 24"></Today>
                    <span className="align-middle">{moment(post.created_at).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p className="text-center text-lg text-grey-dark font-normal px-4 lg:px-20 mb-8">
                {renderHTML(post.excerpt)}
            </p>
            <div className="text-center">
                <Link to={`/post/${post.slug}`}>
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium font-serif border-green text-green bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue Reading</button>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
