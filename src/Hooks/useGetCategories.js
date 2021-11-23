import { useQuery } from "@apollo/client";
import { LOAD_CATEGORIES } from "../GraphQL/Query";

export default function useGetCategories() {
    const {
        error: errorGetCategories,
        loading: loadingGetCategories,
        data: dataGetCategories
    } = useQuery(LOAD_CATEGORIES);

    return { errorGetCategories, loadingGetCategories, dataGetCategories }
}