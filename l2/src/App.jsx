import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SampleComonent from './SampleComponent'
import FunctionalComponent from './FunctionComponent'
import List from './List'
const data = {
  title: "Object title",
  content: "Object content",
  onClickButton: (e) => alert("Click")
};
let msg = "";
const people = [
  {
    id: 1,
    name: "Adam",
    age: 23
  },{
    id: 5,
    name: "Ewa",
    age: 22
  },{
    id: 6,
    name: "Karol",
    age: 25
  }
];
function App() {
  const [count, setCount] = useState(0)
  const [con, setCon] = useState(true)
  msg = count + "";
  return (
    <>
      <SampleComonent title="Tytuł" content="Treść" onClickButton = {(e) => alert("Click")}></SampleComonent>
      { con 
      ? <FunctionalComponent key = "1" title="Tytuł A" content="Treść"></FunctionalComponent>
      : <FunctionalComponent key = "2" title="Tytuł B" content="Treść"></FunctionalComponent>
      }
      <List data = {people} limit = {26} ></List>
      <button onClick={ e => setCon(!con)}>Change</button>
    </>
  )
}

export default App
