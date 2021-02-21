import React, { useContext, useEffect, useState } from 'react'
import ChatActive from '../Context/ChatActive';

export default function Letter() {
    const [loop,setLoop] = useState([]);
    const {setSearch,setType} = useContext(ChatActive);
    const letterLoop = () =>{
        var val = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var temp = [];
        for(let i=0;i<val.length;i++){
            temp.push(val.charAt(i));
            if(i<val.length-1)
                temp.push("/");
        }
        setLoop(temp);
    }
    const search = (l) =>{
        setSearch(l);
        setType(3)
    }
    useEffect(()=>{
        letterLoop();
    },[])
    return (
        <div className="letter">
            {
                loop&&loop.map(letter=>(
                    letter==='/'?
                    <span className="slash" key={letter}>{letter}</span>:
                    <span className="char" onClick={()=>search(letter)} key={letter}>{letter}</span>
                ))
            }
        </div>
    )
}
