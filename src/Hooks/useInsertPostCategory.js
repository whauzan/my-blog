import { useMutation } from "@apollo/client";
import { INSERT_POST_CATEGORY } from "../GraphQL/Mutation";

export default function useInsertPostCategory() {
    const [insertPostCategory, {loading: loadingInsertPostCategory}] = useMutation(INSERT_POST_CATEGORY);

    return { insertPostCategory, loadingInsertPostCategory }
}