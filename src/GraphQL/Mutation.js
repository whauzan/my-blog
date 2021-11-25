import { gql } from '@apollo/client'

export const INSERT_COMMENT = gql`
    mutation insertComment($comment: String!, $email: String!, $name: String!, $slug_post: String!) {
        insert_comment(objects: {comment: $comment, email: $email, name: $name, slug_post: $slug_post}) {
            affected_rows
        }
    }
`