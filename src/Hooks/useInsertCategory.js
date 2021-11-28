import { useMutation } from "@apollo/client";
import { INSERT_CATEGORY } from "../GraphQL/Mutation";
import { LOAD_CATEGORIES } from "../GraphQL/Query";

export default function useInsertCategory() {
    const [insertCategory, {loading: loadingInsertCategory}] = useMutation(INSERT_CATEGORY, { refetchQueries: [LOAD_CATEGORIES] });

    return { insertCategory, loadingInsertCategory }
}