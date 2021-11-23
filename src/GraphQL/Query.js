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
        }
    }
`