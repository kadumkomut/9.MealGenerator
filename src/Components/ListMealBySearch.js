import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {searchMealById, searchMealByName} from '../Api';
import ChatActive from '../Context/ChatActive';
import Circle from '../Loader/Circle'

export default function ListMealBySearch() {
    const {search,setType,topRef} = useContext(ChatActive);
    const [loading,setLoading] = useState(true);
    const [mealSet, setMealSet] = useState([]);
    useEffect(()=>{
        const fetch = async() =>{
            topRef.current.scrollIntoView({
                behavior: "smooth",
            });
            setLoading(true);
            await axios.get(`${searchMealByName}${search}`)
            .then(res=>{
                setMealSet(res.data.meals);
            })
            .then(()=>{
                setLoading(false);
                
            })
            .catch(err=>{
                console.log(err);
            });
        }
        fetch();
    },[search])
    return (
        <div>
            {
                loading?
                <div style={{display:"flex",justifyContent:"center",height:"70vh",adivgnItems:'center'}}><Circle /></div>:
                <ListSearch mealSet={mealSet} setLoading={setLoading} setType={setType}/>
            }


        </div>
    )
}

const ListSearch = ({mealSet,setType,setLoading}) =>{
    return (
        <ul>
            {
                mealSet.map(meal=>(
                    <List 
                        meal={meal}
                        key={meal.idMeal} 
                        id={meal.idMeal}
                        setLoading={setLoading} 
                        name={meal.strMeal} 
                        image={meal.strMealThumb} 
                        area={meal.strArea} 
                        setType={setType}
                        category={meal.strCategory}/>
                ))
            }
        </ul>
    );
}

const List = (props) =>{
    const {setMeal} = useContext(ChatActive);
    const setContent = async() =>{
        props.setLoading(true);
        setMeal(props.meal)
        props.setType(4);
    }
    return (
        <li onClick={setContent} className="w3-hover-dark" style={{listStyle:"none",padding:"10px 10px",display:"flex",alignItems:"center",cursor:"pointer"}}>
           <img src={props.image} alt={props.name} style={{width:"100px",height:"100px",marginRight:"10px"}}/> 
           <div >
                <h2>{props.name}</h2>
                <p><b>Area</b> : <span>{props.area}</span> <b>Category</b> : <span>{props.category}</span></p>
                <p></p>
           </div>
        </li>
    );
}