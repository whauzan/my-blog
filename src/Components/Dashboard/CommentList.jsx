import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

function CommentList({item}) {
    return (
        <div>
            <div className="border-b border-grey-dark mb-4 pb-4">
                <p className="mb-4 font-semibold text-grey-dark">
                    <span>{item.name}</span>
                    {' '}
                    on
                    {' '}
                    {<Link to={`/post/${item.post_comment.slug}`}>
                        {item.post_comment.title}
                    </Link>}
                    {' '}
                    -
                    {' '}
                    {moment(item.created_at).fromNow()}
                </p>
                <p className="whitespace-pre-line text-grey w-full">{item.comment}</p>
            </div>
        </div>
    )
}

export default CommentList
