// import Card from './component/card'
// import Counter from './component/count'
// import DataComponent from './component/dataComponent'
// import Profile from './component/profile'
// import { useState } from "react"
// import AddCardItem from './component/stock'
import React from "react";

function App() {
  return (
    <ul>
      <li className="my-4">
        <a href="/card" className="btn btn-warning">
          Card
        </a>
      </li>
      <li className="my-4">
        <a href="/count" className="btn btn-warning ">
          Counter
        </a>{" "}
      </li>
      <li className="my-4">
        <a href="/stock" className="btn btn-warning">
          AddCardItem
        </a>
      </li>
      <li className="my-4">
        <a href="/DataComponent" className="btn btn-warning">
          DataComponent
        </a>
      </li>
    </ul>
  
  );
}

// const [data, setData] = useState(0)

// let data= {name:"Levi",age : 28, show :"aot" }

// return <Profile data={data}/>
// return < Counter/>
// return < Card/>
// return < DataComponent/>
// return < AddCardItem/>

export default App;
