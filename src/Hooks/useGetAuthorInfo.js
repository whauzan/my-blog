import { useQuery } from "@apollo/client";
import { LOAD_AUTHOR_INFO } from "../GraphQL/Query";

export default function useGetAuthorInfo() {
    const {
        error: errorGetAuthorInfo,
        loading: loadingGetAuthorInfo,
        data: dataGetAuthorInfo
    } = useQuery(LOAD_AUTHOR_INFO);

    return { errorGetAuthorInfo, loadingGetAuthorInfo, dataGetAuthorInfo }
}