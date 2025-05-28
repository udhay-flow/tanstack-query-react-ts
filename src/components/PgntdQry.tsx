import { useQuery } from "@tanstack/react-query"
import { getApi } from "../service"
import { useState } from "react";

type PostProps = IndivPostProp[]

type IndivPostProp = {
    userId: number;
    id: number;
    title: string;
    body: string
}

const PgntdQry = () => {

    // state
    const [page, setPage] = useState(1)

    // const 
    const limit = 5
    const pages = [1,2,3,4,5,6,7,8,9,10]

    // query
    const { data, isLoading, isError } = useQuery<PostProps>({
        queryKey: ["posts", {page}],
        queryFn: () => getApi(`https://jsonplaceholder.typicode.com/posts?_start=${page * limit}&_limit=${limit}`),
        staleTime: 1000 * 60 * 5 // cache time
    })

    if (isLoading) return <h1>{'Loading...' + page + "'s data...."}</h1>

    if (isError || !data) return <h1>An Error Occured...</h1>

    return (
        <>
            {/* posts ui */}
            {data.map((d, idx) => (
                <div key={idx}>
                    <h1>{d.title}</h1>
                    <h1>{d.body}</h1>
                    <hr />
                </div>
            ))}
            {/* pagination ui */}
            {pages.map((p, idx) => (
                <button style={{marginLeft: '8px'}} key={idx} onClick={() => setPage(p)}>{p}</button>
            ))}
        </>
    )
}

export default PgntdQry