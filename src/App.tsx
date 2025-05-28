// import BasicReactQryHook from './components/BasicReactQryHook'
// import PgntdQry from './components/PgntdQry'
import RctQryAsStateMangmnt from './components/RctQryAsStateMangmnt'
import ReactQryPrvdr from './providers/ReactQryPrvdr'

function App() {

  return (
    <>
      <ReactQryPrvdr>
        {/* <BasicReactQryHook /> */}
        {/* <BasicReactQryHook /> */}
        {/* <PgntdQry /> */}
        <RctQryAsStateMangmnt />
      </ReactQryPrvdr>
    </>
  )
}

export default App
