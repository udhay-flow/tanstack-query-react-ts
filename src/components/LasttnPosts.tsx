import { useQuery } from "@tanstack/react-query"
import { getApi } from "../service"
import type { PostProps } from "./PgntdQry"

const LasttnPosts = () => {

    // query
    const { data, isFetching, isError } = useQuery<PostProps>({
        queryKey: ["last_10_posts"],
        queryFn: () => getApi("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"),
        staleTime: Infinity
    })

    if (isFetching) return <h1>{'Loading...'}</h1>

    if (isError || !data) return <h1>An Error Occured...</h1>

    return (
        <div style={{ height: '100vh', overflow: 'scroll' }}>
            <h1 style={{textAlign: 'center'}}>Last 10 posts...</h1>
            {data.map((d, idx) => (
                <div key={idx}>
                    <h1>{d.title}</h1>
                    <h1>{d.body}</h1>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default LasttnPosts