import { useQuery } from "@apollo/client";
import { LOAD_PREVIOUS_POST } from "../GraphQL/Query";

export default function useGetPreviousPost({ created_at }) {
    const {
        error: errorGetPreviousPost,
        loading: loadingGetPreviousPost,
        data: dataGetPreviousPost
    } = useQuery(LOAD_PREVIOUS_POST, {variables: {created_at: created_at}});

    return { errorGetPreviousPost, loadingGetPreviousPost, dataGetPreviousPost }
}