import Navbar from "./Component/Navbar"
import NewsArea from "./Component/NewsArea"
import { useState } from 'react';

const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsArea category={category}/>
    </div>
  )
}

export default App