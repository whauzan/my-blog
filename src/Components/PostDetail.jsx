import Today from '@mui/icons-material/Today'
import moment from 'moment'
import React from 'react'
import renderHTML from 'react-render-html'

function PostDetail({ post }) {
    // console.log(post);
    return (
        <div className="bg-blue-light shadow-2xl rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
                <img src={post?.featured_image} alt={post.title} className="object-top h-full w-full rounded-lg" />
            </div>
            <div className="px-4 lg:px-8">
                <div className="flex items-center mb-8 w-full">
                    <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                        <p className="inline align-middle text-grey ml-2 text-lg">{post.author_info?.name}</p>
                    </div>
                    <div className="font-medium text-grey">
                        <Today className="h-6 w-6 inline mr-2 text-grey" fill="none" viewBox="0 0 24 24"></Today>
                        <span className="align-middle">{moment(post?.created_at).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <h1 className="mb-8 text-3xl font-semibold text-grey">{post.title}</h1>
                {post.content ? <p className="text-grey-dark">{renderHTML(post.content)}</p> : null}
            </div>
        </div>
    )
}

export default PostDetail
