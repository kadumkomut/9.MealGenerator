import React, { useContext, useState } from 'react'
import ChatActive from '../Context/ChatActive';

export default function Header() {
    const {setType,setSearch,topRef}  = useContext(ChatActive);
    const [inputValue,setInputValue] = useState("");
    const submit = (e) =>{
      e.preventDefault();
      setSearch(inputValue);
      setType(3)
    }
    return (
        <header ref={topRef}>
          <div  >
            <img style={{cursor:'pointer'}} onClick={()=>setType(0)} src={process.env.PUBLIC_URL+"ramen.png"} alt="meal icon"/>
            <h2>MEAL GENERATOR</h2>
            <form className="form" onSubmit={submit}>
              <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="search"/>
            </form>
          </div>
        </header>
    )
}
