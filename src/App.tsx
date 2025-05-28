// import BasicReactQryHook from './components/BasicReactQryHook'
// import PgntdQry from './components/PgntdQry'
import MutationQry from './components/MutationQry'
// import RctQryAsStateMangmnt from './components/RctQryAsStateMangmnt'
import ReactQryPrvdr from './providers/ReactQryPrvdr'

function App() {

  return (
    <>
      <ReactQryPrvdr>
        {/* <BasicReactQryHook /> */}
        {/* <BasicReactQryHook /> */}
        {/* <PgntdQry /> */}
        {/* <RctQryAsStateMangmnt /> */}
        <MutationQry />
      </ReactQryPrvdr>
    </>
  )
}

export default App
