import { useQuery } from "@apollo/client";
import { LOAD_POST_TABLE } from "../GraphQL/Query";

export default function useGetPostTable() {
    const {
        error: errorGetPostTable,
        loading: loadingGetPostTable,
        data: dataGetPostTable
    } = useQuery(LOAD_POST_TABLE);

    return { errorGetPostTable, loadingGetPostTable, dataGetPostTable }
}