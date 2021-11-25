import moment from 'moment'
import React from 'react'

function Comment({ post }) {
    return (
        <>
        {post?.length > 0 && (
            <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-grey">{post?.length} Comment</h3>
                {post.map((item, index) => (
                    <div key={index} className="border-b border-grey-dark mb-4 pb-4">
                        <p className="mb-4 text-grey">
                            <span className="font-semibold text-grey">{item.name}</span>
                            {' '}
                            on
                            {' '}
                            {moment(item.created_at).format('MMM DD, YYYY')}
                        </p>
                        <p className="whitespace-pre-line text-grey-dark w-full">{item.comment}</p>
                    </div>
                ))}
            </div>
        )}
        </>
    )
}

export default Comment
