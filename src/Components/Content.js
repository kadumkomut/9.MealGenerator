import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import ChatActive from "../Context/ChatActive";


export default function Content(){
    const {meal,topRef} = useContext(ChatActive);

    useEffect(()=>{
        topRef.current.scrollIntoView({
            behavior: "smooth",
        });
    },[])
    return(
        <div className="randomMealMain">
    <div className="randomMealContent">
        <div className="top">
            <div className="left">
                <label>{meal.strMeal}</label>
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
            </div>
            <div className="right">
                <label>Ingredients</label>
                <div className="content">
                    {meal.strIngredient1&&<div>{meal.strMeasure1} {meal.strIngredient1}</div>}
                    {meal.strIngredient2&&<div>{meal.strMeasure2} {meal.strIngredient2}</div>}
                    {meal.strIngredient3&&<div>{meal.strMeasure3} {meal.strIngredient3}</div>}
                    {meal.strIngredient4&&<div>{meal.strMeasure4} {meal.strIngredient4}</div>}
                    {meal.strIngredient5&&<div>{meal.strMeasure5} {meal.strIngredient5}</div>}
                    {meal.strIngredient6&&<div>{meal.strMeasure6} {meal.strIngredient6}</div>}
                    {meal.strIngredient7&&<div>{meal.strMeasure7} {meal.strIngredient7}</div>}
                    {meal.strIngredient8&&<div>{meal.strMeasure8} {meal.strIngredient8}</div>}
                    {meal.strIngredient9&&<div>{meal.strMeasure9} {meal.strIngredient9}</div>}
                    {meal.strIngredient10&&<div>{meal.strMeasure10} {meal.strIngredient10}</div>}
                    {meal.strIngredient11&&<div>{meal.strMeasure11} {meal.strIngredient11}</div>}
                    {meal.strIngredient12&&<div>{meal.strMeasure12} {meal.strIngredient12}</div>}
                    {meal.strIngredient13&&<div>{meal.strMeasure13} {meal.strIngredient13}</div>}
                    {meal.strIngredient14&&<div>{meal.strMeasure14} {meal.strIngredient14}</div>}
                    {meal.strIngredient15&&<div>{meal.strMeasure15} {meal.strIngredient15}</div>}
                    {meal.strIngredient16&&<div>{meal.strMeasure16} {meal.strIngredient16}</div>}
                    {meal.strIngredient17&&<div>{meal.strMeasure17} {meal.strIngredient17}</div>}
                    {meal.strIngredient18&&<div>{meal.strMeasure18} {meal.strIngredient18}</div>}
                    {meal.strIngredient19&&<div>{meal.strMeasure19} {meal.strIngredient19}</div>}
                    {meal.strIngredient20&&<div>{meal.strMeasure20} {meal.strIngredient20}</div>}
                </div>
            </div>
        </div>
        <div className="middle">
            <label>Instructions</label>
            <pre>
                {meal.strInstructions}
            </pre>
        </div>

        {meal.strYoutube===""?null: 
            <div className="youtube">
                <label>Youtube</label>
                <div>
                    <ReactPlayer url={meal.strYoutube}/>
                </div>
            </div>
        }

        <div className="extra">
            <label>Area : {meal.strArea}</label><br/>
            <label>Category : {meal.strCategory}</label><br/>
            <label>Source : <a href={meal.strSource} target="_blank" rel="noreferrer">{meal.strSource}</a></label>
        </div>
        
    </div>
    </div>
    );
}
