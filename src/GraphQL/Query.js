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
            id
            name
            slug
        }
    }
`

export const LOAD_POST_DETAIL = gql`
    query getPostDetail($slug: String!) {
        post(where: {slug: {_eq: $slug}}) {
            content
            created_at
            excerpt
            featured_image
            featured_post
            slug
            title
            category_posts {
                category {
                    id
                    name
                    slug
                }
            }
            author_info {
                name
                id
            }
            comments_post(order_by: {created_at: desc}) {
                comment
                email
                name
                created_at
            }
        }
    }
`

export const LOAD_POST_CATEGORY = gql`
    query getPostCategory($slug: String!) {
        post(where: {category_posts: {category: {slug: {_eq: $slug}}}}) {
            created_at
            content
            excerpt
            featured_image
            slug
            title
            author_info {
                name
            }
        }
    }
`

export const LOAD_FEATURED_POST = gql`
    query getFeaturedPost {
        post(where: {featured_post: {_eq: true}}) {
            author_info {
                name
            }
            title
            slug
            created_at
            featured_image
        }
    }
`

export const LOAD_PREVIOUS_POST = gql`
    query getPreviousPost($created_at: timestamptz!) {
        post(where: {created_at: {_lt: $created_at}}, limit: 1, order_by: {created_at: desc}) {
            featured_image
            slug
            title
            created_at
        }
    }
`

export const LOAD_NEXT_POST = gql`
    query getNextPost($created_at: timestamptz!) {
        post(where: {created_at: {_gt: $created_at}}, limit: 1) {
            featured_image
            slug
            title
            created_at
        }
    }
`

export const LOAD_LATEST_POST_ID = gql`
    query getLastPostID {
        post(limit: 1, order_by: {id: desc}) {
            id
        }
    }
`

export const LOAD_POST_TABLE = gql`
    query getPostTable {
        post(order_by: {created_at: desc}) {
            content
            created_at
            excerpt
            featured_image
            featured_post
            id
            id_author
            slug
            title
            category_posts {
                category {
                    name
                    slug
                    id
                }
            }
            comments_post {
                comment
            }
        }
    }
`

export const LOAD_AUTHOR_INFO = gql`
    query getAuthorInfo {
        author {
            name
            password
        }
    }
`