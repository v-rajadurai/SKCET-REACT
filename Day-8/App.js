import {Provider} from 'react-redux'
// import Method from './Day-7/Practice-At-Home/httpmethod'
// import Hooks from './Day-8/Class-Work/hooks'
import store from "./Day-8/Practice-At-Home/Redux";
import Card from "./Day-8/Practice-At-Home/Card";

export default function App() {
  return (
    <>
    {/* <Hooks/> */}
      {/* <Method/> */}
      <Provider store={store}>
      <Card/>
    </Provider>
    </>
  )
}
