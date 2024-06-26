import { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [search,setSearch] = useState("")


  return (
    <div className="App">

      <Header/>

        <Content search={search} setSearch={setSearch}/>

      <Footer/>


    </div>
  );
}

export default App;
