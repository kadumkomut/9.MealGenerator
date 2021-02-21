import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { filterByArea, filterByCategory, searchMealById } from '../Api';
import ChatActive from '../Context/ChatActive';
import Circle from '../Loader/Circle'

export default function FilterByCAI() {
    const {filter,listType,setMeal} = useContext(ChatActive);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetch = async() =>{
            setLoading(true);
            var api = "";
            if(listType==="a") api= filterByArea;
            if(listType==="c") api = filterByCategory;

            await axios.get(api+filter)
                .then(res=>{
                    setMeal(res.data.meals)
                })
                .catch(err=>{
                    console.log(err);
                }).finally(()=>{
                    setLoading(false);
                })
        }
        fetch();
    },[])
    return (
        <div>
            {
                 loading?<div style={{display:"flex",justifyContent:"center",height:"70vh",adivgnItems:'center'}}><Circle /></div>:
                 listType==="c"?<ListCategories setLoading={setLoading}/>:
                 listType==="a"?<ListArea setLoading={setLoading}/>:null
             } 
        </div>
    )
}

const ListCategories = ({setLoading}) =>{
    const {meal,filter,setType,setMeal} = useContext(ChatActive);
    const change = async(id) =>{
        setLoading(true);
        await axios.get(searchMealById+id)
            .then(res=>{
                setMeal(res.data.meals[0]);
                setType(4);
            })
            .catch(err=>{
                console.log(err);
                setLoading(false);
            })
    }
    return(
        <div>
            <h1>{filter}</h1>
            <ul className="w3-ul w3-xlarge">
             {
                 meal.map(m=>(
                     <li onClick={()=>change(m.idMeal)} key={m.idMeal} className="w3-hover-dark" style={{cursor:"pointer"}}> <img src={m.strMealThumb} style={{width:"100px",height:"100px"}} alt={m.strMeal}/> {m.strMeal}</li>
                 ))
             }
             </ul>
        </div>
    );
}

const ListArea = ({setLoading}) =>{
    const {meal,filter,setMeal,setType} = useContext(ChatActive);
    const change = async(id) =>{
        setLoading(true);
        await axios.get(searchMealById+id)
            .then(res=>{
                setMeal(res.data.meals[0]);
                setType(4);
            })
            .catch(err=>{
                console.log(err);
                setLoading(false);
            })
    }
    return (
        <div>
            <h1>{filter}</h1>
            <ul className="w3-ul  w3-xlarge">
{               
                 meal.map(m=>(
                     <li onClick={()=>change(m.idMeal)} key={m.idMeal} className="w3-hover-dark" style={{cursor:"pointer"}}> <img src={m.strMealThumb} style={{width:"100px",height:"100px"}} alt={m.strMeal}/> {m.strMeal}</li>
                 ))
             }
             </ul>
        </div>
    );
}
