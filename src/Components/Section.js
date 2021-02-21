import React, { useContext } from 'react'
import ChatActive from '../Context/ChatActive'
import Content from './Content'
import FilterByCAI from './FilterByCAI'
import Letter from './Letter'
import ListAllMeals from './ListAllMeals'
import ListByCAI from './ListByCAI'
import ListMealByIngredient from './ListMealByIngredient'
import ListMealBySearch from './ListMealBySearch'
import RandomMeal from './RandomMeal'

import allmeals from '../images/allmeals.jpg';
import randomImage from '../images/randommealimage.jpg';
import categoryImage from '../images/category.jpg';
import areaImage from '../images/area.jpg';

export default function Section() {
    const {type}  = useContext(ChatActive);
    return (
        <div className="section">
            

            {
                type===0?<Box/>:
                type===1?<RandomMeal/>:
                type===2?<ListMealByIngredient />:
                type===3?<ListMealBySearch/>:
                type===4?<Content />:
                type===5?<ListByCAI />:
                type===6?<FilterByCAI />:
                type===7?<ListAllMeals />:null
            }

            <Letter/>
            
        </div>
    )
}

const Box = () =>{
    const {setType,setListType} = useContext(ChatActive);
    const change = (t) =>{
        setType(5);
        setListType(t);
    }
    return(
        <div className="sectionBox">
            <div className="sectionBoxList">
                <div className="randomMeal w3-text-red w3-xxlarge" style={{backgroundImage:`url(${randomImage})`}}     onClick={()=>setType(1)}>
                    Random Meal
                </div>  
                <div className="w3-text-white w3-xxlarge" style={{backgroundImage:`url(${allmeals})`}} onClick={()=>setType(7)}>
                    All Meals
                </div>   
            </div>
            <div className="sectionBoxList">
                <div className="randomMeal w3-text-red w3-xxlarge" style={{backgroundImage:`url(${categoryImage})`}} onClick={()=>change("c")}>
                    Categories
                </div>  
                <div className="w3-text-light w3-xxlarge" style={{backgroundImage:`url(${areaImage})`}} onClick={()=>change("a")}>
                    Areas
                </div>
            </div>
            
            
        </div>
    );
}