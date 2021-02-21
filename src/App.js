import {  useRef, useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';
import './styles/style.css';
import './w3.css';
import ChatActive from './Context/ChatActive';

function App() {
  const [type,setType] = useState(0);
  const [search,setSearch] = useState("");
  const topRef = useRef();
  const [meal,setMeal] = useState([]);
  const [listType,setListType] = useState("");
  const [filter,setFilter] = useState("")

  
  return (
    <ChatActive.Provider value={{type,setType,search,setSearch,topRef,meal,setMeal,listType,setListType,filter,setFilter}}>
    <div className="Main">
      
        <Header/>

        <Section type={type} search={search} setSearch={setSearch} setType={setType}/>

        
        <Footer />

    </div>
    </ChatActive.Provider>
  );
}

export default App;
