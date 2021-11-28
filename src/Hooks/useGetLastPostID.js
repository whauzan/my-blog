import { useQuery } from "@apollo/client";
import { LOAD_LATEST_POST_ID } from "../GraphQL/Query";

export default function useGetLastPostID() {
    const {
        data: dataLastPostID
    } = useQuery(LOAD_LATEST_POST_ID);

    return { dataLastPostID }
}