import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { listAllArea, listAllCategories, listAllIngredients } from '../Api';
import ChatActive from '../Context/ChatActive';
import Circle from '../Loader/Circle'

export default function ListByCAI() {
    const {listType,setMeal} = useContext(ChatActive);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetch = async() =>{
            setLoading(true);
            var api = "";
            if(listType==="c") api = listAllCategories;
            if(listType==="a") api = listAllArea;
            if(listType==="i") api = listAllIngredients;
            await axios.get(api)
                .then(res=>{
                    setMeal(res.data.meals);
                })
                .catch(err=>{
                    console.log(err);   
                }).finally(()=>{
                    setLoading(false)
                })
        }
        fetch();
    },[])
    return (
        <div>

             {
                 loading?<div style={{display:"flex",justifyContent:"center",height:"70vh",adivgnItems:'center'}}><Circle /></div>:
                 listType==="c"?<ListCategories />:
                 listType==="a"?<ListArea />:null
             }   

        </div>
    )
}

const ListCategories = () =>{
    const {meal,setType,setListType,setFilter} = useContext(ChatActive);
    const change = (t,v) =>{
        setType(6);
        setListType(t);
        setFilter(v);
    }
    return (
        <div className="">
            <ul className="w3-ul w3-xlarge">
            {
                meal.map(m=>(
                    <li className="w3-hover-dark" style={{padding:"20px",cursor:"pointer",backgroundColor:"white",color:"black",border:"1px solid black"}} onClick={()=>change("c",m.strCategory)} key={m.strCategory}>{m.strCategory}</li>
                ))
            }
            </ul>
        </div>
    );
}

const ListArea = () =>{
    const {meal,setType,setListType,setFilter} = useContext(ChatActive);
    const change = (t,v) =>{
        setType(6);
        setListType(t);
        setFilter(v)
    }
    return (
        <div>
            <ul className="w3-ul w3-xlarge">
            {
                meal.map(m=>(
                    <li className="w3-hover-dark" style={{padding:"20px",cursor:"pointer",backgroundColor:"white",color:"black",border:"1px solid black"}}  onClick={()=>change("a",m.strArea)} key={m.strArea}>{m.strArea}</li>
                ))
            }
            </ul>
        </div>
    );
}

