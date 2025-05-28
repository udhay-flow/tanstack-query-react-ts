// import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
// import { postApi } from '../service'

const cmnStyleObj = { padding: "12px", borderRadius: 6 }

const MutationQry = () => {

    // state
    const [body, setbody] = useState('')
    const [title, settitle] = useState('')

    const isPending = false

    // hook
    // define hook here

    if (isPending) return (<h1>Query mutation happening...</h1>)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px', alignItems: 'center' }}>
            <input placeholder='Body' style={cmnStyleObj} value={body} onChange={(e) => setbody(e.target.value)} />
            <input placeholder='Title' style={cmnStyleObj} value={title} onChange={(e) => settitle(e.target.value)} />
            <button style={cmnStyleObj} onClick={() => {}}>Submit</button>
        </div>
    )
}

export default MutationQry