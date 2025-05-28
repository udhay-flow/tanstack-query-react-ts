import useRctQryAsStateMangmnt from './qryHooks/useRctQryAsStateMangmnt'

const CountView = () => {

    // query hook
    const { countState } = useRctQryAsStateMangmnt()

    return (
        <>
            <h1>Count showing component</h1>
            <h1>{countState?.count}</h1>
        </>
    )
}

export default CountView