import { useQuery } from "@apollo/client";
import { LOAD_POST_DETAIL } from "../GraphQL/Query";

export default function useGetPostDetail(slug) {
    const {
        error: errorGetPostDetail,
        loading: loadingGetPostDetail,
        data: dataGetPostDetail
    } = useQuery(LOAD_POST_DETAIL, {variables: { slug: slug }});

    return { errorGetPostDetail, loadingGetPostDetail, dataGetPostDetail }
}