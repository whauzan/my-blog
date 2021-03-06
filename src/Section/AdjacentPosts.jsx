import React, { useEffect, useState } from 'react'
import { AdjacentPostCard, AdjacentPostSkeleton } from '../Components';
import { useGetNextPost, useGetPreviousPost } from '../Hooks';
import { Page500 } from '../Pages';

function AdjacentPosts( created_at ) {
    const { errorGetPreviousPost, loadingGetPreviousPost, dataGetPreviousPost } = useGetPreviousPost(created_at);
    const { errorGetNextPost, loadingGetNextPost, dataGetNextPost } = useGetNextPost(created_at);
    
    const [previousPost, setPreviousPost] = useState([]);
    const [nextPost, setNextPost] = useState([]);

    useEffect(() => {
        if (dataGetPreviousPost || dataGetNextPost) {
            setPreviousPost(dataGetPreviousPost?.post[0]);
            setNextPost(dataGetNextPost?.post[0])
        }
    }, [dataGetPreviousPost, dataGetNextPost])

    return (
        <>
        {errorGetNextPost || errorGetPreviousPost ? <Page500 />
        :
            <>
            {loadingGetNextPost || loadingGetPreviousPost ? 
                <AdjacentPostSkeleton />
            :
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
                {previousPost? 
                    <div className={`${nextPost ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
                        <AdjacentPostCard post={previousPost} position="LEFT" />
                    </div>
                : null }
                {nextPost ?
                    <div className={`${previousPost ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
                        <AdjacentPostCard post={nextPost} position="RIGHT" />
                    </div>
                : null}
            </div>
            }
            </>
        }
        </>
    )
}

export default AdjacentPosts
