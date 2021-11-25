import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Categories, Header, PostWidget, PostDetail, CommentForm, Comment } from '../Components'
import useGetPostDetail from '../Hooks/useGetPostDetail'

function PostDetails() {
    let { slug } = useParams();
    // console.log(slug);
    const { errorGetPostDetail, loadingGetPostDetail, dataGetPostDetail } = useGetPostDetail(slug);
    const [dataPostDetail, setPostDetail] = useState([]);
    const [dataCategory, setCategory] = useState([]);

    
    // console.log(dataPostDetail);
    
    useEffect(() => {
        if (dataGetPostDetail) {
            setPostDetail(dataGetPostDetail.post[0]);
        }
        if (dataPostDetail) {
            setCategory(dataPostDetail.category_posts);
        }
    }, [dataGetPostDetail, dataPostDetail])

    // console.log(dataCategory[0]);

    return (
        <>
        <Header />
        <div className="container mx-auto px-10 mb-8 relative top-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={dataPostDetail}/>
                    <CommentForm slug={dataPostDetail.slug}/>
                    <Comment slug={dataPostDetail.slug}/>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-32">
                        <PostWidget slug={dataPostDetail.slug} categories={dataCategory?.map((item) => item.category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostDetails
