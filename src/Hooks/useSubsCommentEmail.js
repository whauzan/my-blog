import { useSubscription } from "@apollo/client";
import { SUBS_COMMENT_EMAIL } from "../GraphQL/Subscription";

export default function useSubsCommentEmail() {
    const {
        error: errorSubsCommentEmail,
        loading: loadingSubsCommentEmail,
        data: dataSubsCommentEmail
    } = useSubscription(SUBS_COMMENT_EMAIL);

    return { errorSubsCommentEmail, loadingSubsCommentEmail, dataSubsCommentEmail }
}