import React from 'react'
import { PostCard, Categories, PostWidget, Header } from '../Components';
import image1 from '../img/deployment.png'

const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing',
    image: {image1},
    slug: 'react-testing',
    author: {
        name: 'Whauzan'
    },
    createdAt: 'August 08, 2021'
  },
  {
    title: 'React Routing',
    excerpt: 'Learn React Routing',
    image: {image1},
    slug: 'react-routing',
    author: {
        name: 'Whauzan'
    },
    createdAt: 'August 08, 2021'
  }
]

function Home() {
    return (
        <>
        <Header />
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post) => (
                        <PostCard post={post} key={post.title} />
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
