import { useQuery } from "@apollo/client";
import { LOAD_NEXT_POST } from "../GraphQL/Query";

export default function useGetNextPost({ created_at }) {
    const {
        error: errorGetNextPost,
        loading: loadingGetNextPost,
        data: dataGetNextPost
    } = useQuery(LOAD_NEXT_POST, {variables: {created_at: created_at}});

    return { errorGetNextPost, loadingGetNextPost, dataGetNextPost }
}