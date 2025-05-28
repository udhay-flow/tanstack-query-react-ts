import useRctQryAsStateMangmnt from "./qryHooks/useRctQryAsStateMangmnt"

const IncrmntCompnnt = () => {

    // qry hook
    const { increentMthd } = useRctQryAsStateMangmnt()

    return (
        <>
            <h1>Increment handler function... seperate component</h1>
            <button onClick={increentMthd}>Increment</button>
        </>
    )
}

export default IncrmntCompnnt