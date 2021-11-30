import React from 'react'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import renderHTML from 'react-render-html';

function EditPostCard({editPost, handleChange, handleInputExcerpt, handleInputContent, handleFile}) {
    // console.log(editPost);
    let content;
    let excerpt;
    if (editPost.content) {
        content = editPost.content;
    }
    if (editPost.excerpt) {
        excerpt = editPost.excerpt;
    }
    
    // console.log(content);
    const handle = () => {
        console.log(editPost)
    }
    return (
        <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl font-semibold pb-4 text-grey">Title</h3>
            <input
                type="text"
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-green bg-blue-white placeholder-black placeholder-opacity-50 mb-4"
                placeholder="Your Post Title"
                name="title"
                value={editPost?.title}
                onChange={handleChange}
            />
            <h3 className="text-xl font-semibold pb-4 text-grey">Overview</h3>
            {/* <ReactQuill
                className="rounded-lg text-grey mb-4"
                name="excerpt"
                value={excerpt}
                onChange={handleInputExcerpt}
                placeholder="Your Overview Here"
            />
            <h3 className="text-xl font-semibold pb-4 text-grey">Content</h3>
            <ReactQuill
                // theme="snow"
                className="rounded-lg text-grey"
                name="content"
                value={content}
                onChange={handleInputContent}
                placeholder="Your Content Here"
            /> */}
            {/* <input 
                type="file"
                value={editPost.featured_image}
                onChange={handleFile}
                className="text-grey mt-8"
            /> */}
            <div className="mt-8">
                <input
                    type="checkbox"
                    name="featured_post"
                    checked={editPost?.featured_post}
                    // onClick={handleFeatured}
                />
                <label className="text-grey ml-2">Featured Post?</label>
            </div>
            <div className="mt-8">
                <button
                    type="button"
                    onClick={handle}
                    className="inline-flex px-7 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium font-serif border-green text-green bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Edit Post
                </button>
            </div>
        </div>
    )
}

export default EditPostCard
