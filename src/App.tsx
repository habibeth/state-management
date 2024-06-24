

import './App.css'
import UserInfoWithReducer from './components/UserInfoWithReducer'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="">
      {/* <CounterWithClass /> */}
      {/* <div className="">Parent: {count}</div>
      <CounterWithFuncCompo count={count} setCount={setCount} /> */}
      {/* <UserInfoWithState /> */}
      <UserInfoWithReducer />
    </div>
  )
}

export default App
