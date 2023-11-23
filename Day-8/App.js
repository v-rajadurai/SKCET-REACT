import {Provider} from 'react-redux'
import store from "./Day-8/Practice-At-Home/Redux";
import Card from "./Day-8/Practice-At-Home/Card";

export default function App() {
  return (
    <>
      <Provider store={store}>
      <Card/>
    </Provider>
    </>
  )
}
