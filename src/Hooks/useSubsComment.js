import { useSubscription } from "@apollo/client";
import { SUBS_COMMENT } from "../GraphQL/Subscription";

export default function useSubsComment() {
    const {
        error: errorSubsComment,
        loading: loadingSubsComment,
        data: dataSubsComment
    } = useSubscription(SUBS_COMMENT);

    return { errorSubsComment, loadingSubsComment, dataSubsComment }
}