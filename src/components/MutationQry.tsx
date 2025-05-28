import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { postApi } from '../service'
import LasttnPosts from './LasttnPosts'

const cmnStyleObj = { padding: "12px", borderRadius: 6 }

const MutationQry = () => {

    // state
    const [body, setbody] = useState('')
    const [title, settitle] = useState('')

    // hook
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (payload: Record<string, string>) => postApi('https://jsonplaceholder.typicode.com/posts', payload),
        onSuccess: () => {
            alert('Updated successfully')
            setbody("")
            settitle("")
            // invalidate the last_10_posts query here...
        },
        onError: () => alert('An error occured!!!')
    })

    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            {isPending ? <h1 style={{minWidth: '300px', textAlign: 'center'}}>Mutation happening...</h1> :
                <div style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '12px', minWidth: '300px' }}>
                    <input placeholder='Body' style={cmnStyleObj} value={body} onChange={(e) => setbody(e.target.value)} />
                    <input placeholder='Title' style={cmnStyleObj} value={title} onChange={(e) => settitle(e.target.value)} />
                    <button style={cmnStyleObj} onClick={() => mutateAsync({ body, title })}>Submit</button>
                </div>
            }
            <LasttnPosts />
        </div>
    )
}

export default MutationQry