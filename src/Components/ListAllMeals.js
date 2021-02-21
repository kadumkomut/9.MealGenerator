import axios from 'axios';
import React, { useContext,useEffect,useState } from 'react'
import { listMealByCategories } from '../Api';
import ChatActive from '../Context/ChatActive'
import Circle from '../Loader/Circle';

export default function ListAllMeals() {
    const {setMeal,meal} = useContext(ChatActive);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetch = async() =>{
            await axios.get(listMealByCategories)
                .then(res=>{
                    setMeal(res.data.categories);
                    setLoading(false);
                })
                .catch(err=>{
                    console.log(err)    
                })
        }
        fetch();
    },[])
    return (
        <div>
            {
                 loading?<div style={{display:"flex",justifyContent:"center",height:"70vh",adivgnItems:'center'}}><Circle /></div>:
                 <ListMeals meal={meal}/>
             }
        </div>
    )
}

const ListMeals = ({meal}) =>{
    return (
        <div>
            <ul className="w3-ul w3-xlarge">
            {
                meal.map(m=>(
                    <li className="w3-hover-dark" style={{cursor:"pointer",display:"flex",alignItems:"center",padding:"10px"}} key={m.idCategory}>
                        <img src={m.strCategoryThumb} alt={m.strCategory}/>  
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <h3> {m.strCategory}</h3><span> {m.strCategoryDescription}</span> 
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}
