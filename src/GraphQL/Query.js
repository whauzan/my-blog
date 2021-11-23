import { gql } from '@apollo/client'

export const LOAD_POST = gql`
    query getPosts {
        post {
            content
            excerpt
            featured_image
            featured_post
            id
            id_author
            slug
            title
            author_info {
            name
            }
            created_at
            category_posts {
                category {
                    name
                    slug
                }
            }
        }
    }
`

export const LOAD_RECENT_POST = gql`
    query getRecentPost {
        post(order_by: {created_at: asc}, limit: 3) {
            title
            created_at
            slug
            featured_image
        }
    }
`

export const LOAD_SIMILAR_POST = gql`
    query getSimilarPost($slug: String!, $categories: [String!]) {
        post(where: {_not: {slug: {_eq: $slug}, _and: {category_posts: {category: {slug: {_in: $categories}}}}}}, limit: 3) {
            title
            featured_image
            created_at
            slug
        }
    }
`

export const LOAD_CATEGORIES = gql`
    query getCategories {
        category {
            name
            slug
        }
    }
`