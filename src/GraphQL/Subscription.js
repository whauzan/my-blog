import { gql } from '@apollo/client'

export const SUBS_COMMENT = gql`
    subscription SubsComment {
        comment(order_by: {created_at: desc}) {
            post_comment {
                title
                slug
            }
            comment
            id
            name
            created_at
        }
    }
`

export const SUBS_COMMENT_EMAIL = gql`
    subscription getCommentEmail {
        comment {
            email
        }
    }
`