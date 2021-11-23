import { useQuery } from "@apollo/client";
import { LOAD_RECENT_POST } from "../GraphQL/Query";

export default function useGetRecentPost() {
    const {
        error: errorGetRecentPost,
        loading: loadingGetRecentPost,
        data: dataGetRecentPost
    } = useQuery(LOAD_RECENT_POST);

    return { errorGetRecentPost, loadingGetRecentPost, dataGetRecentPost }
}