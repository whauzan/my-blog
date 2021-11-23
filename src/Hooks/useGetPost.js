import { useQuery } from "@apollo/client";
import { LOAD_POST } from "../GraphQL/Query";

export default function useGetPost() {
    const {
        error: errorGetPost,
        loading: loadingGetPost,
        data: dataGetPost
    } = useQuery(LOAD_POST);

    return { errorGetPost, loadingGetPost, dataGetPost }
}