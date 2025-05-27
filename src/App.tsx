import BasicReactQryHook from './components/BasicReactQryHook'
import ReactQryPrvdr from './providers/ReactQryPrvdr'

function App() {

  return (
    <>
      <ReactQryPrvdr>
        <BasicReactQryHook />
      </ReactQryPrvdr>
    </>
  )
}

export default App
