import { useQuery } from "@apollo/client";
import { LOAD_FEATURED_POST } from "../GraphQL/Query";

export default function useGetFeaturedPost() {
    const {
        error: errorGetFeaturedPost,
        loading: loadingGetFeaturedPost,
        data: dataGetFeaturedPost
    } = useQuery(LOAD_FEATURED_POST);

    return { errorGetFeaturedPost, loadingGetFeaturedPost, dataGetFeaturedPost }
}