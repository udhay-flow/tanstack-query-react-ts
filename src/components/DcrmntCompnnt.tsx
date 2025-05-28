import useRctQryAsStateMangmnt from './qryHooks/useRctQryAsStateMangmnt'

const DcrmntCompnnt = () => {
    // qry hook
    const { dcremntMthd } = useRctQryAsStateMangmnt()

    return (
        <>
            <h1>Decrement handler function... seperate component</h1>
            <button onClick={dcremntMthd}>Decrme..</button>
        </>
    )
}

export default DcrmntCompnnt