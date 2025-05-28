// import { useQuery } from "@tanstack/react-query"
// import { getApi } from "../service"
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
    // const limit = 5
    const pages = [1,2,3,4,5,6,7,8,9,10]

    // replace below consts
    const data: PostProps = [
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        }
    ]
    const isLoading = false
    const isError = false

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