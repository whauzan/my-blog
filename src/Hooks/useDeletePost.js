import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../GraphQL/Mutation";
import { LOAD_POST_TABLE } from "../GraphQL/Query";

export default function useDeletePost() {
    const [deletePost, {loading: loadingDeletePost}] = useMutation(DELETE_POST, {refetchQueries: [LOAD_POST_TABLE]});

    return { deletePost, loadingDeletePost }
}