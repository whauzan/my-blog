import { useMutation } from "@apollo/client";
import { INSERT_COMMENT } from "../GraphQL/Mutation";
import { LOAD_POST_DETAIL } from "../GraphQL/Query";

export default function useInsertComment() {
    const [insertComment, {loading: loadingInsertComment}] = useMutation(INSERT_COMMENT, { refetchQueries: [LOAD_POST_DETAIL]});

    return { insertComment, loadingInsertComment }
}