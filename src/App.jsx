import Container from './components/Container'
import './App.css'
import Header from './components/Header'
import Headings from './components/Headings'
import Output from './components/Output'
import { useState } from 'react'


function App() {

    const [type, setType] = useState("image");

return(

<Container>
 <Header type={type} setType={setType}  ></Header>
 <Headings></Headings>
 <Output  type={type}  ></Output>
</Container>

)
}

export default App