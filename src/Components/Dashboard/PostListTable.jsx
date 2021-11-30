import React from 'react'
import { Link } from 'react-router-dom'

function PostListTable({post, hapusPost}) {
    return (
        <table className="min-w-full divide-y divide-gray-200 border-grey border shadow-lg">
            <thead className="bg-blue-white border-none">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-green uppercase tracking-wider border-none"
                    >
                        Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-green uppercase tracking-wider "
                    >
                        Comment
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-green uppercase tracking-wider"
                    >
                        Category
                    </th>
                    <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-green uppercase tracking-wider"
                    >
                        Featured
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-blue-light divide-y divide-grey">
                {post.map((item, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={item.featured_image} alt="" />
                                </div>
                                <Link to={`/post/${item.slug}`} target="_blank" >
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-grey">{item.title}</div>
                                    </div>
                                </Link>
                            </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                            <div className="text-sm text-grey">{item.comments_post.length}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {item.category_posts.map((categoryPost, index) => (
                                <span key={index} className="px-2 mr-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {categoryPost.category.name}
                                </span>
                            ))}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm items-center justify-center font-semibold text-grey">{item.featured_post ? "True" : "False"}</td>
                        <td className="pr-3 pl-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/posts/edit/${item.slug}`}>
                                <span className="text-green hover:text-green-dark">
                                    Edit
                                </span>
                            </Link>
                        </td>
                        <td className="pl-2 pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-green hover:text-green-dark" onClick={() => hapusPost(item.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PostListTable
