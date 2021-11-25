import { useQuery } from "@apollo/client";
import { LOAD_POST_CATEGORY } from "../GraphQL/Query";

export default function useGetPostCategory(slug) {
    const {
        error: errorGetPostCategory,
        loading: loadingGetPostCategory,
        data: dataGetPostCategory
    } = useQuery(LOAD_POST_CATEGORY, {variables: { slug: slug }});

    return { errorGetPostCategory, loadingGetPostCategory, dataGetPostCategory }
}