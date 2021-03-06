import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { useGetRecentPost, useGetSimilarPost } from '../Hooks';
import { PostWidgetSkeleton } from '.';
import { Page500 } from '../Pages';

function PostWidget({ categories, slug }) {
    const [relatedPost, setRelatedPost] = useState([]);
    const { errorGetRecentPost, loadingGetRecentPost, dataGetRecentPost } = useGetRecentPost();
    const { errorGetSimilarPost, loadingGetSimilarPost, dataGetSimilarPost } = useGetSimilarPost(categories, slug);

    useEffect(() => {
        if (dataGetRecentPost) {
            setRelatedPost(dataGetRecentPost.post);
        }
        if (dataGetSimilarPost) {
            setRelatedPost(dataGetSimilarPost.post);
        }
    }, [dataGetRecentPost, dataGetSimilarPost])

    return (
        <>
        {errorGetRecentPost && errorGetSimilarPost ? <Page500 />
        :
            <>
            {loadingGetRecentPost || loadingGetSimilarPost ? <PostWidgetSkeleton />
            :
            <div className="bg-blue-light shadow-2xl rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-grey mb-8 border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
                {relatedPost?.map((item) => (
                    <div key={item.title} className="flex items-center w-full mb-4">
                        <div className="w-16 flex-none">
                            <img alt={item.title} height="60px" width="60px" className="align-middle rounded-full" src={item.featured_image} />
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-grey-dark text-xs">{moment(item.created_at).format('MMM DD, YYYY')}</p>
                            <Link to={`/post/${item.slug}`} key={item.title} className="text-md text-grey">
                                {item.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            }
            </>
        }
        </>
    )
}

export default PostWidget
