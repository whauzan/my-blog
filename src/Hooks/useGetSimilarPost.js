import { useQuery } from "@apollo/client";
import { LOAD_SIMILAR_POST } from "../GraphQL/Query";

export default function useGetSimilarPost(categories, slug) {
    const {
        error: errorGetSimilarPost,
        loading: loadingGetSimilarPost,
        data: dataGetSimilarPost
    } = useQuery(LOAD_SIMILAR_POST, {variables: { slug: slug, categories: categories }});

    return { errorGetSimilarPost, loadingGetSimilarPost, dataGetSimilarPost }
}