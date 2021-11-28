import { useMutation } from "@apollo/client";
import { INSERT_POST } from "../GraphQL/Mutation";
import { LOAD_LATEST_POST_ID } from "../GraphQL/Query";

export default function useInsertPost() {
    const [insertPost, {loading: loadingInsertPost}] = useMutation(INSERT_POST, {refetchQueries: [LOAD_LATEST_POST_ID]});

    return { insertPost, loadingInsertPost }
}