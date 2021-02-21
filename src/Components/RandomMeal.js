import React, { useContext, useEffect, useState } from 'react'
import {randomMeal,searchMealById} from '../Api';
import axios from 'axios';
import Content from './Content';

import Circle from '../Loader/Circle'
import ChatActive from '../Context/ChatActive';

export default function RandomMeal() {
    const {type,meal,setMeal} = useContext(ChatActive);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetch = async() =>{
            var api = "";
            if(type===1){
                api = randomMeal;
            }else if(type===2){
                api = searchMealById;
            }
            setLoading(true);
            await axios.get(api)
            .then(res=>{
                setMeal(res.data.meals[0]);
            }).then(()=>{
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
                setLoading(false);
            })                               
        }
        fetch();
    },[])
    return (
        <>
            {
                loading?
                <div style={{display:"flex",justifyContent:"center",height:"70vh",adivgnItems:'center'}}><Circle /></div>:
                <Content meal={meal[0]}/>
            } 
        </>
    )
}

