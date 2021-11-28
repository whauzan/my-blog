import { gql } from '@apollo/client'

export const INSERT_COMMENT = gql`
    mutation insertComment($comment: String!, $email: String!, $name: String!, $slug_post: String!) {
        insert_comment(objects: {comment: $comment, email: $email, name: $name, slug_post: $slug_post}) {
            affected_rows
        }
    }
`

export const INSERT_CATEGORY = gql`
    mutation insertCategory($name: String!, $slug: String!) {
        insert_category(objects: {name: $name, slug: $slug}) {
            affected_rows
        }
    }
`

export const INSERT_POST = gql`
    mutation insertPost($content: String!, $excerpt: String!, $featured_image: String!, $featured_post: Boolean!, $id_author: Int!, $slug: String!, $title: String!) {
        insert_post(objects: {content: $content, excerpt: $excerpt, featured_image: $featured_image, featured_post: $featured_post, id_author: $id_author, slug: $slug, title: $title}) {
            affected_rows
        }
    }
`

export const INSERT_POST_CATEGORY = gql`
    mutation insertPostCategory($id_category: Int!, $id_post: Int!) {
        insert_post_category(objects: {id_category: $id_category, id_post: $id_post}) {
            affected_rows
        }
    }
`