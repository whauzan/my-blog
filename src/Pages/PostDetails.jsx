import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Page500 } from '.';
import { Categories, Header, PostWidget, PostDetail, CommentForm, Comment, PostDetailCardSkeleton, AdjacentPostSkeleton } from '../Components'
import useGetPostDetail from '../Hooks/useGetPostDetail'
import AdjacentPosts from '../Section/AdjacentPosts';

function PostDetails() {
    let { slug } = useParams();
    const { errorGetPostDetail, loadingGetPostDetail, dataGetPostDetail } = useGetPostDetail(slug);
    const [dataPostDetail, setPostDetail] = useState([]);
    const [dataCategory, setCategory] = useState([]);
    
    useEffect(() => {
        if (dataGetPostDetail) {
            setPostDetail(dataGetPostDetail.post[0]);
        }
        if (dataPostDetail) {
            setCategory(dataPostDetail.category_posts);
        }
    }, [dataGetPostDetail, dataPostDetail])

    return (
        <>
        {errorGetPostDetail ? <Page500 />
        :
            <>
            <Header />
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        {loadingGetPostDetail ?
                            <>
                            <PostDetailCardSkeleton />
                            <AdjacentPostSkeleton />
                            <CommentForm />
                            </>
                        :
                            <>
                            <PostDetail post={dataPostDetail}/>
                            <AdjacentPosts created_at={dataPostDetail.created_at} />
                            <CommentForm slug={dataPostDetail.slug}/>
                            <Comment post={dataPostDetail.comments_post}/>
                            </>
                        }
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="lg:sticky top-32">
                            <PostWidget slug={dataPostDetail.slug} categories={dataCategory?.map((item) => item.category.slug)} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
            </>
        }
        </>
    )
}

export default PostDetails
