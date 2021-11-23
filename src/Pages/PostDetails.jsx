import React from 'react'
import { Categories, Header, PostWidget, PostDetail, CommentForm, Comment } from '../Components'

function PostDetails() {
    return (
        <>
        <Header />
        <div className="container mx-auto px-10 mb-8 relative top-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail />
                    <CommentForm />
                    <Comment />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-32">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostDetails
