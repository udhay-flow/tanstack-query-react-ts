// import BasicReactQryHook from './components/BasicReactQryHook'
import PgntdQry from './components/PgntdQry'
import ReactQryPrvdr from './providers/ReactQryPrvdr'

function App() {

  return (
    <>
      <ReactQryPrvdr>
        {/* <BasicReactQryHook /> */}
        {/* <BasicReactQryHook /> */}
        <PgntdQry />
      </ReactQryPrvdr>
    </>
  )
}

export default App
