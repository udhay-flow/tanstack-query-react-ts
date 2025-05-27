// import { useQuery } from "@tanstack/react-query"
// import { getApi } from "../service"

type UserProp = {
    id: number;
    name: string;
    email: string;
    address: AddressProp
}

type AddressProp = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoProp
}

type GeoProp = {
    lat: string;
    lng: string;
}

const BasicReactQryHook = () => {

    const isLoading = false
    const isError = false
    const data: UserProp = {
        id: 1,
        name: "Udhay",
        email: "udhay@gmail.com",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {lat: "", lng: ""}
        }
    }

    if (isLoading) return <h1>Loading...</h1>

    if (isError || !data) return <h1>An Error Occured...</h1>

    return (
        <>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h3>{JSON.stringify(data.address)}</h3>
        </>
    )
}

export default BasicReactQryHook